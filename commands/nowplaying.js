const Discord = require('discord.js');

module.exports = {
  name: 'nowplaying',
  description: 'displays the current playing song',
  aliases: ['np'],
  execute(message, args, distube) {
    if (args.length > 0) return;
    
    if (distube.isPlaying(message)) {
      let queue = distube.getQueue(message);
      let np = (queue.songs[0].name);
      let url = (queue.songs[0].url);
      let duration = (queue.songs[0].formattedDuration);
      let author = (queue.songs[0].user.username);
      let tag = (queue.songs[0].user.discriminator);
      let vc = (queue.connection.channel.name);

      const embed = new Discord.MessageEmbed()
        .setFooter('Requested by: ' + author + '#' + tag)
        .setColor('#E74C3C')
        .addFields(
        {
          name: '♪ Now Playing in ' + vc ,
          value: '[**' + np + '**]('+ url + ') \`' + duration + '\`',
        });

      message.channel.send(embed);
    }
    else {
      const embed = new Discord.MessageEmbed()
        .setColor('#E74C3C')
        .addFields({
          name: '♪ No Playing Song',
          value: 'Use `?play` to play a song',
        });
        
      message.channel.send(embed);
    }
  },
}