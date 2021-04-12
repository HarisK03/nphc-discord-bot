const Discord = require('discord.js');

module.exports = {
  name: 'rules',
  description: 'displays the server rules',
  aliases: [],
  execute(message, args) {
    if (args.length > 0) return;
  
    const img = new Discord.MessageEmbed()
      .setImage('https://i.imgur.com/xt0ZMXj.png')
      .setColor('#E74C3C')

    const embed = new Discord.MessageEmbed()
      .setFooter('Please Contact Mods For More Assistance')
      .setColor('#E74C3C')
      .addFields(
      {
        name: '#1 Adhere to Discord TOS',
        value: 'https://discord.com/terms' + '\n\u200B',
      },
      {
        name: '#2 No swearing / explicit content (18+)',
        value: 'This is a school-based server. Stay smart.' + '\n\u200B',
      },
      {
        name: '#3 No hate speech (racism, homophobia, etc.)',
        value: 'This will not be tolerated. Be kind.' + '\n\u200B',
      },
      {
        name: '#4 Keep content relevant to channel',
        value: 'Keeps server organized.' + '\n\u200B',
      },
      {
        name: '#5 No harassment and/or abuse to any member',
        value: 'Still a school server.' + '\n\u200B',
      },
      {
        name: '#6 Do not spam pings when mentioning @everyone, @Presidents, and @Mentors/Exec',
        value: 'Wait 4 hours between each ping. We will respond when we are available.' + '\n\u200B',
      },
      {
        name: '#7 Respect everyone',
        value: 'Treat people with respect and you will earn respect.' + '\n\u200B',
      },
      {
        name: '#8 Change your nickname to your first name (/nick)',
        value: 'Allows us to easily identify members.' + '\n\u200B',
      },
      {
        name: '#9 Have Fun',
        value: 'This is a club, not a class.' + '\n\u200B',
      });

    message.channel.send(img);
    message.channel.send(embed);
  },
}