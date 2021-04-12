module.exports = {
  name: 'nicecutg',
  description: 'nice cut g',
  aliases: [],
  execute(message, args) {
    if (args.length > 0) return;
    
    message.channel.send("NICE CUT <@480781734896730112> https://www.youtube.com/watch?v=JFGJQLCarqk");
  },
}