const Discord = require('discord.js');

module.exports = {
  name: 'avatar',
  description: 'displays users avatar',
  aliases: ['av'],
  execute(message, args) {
    const user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({size: 1024});

    const embed = new Discord.MessageEmbed()
      .setColor(0x333333)
      .setAuthor(user.username)
      .setImage(avatar)
    message.channel.send(embed);
  },
}