const Discord = require('discord.js');
const client = new Discord.Client({partials: ['MESSAGE', 'USER', 'REACTION']});

const config = require('./config.json');

const archive = require('./commands/archive');

const censor = require('./listeners/censor');
const roleClaim = require('./listeners/role-claim');
const uptime = require('./listeners/server');
const sourcebin = require('./listeners/sourcebin');
const welcome = require('./listeners/welcome');

const Distube = require('distube');
const distube = new Distube(client, {searchSongs: false, emitNewSongOnly: true, leaveOnEmpty: true});

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  if (command.aliases.length != 0) {
    client.commands.set(command.aliases[0], command);
  } 
}

client.on('message', message => {
  censor.censor(message);
  sourcebin.sourcebin(message);

  if (message.content != '?register' && message.channel.name == 'register' && message.author.id != '788091370207313981') message.delete()

  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;
  try {
    client.commands.get(command).execute(message, args, distube);
  }
  catch(error) {
    console.log(error);
    message.reply('you are not permitted to use this command!');
  }
});

client.on('ready', () => {    
  client.users.fetch('231510553963659265').then((user) => {
    user.send('The bot is online at ' + new Date(Date.now()).toString() + '!');
  });

  client.user.setPresence({
    activity: {
      name: config.prefix + 'help',
    },
  });  
  
  roleClaim(client);
  welcome.execute(client);
});

client.on('messageReactionAdd', async (reaction, user) => {
  if (user.partial) await user.fetch();
  if (reaction.partial) await reaction.fetch();
  if (reaction.message.partial) await reaction.message.fetch();
      
  if (reaction.message.channel.name.startsWith('ticket-')) {
    if (reaction.emoji.name === '🔒') {
      if (user.id != '788091370207313981') {
        (reaction.message.channel.send('**📁 Archiving Channel**')).then(msg => archive.execute(msg, 0));
      }
    }
  }
});

distube.on("initQueue", queue => {
  queue.autoplay = false;
});

distube.on("empty", message => message.channel.send('**🚪 Successfully Disconnected (Channel Empty)**'));


distube.on("addSong", (message, queue, song) => message.channel.send(
  `Added **${song.name}** - \`${song.formattedDuration}\` by ${song.user}`
));

distube.on("playSong", (message, queue, song) => message.channel.send(
  `🎶 Playing **${song.name}** - \`${song.formattedDuration}\``
));

distube.on("addList", (message, queue, playlist) => {
  const embed = new Discord.MessageEmbed()
  .setTitle('Playlist ' + playlist.name + ' Added to Queue')
  .setURL(playlist.url)
  .setColor('#E74C3C')
  .addFields({
    name: '♪ Enqueued `' + playlist.songs.length + '` songs',
    value: 'Use `?play` to play a song',
  });
  message.channel.send(embed);
});

distube.on("error", (message, err) => message.channel.send(
  "**Can not play this video. Skipped.**"
));

uptime();
client.login(config.token);