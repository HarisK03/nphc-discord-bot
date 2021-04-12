const Discord = require('discord.js');

module.exports = {
  name: 'dev',
  description: 'learn about Haris (developer of NPHC bot)',
  aliases: [],
  execute(message, args) {
    if (args.length > 0) return;
    
    const embed = new Discord.MessageEmbed()
      .setTitle('Haris Kamal')
      .setThumbnail('https://i.imgur.com/RVrCHSo.png')
      .setFooter('Connect With Me')
      .setColor('#E74C3C')
      .setDescription('Executive of North Park Hack Club 2020-21 and Lead Developer of the North Park Hack Bot')
      .addFields(
      {
        name: 'Personal Website',
        value: 'http://hariskamal.tech/' + '\n\u200B',
      },
      {
        name: 'Github',
        value: 'https://github.com/HarisK03' + '\n\u200B',
      },
      {
        name: 'Devpost',
        value: 'https://devpost.com/HarisK03' + '\n\u200B',
      },
      {
        name: 'Linkedin',
        value: 'https://www.linkedin.com/in/hariskamal' + '\n\u200B',
      })
    message.channel.send(embed);
  },
}