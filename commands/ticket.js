const Discord = require('discord.js');

module.exports = {
  name: 'ticket',
  description: 'send a ticket to server moderators',
  aliases: [],
  execute(message, args) {
    if (args.length == 0) return;
    
    let name = message.member.user.tag;
    name = name.split("#");
    name = name[0] + name[1];

    if ((message.guild.channels.cache.find(c => c.name.toLowerCase() === 'ticket-' + name.toLowerCase()))) {
      message.reply('you have an open ticket. Please resolve that first.');
      return;
    }

    let ticketRole = message.author.id;
    let everyoneRole = message.guild.id;
    let mentorRole = (message.guild.roles.cache.find(r => r.name == 'Mentor'));
    let content = args.join(' ');

    const ticket = new Discord.MessageEmbed()
      .setTitle('Open Ticket')
      .setAuthor('Opened by ' + message.member.user.tag)
      .setThumbnail(message.author.avatarURL())
      .setColor('#E74C3C')
      .setDescription(content)

    const channel = message.guild.channels.create('ticket-' + name, {
      parent: '806969474896494692',
      permissionOverwrites: [
        {deny: 'VIEW_CHANNEL', id: everyoneRole},
        {allow:'VIEW_CHANNEL', id: ticketRole},
        {allow:'VIEW_CHANNEL', id: mentorRole}  
      ]
    }).then(channel => {
      channel.send(ticket).then(msg => {
        msg.react('🔒');
        msg.pin();
      })
    })
    message.reply('your ticket has been sent!').then(msg => {
      msg.react('✅');
    })
    message.delete();
  },
}