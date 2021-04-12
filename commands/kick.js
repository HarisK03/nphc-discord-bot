module.exports = {
  name: 'kick',
  description: 'kicks a targetted user',
  aliases: [],
  execute(message, args) {
    if (args.length == 0) return;
    
    if (message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('KICK_MEMBERS')) {
      target = message.mentions.users.first();
      if (message.mentions.members.size < 1) {
        message.reply('please specify which user you want to kick.');
        return;
      }
      if (target.id === message.author.id) {
        message.reply('you can\'t kick yourself.');
        return;
      }
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id);
        targetMember.kick();
        message.reply('that user has been kicked.');
      } 
    }
    else {
      message.reply('you do not have permission to use this command.');
    }
  },
}