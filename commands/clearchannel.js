module.exports = {
  name: 'clearchannel',
  description: 'mass delete messages in a channel',
  aliases: ['cc'],
  execute(message, args) {
    if (args.length > 0) return;
    
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.messages.fetch().then((results) => {
        message.channel.bulkDelete(results);
      })
    }
    else message.reply('you do not have permission to use this command.');
  },
}