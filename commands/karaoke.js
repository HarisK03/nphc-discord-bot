module.exports = {
  name: 'karaoke',
  description: 'enables or disables karaoke filter',
  aliases: [],
  execute(message, args, distube) {
    if (args.length > 0) return;

    if (message.member.voice.channel === null) {
      message.reply('you need to be in a voice channel to use this command.');
      return;
    } 

    if (distube.isPlaying(message)) {
      let filter = distube.setFilter(message, 'karaoke');
      if (filter) message.channel.send('**✅ Karaoke Enabled**');
      else message.channel.send('**❌ Karaoke Disabled**');
    }
    else message.reply('NPHC bot needs to be playing a song to use this command.');
  },
}