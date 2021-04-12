module.exports = {
  name: 'play',
  description: 'plays song from text or url',
  aliases: ['p'],
  execute(message, args, distube) {
    if (args.length == 0) return;
    
    if (message.member.voice.channel === null) {
      message.reply('you need to be in a voice channel to use this command.');
      return;
    } 

    try {  
      let content = args.join(' ');
      distube.play(message, content);
    }
    catch(e) {}
  },
}