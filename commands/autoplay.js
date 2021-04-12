module.exports = {
  name: 'autoplay',
  description: 'enables or disables queue autoplay',
  aliases: [],
  execute(message, args, distube) {
    if (args.length > 0) return;

    if (message.member.voice.channel === null) {
      message.reply('you need to be in a voice channel to use this command.');
      return;
    } 

    if (distube.isPlaying(message)) {
      if (distube.toggleAutoplay(message)) message.channel.send("**✅ Autoplay Enabled**");
      else message.channel.send("**❌ Autoplay Disabled**");
    }
    else message.reply('NPHC bot needs to be playing a song to use this command.');
  },
}

