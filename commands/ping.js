module.exports = {
  name: 'ping',
  description: 'pong',
  aliases: [],
  execute(message, args) {
    if (args.length > 0) return;
    
    message.channel.send('Pong!');
  },
}

