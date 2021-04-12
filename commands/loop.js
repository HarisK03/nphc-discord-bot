module.exports = {
  name: 'loop',
  description: 'loops song or queue',
  aliases: [],
  execute(message, args, distube) {
    if (args.length > 0) return;
    
    if (message.member.voice.channel === null) {
      message.reply('you need to be in a voice channel to use this command.');
      return;
    } 
    
    if (distube.isPlaying(message)) {
      let mode = distube.setRepeatMode(message, parseInt(args[0]));
      mode = mode ? mode == 2 ? "Queue" : "Song" : "Disabled";
      message.channel.send("**🔄 Looping " + mode + "**");
    }
    else message.reply('NPHC bot needs to be playing a song to use this command.');
  },
}