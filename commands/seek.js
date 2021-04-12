module.exports = {
  name: 'seek',
  description: 'seek in the track',
  aliases: [],
  execute(message, args, distube) {
    if (args.length == 0) return;
    
    if (message.member.voice.channel === null) {
      message.reply('you need to be in a voice channel to use this command.');
      return;
    } 

    if (distube.isPlaying(message)) {
      if (!isNaN(args[0])) {
        let seconds = parseInt(args[0]) * 1000;
        
        distube.seek(message, seconds);
        message.channel.send('⏩ **Set position to ' + args[0] + ' seconds!**');
      }
      else message.reply('provided argument is not a number.');
    }
    else message.reply('NPHC bot needs to be playing a song to use this command.');
  },
}