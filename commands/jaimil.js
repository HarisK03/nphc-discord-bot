const Discord = require('discord.js');

module.exports = {
  name: 'jaimil',
  description: 'learn about Jaimil (co-founder of NPHC)',
  aliases: [],
  execute(message, args) {
    if (args.length > 0) return;
    
    const embed = new Discord.MessageEmbed()
      .setTitle('Jaimil Dalwadi')
      .setThumbnail('https://i.ibb.co/dGBBdc5/jimu.jpg')
      .setFooter('Connect With Me')
      .setColor('#E74C3C')
      .setDescription('Co-Founder and Co-President of North Park Hack Club 2020-21')
      .addFields(
      {
        name: 'Personal Website',
        value: 'https://jaimildalwadi.tech/' + '\n\u200B',
      },
      {
        name: 'Github',
        value: 'https://github.com/theDe-bugger' + '\n\u200B',
      },
      {
        name: 'Devpost',
        value: 'https://devpost.com/theDe-bugger' + '\n\u200B',
      },
      {
        name: 'Linkedin',
        value: 'https://www.linkedin.com/in/jaimil-dalwadi' + '\n\u200B',
      });
    message.channel.send(embed);
  },
}