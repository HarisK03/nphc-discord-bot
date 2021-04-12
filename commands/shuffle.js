module.exports = {
  name: 'shuffle',
  description: 'shuffles the queue',
  aliases: [],
  execute(message, args, distube) {
    if (args.length > 0) return;
    
    if (message.member.voice.channel === null) {
      message.reply('you need to be in a voice channel to use this command.');
      return;
    } 

    if (distube.isPlaying(message)) {
      message.channel.send('🔀 **Shuffled**');
      distube.shuffle(message);
    }
    else message.reply('there is nothing to shuffle.');
  },
}