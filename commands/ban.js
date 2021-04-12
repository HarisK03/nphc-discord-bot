module.exports = {
  name: 'ban',
  description: 'bans a targetted user',
  aliases: [],
  execute(message, args) {
    if (args.length == 0) return;
    
    if (message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('BAN_MEMBERS')) {
      let target = message.mentions.users.first();
      if (message.mentions.members.size < 1) {
        message.reply('please specify which user you want to ban.');
        return;
      }
      if (target.id === message.author.id) {
        message.reply('you can\'t ban yourself.');
        return;
      }
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id);
        targetMember.ban();
        message.reply(`that user has been banned.`);
      } 
    }
    else {
      message.reply('you do not have permission to use this command.');
    }
  },
}