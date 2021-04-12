module.exports = {
  name: '3d',
  description: 'enables or disables 3D filter',
  aliases: [],
  execute(message, args, distube) {
    if (args.length > 0) return;
    
    if (message.member.voice.channel === null) {
      message.reply('you need to be in a voice channel to use this command.');
      return;
    }

    if (distube.isPlaying(message)) {
      let filter = distube.setFilter(message, '3d');
      if (filter) message.channel.send('**✅ 3D Enabled**');
      else message.channel.send('**❌ 3D Disabled**');
    }
    else message.reply('NPHC bot needs to be playing a song to use this command.');
  },
}