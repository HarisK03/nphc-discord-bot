const Discord = require('discord.js');

module.exports = {
  name: 'pause',
  description: 'pauses or resumes song',
  aliases: [],
  execute(message, args, distube) {
    if (args.length > 0) return;
    
    let queue = distube.getQueue(message);

    try {
      if (queue.songs.length > 0) {
        let paused = distube.isPaused(message);
        if (paused) {
          message.channel.send('**⏯️ Resumed**');
          distube.resume(message);
        }
        else {
          message.channel.send('**⏸️ Paused**');
          distube.pause(message);
        }
      }
    }
    catch(e) {
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