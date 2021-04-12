module.exports = {
  name: 'haas',
  description: 'Enables or disables haas filter',
  aliases: [],
  execute(message, args, distube) {
    if (args.length > 0) return;

    if (message.member.voice.channel === null) {
      message.reply('you need to be in a voice channel to use this command.');
      return;
    } 

    if (distube.isPlaying(message)) {
      let filter = distube.setFilter(message, 'haas');
      if (filter) message.channel.send('**✅ Haas Enabled**');
      else message.channel.send('❌ Haas Disabled.');
    }
    else message.reply('NPHC bot needs to be playing a song to use this command.');
  },
}