module.exports = {
  name: 'poll',
  description: 'creates a poll for the proposed message',
  aliases: [],
  execute(message, args) {
    if (args.length == 0) return;
    
    const content = args.join(' ');
    message.delete();
    message.channel.send(content).then(function(message) {
      message.react("👍");
      message.react("👎");
    });
  },
}