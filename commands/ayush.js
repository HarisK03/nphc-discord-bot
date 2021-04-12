const Discord = require('discord.js');

module.exports = {
  name: 'ayush',
  description: 'learn about Ayush (co-founder of NPHC)',
  aliases: [],
  execute(message, args) {
    if (args.length > 0) return;
    
    const embed = new Discord.MessageEmbed()
      .setTitle('Ayush Vora')
      .setThumbnail('https://cdn.discordapp.com/attachments/403313351788331009/768256683126161408/is_moi.jpg')
      .setFooter('Connect With Me')
      .setColor('#E74C3C')
      .setDescription('Co-Founder and Co-President of North Park Hack Club 2020-21')
      .addFields(
      {
        name: 'Github',
        value: 'https://github.com/ayushtvora' + '\n\u200B',
      },
      {
        name: 'Devpost',
        value: 'https://devpost.com/ayushtvora' + '\n\u200B',
      },
      {
        name: 'Linkedin',
        value: 'https://www.linkedin.com/in/ayushtvora/' + '\n\u200B',
      })
    message.channel.send(embed);
  },
}