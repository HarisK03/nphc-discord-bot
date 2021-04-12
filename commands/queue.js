const Discord = require('discord.js');

module.exports = {
  name: 'queue',
  description: 'displays songs in queue	',
  aliases: ['q'],
  execute(message, args, distube) {
    if (args.length > 0) return;
    
    try {
      let queue = distube.getQueue(message);

      let np = (queue.songs[0].name);
      let url = (queue.songs[0].url);
      let duration = (queue.songs[0].formattedDuration);
      let author = (queue.songs[0].user.username);
      let tag = (queue.songs[0].user.discriminator);

      const embed = new Discord.MessageEmbed()
        .setColor('#E74C3C')
        .setTitle('Queue for ' + message.guild.name)
        .setFooter(queue.songs.length + ' Songs in Queue')
        .addFields(
        {
          name: '__Now Playing:__',
          value: '[' + np + ']('+ url + ')' + ' | '  + '`' + duration + ' Requested by: ' + author + '#' + tag + '`',
        });

      if (queue.songs.length > 1) {
        embed.addField('__Up Next:__', '`' + 1 + '.` ' + '[' + queue.songs[1].name + '](' + queue.songs[1].url + ')' + ' | ' + '`' + queue.songs[1].formattedDuration + ' Requested by: ' + queue.songs[1].user.username + '#' + queue.songs[1].user.discriminator + '`');
      }

      try {
        for (i = 2; i < 11; i++) {
        embed.addField('\u200B', '`' + i + '.` ' + '[' + queue.songs[i].name + '](' + queue.songs[i].url + ')' + ' | ' + '`' + queue.songs[i].formattedDuration + ' Requested by: ' + queue.songs[i].user.username + '#' + queue.songs[i].user.discriminator + '`');
        }
      }
      catch {}

      message.channel.send(embed);
    }
    catch {
      const embed = new Discord.MessageEmbed()
        .setColor('#E74C3C')
        .addFields({
          name: '♪ No Songs in Queue',
          value: 'Use `?play` to play a song',
        });
        
      message.channel.send(embed);
    }
  },
}