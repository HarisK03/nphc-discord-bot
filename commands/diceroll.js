module.exports = {
  name: 'diceroll',
  description: 'rolls a n-sided die',
  aliases: ['roll'],
  execute(message, args) {
    if (args.length == 0) {
      const num = Math.floor(Math.random() * 6) + 1;
      message.channel.send('You rolled a **' + num.toString() + '!**');
    }
    else {
      const num = Math.floor(Math.random() * parseInt(args[0])) + 1;
      message.channel.send('You rolled a **' + num.toString() + '!**');
    }
  },
}