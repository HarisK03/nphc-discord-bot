const Discord = require('discord.js');

module.exports = {
  name: 'help',
  description: 'displays the help menu',
  aliases: [],
  execute(message, args) {
    if (args.length > 0) return;
    
    const embed = new Discord.MessageEmbed()
      .setColor('#E74C3C')
      .addFields({
        name: 'NPHC Discord Bot Help\n\u200B',
        value: '✅ [Click here](http://nphcdiscord.ml/) for a list of commands',
      });
    message.channel.send(embed);
  },
}
