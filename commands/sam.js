const Discord = require('discord.js');

module.exports = {
  name: 'sam',
  description: 'learn about Sam (co-founder of NPHC)',
  aliases: [],
  execute(message, args) {
    if (args.length > 0) return;
    
    const embed = new Discord.MessageEmbed()
      .setTitle('Sam Assareymuriyil')
      .setThumbnail('https://i.ibb.co/rZP149X/me.jpg')
      .setFooter('Connect With Me')
      .setColor('#E74C3C')
      .setDescription('Co-Founder and Co-President of North Park Hack Club 2020-21 and Assistant Developer of the North Park Hack Bot')
      .addFields(
      {
        name: 'Personal Website',
        value: 'https://samabrahama.tech/' + '\n\u200B',
      },
      {
        name: 'Github',
        value: 'https://github.com/SamAssareymuriyil' + '\n\u200B',
      },
      {
        name: 'Devpost',
        value: 'https://devpost.com/GuitarSlayerSam' + '\n\u200B',
      },
      {
        name: 'Linkedin',
        value: 'https://www.linkedin.com/in/sam-abraham-assareymuriyil/' + '\n\u200B',
      });
    message.channel.send(embed);
  },
}