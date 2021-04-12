module.exports = {
  name: 'mcompand',
  description: 'enables or disables mcompand filter',
  aliases: [],
  execute(message, args, distube) {
    if (args.length > 0) return;

    if (message.member.voice.channel === null) {
      message.reply('you need to be in a voice channel to use this command.');
      return;
    } 

    if (distube.isPlaying(message)) {
      let filter = distube.setFilter(message, 'mcompand');
      if (filter) message.channel.send('**✅ Mcompand Enabled**');
      else message.channel.send('**❌ Mcompand Disabled**');
    }
    else message.reply('NPHC bot needs to be playing a song to use this command.');
  },
}