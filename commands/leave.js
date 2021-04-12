module.exports = {
  name: 'leave',
  description: 'disconnects NPHC bot from voice channel',
  aliases: ['dc'],
  execute(message, args, distube) {
    if (args.length > 0) return;

    if (message.member.voice.channel === null) {
      message.reply('you need to be in a voice channel to use this command.');
      return;
    } 

    if (distube.isPlaying(message)) {
      distube.stop(message);
      message.channel.send('**🚪 Successfully Disconnected**');
    }
    else {
      let member = message.guild.members.cache.get('788091370207313981');
      if (member.voice.channel) {
        member.voice.kick();
        message.channel.send('**🚪 Successfully Disconnected**');
      }
    }
  },
}
