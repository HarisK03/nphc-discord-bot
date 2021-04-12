const Discord = require('discord.js');

module.exports = {
  name: 'info',
  description: 'provides more server info',
  aliases: [],
  execute(message, args) {
    if (args.length > 0) return;
    
    const { guild } = message;
    const { name, region, memberCount, owner } = guild;
    const icon = guild.iconURL();

    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info for "${name}"`)
      .setThumbnail(icon)
      .addFields(
      {
        name: 'Region',
        value: region,
      },
      {
        name: 'Members',
        value: memberCount,
      },
      {
        name: 'Owner',
        value: owner.user.tag + '\n\u200B',
      },
      {
        name: 'Socials',
        value: '<:discord:802431722213212191>' + ' [NPHC Discord](https://discord.gg/yrP64bKmqe)',
        inline: true,
      },
      {
        name: '\n\u200B',
        value: '<:teams:802431684753621014>' + ' [NPHC MS Teams](https://teams.microsoft.com/l/channel/19%3ae15dd65647bd4f6181bfc57076f9f6c5%40thread.tacv2/General?groupId=5974dcb7-eb75-4514-8061-24c43e836b71&tenantId=a494743f-7201-494d-a452-f48c5388c4c0)',
        inline: true,
      },
      {
        name: '\n\u200B',
        value: '<:instagram:802431710180540437>' + ' [NPHC Instagram](https://www.instagram.com/npss.hackclub/)',
        inline: true,
      },
      {
        name: '\n\u200B',
        value: '<:github:804916624946888734>' + ' [NPHC Github](https://github.com/NPHackClub/)',
        inline: true,
      },
      {
        name: '\n\u200B',
        value: '<:slack:802431732509966336>' + ' [Hack Club Slack](https://hackclub.com/slack/)',
        inline: true,
      },
      {
        name: '\n\u200B',
        value: '<:iconrounded:802431776232177675>' + ' [Hack Club Website](https://hackclub.com/)',
        inline: true,
      });
    message.channel.send(embed);
  },
}