module.exports = {
  name: 'related',
  description: 'adds a related song to queue',
  aliases: [],
  execute(message, args, distube) {
    if (args.length > 0) return;
    
    if (message.member.voice.channel === null) {
      message.reply('you need to be in a voice channel to use this command.');
      return;
    } 

    if (distube.isPlaying(message)) distube.addRelatedVideo(message);
    else message.reply('NPHC bot needs to be playing a song to use this command.');
  },
}