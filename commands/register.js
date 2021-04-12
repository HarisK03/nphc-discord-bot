module.exports = {
  name: 'register',
  description: 'register as a NPHC member',
  aliases: [],
  execute(message, args) {
    if (args.length > 0 || message.channel.name !== 'register') return;

    let memberRole = (message.guild.roles.cache.find(r => r.name == 'Member'));
    let notRegisteredRole = (message.guild.roles.cache.find(r => r.name == '!Registered'));
    if (message.member.roles.cache.find(r => r.name === 'Member')) {
      message.reply('you are already registered.');
      message.delete();
    }
    else {
      message.member.roles.add(memberRole);
      message.reply('registered!');
      message.member.roles.remove(notRegisteredRole);
      message.delete();
    }
  },
}