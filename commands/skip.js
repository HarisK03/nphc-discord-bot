module.exports = {
  name: 'skip',
  description: 'skip n songs in queue',
  aliases: ['s'],
  execute(message, args, distube) {
    if (message.member.voice.channel === null) {
      message.reply('you need to be in a voice channel to use this command.');
      return;
    } 

    if (distube.isPlaying(message)) {
      if (args.length == 0) { 
        distube.skip(message);
        message.channel.send('⏩ **Skipped**');   
      }
      else {
        if (!isNaN(args[0])) {
          try {
            distube.jump(message, args[0]);
            message.channel.send('⏩ **Skipped to Song ' + args[0].toString() + '**');
          }
          catch {
            message.reply('not a vaid song number.');
          }
        }
        else message.reply('provided argument is not a number.');
      }
    }
    else message.reply('NPHC bot needs to be playing a song to use this command.');
  },
}