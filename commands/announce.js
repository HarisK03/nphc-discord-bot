module.exports = {
  name: 'announce',
  description: 'sends a message using the NPHC bot',
  aliases: ['say'],
  execute(message, args) {
    if (args.length == 0) return;
    
    let content = args.join(' ');
    if (message.member.roles.cache.find(r => r.name === 'Mentor')) {
      message.delete();
      message.channel.send(content);
    }
    else message.reply('you do not have the sufficient permissions to execute this command.');
  },
}