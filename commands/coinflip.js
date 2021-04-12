module.exports = {
  name: 'coinflip',
  description: 'flips a coin',
  aliases: ['cf'],
  execute(message, args) {
    if (args.length > 0) return;
    
    const num = Math.round(Math.random());
    if (num == 0) message.channel.send('You got **Heads!**');
    else message.channel.send('You got **Tails!**');
  },
}