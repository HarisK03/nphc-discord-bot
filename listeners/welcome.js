const { Client, Intents } = require("discord.js");
const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES'] } });

module.exports = {
  name: 'welcome',
  description: 'message for user welcome and member count display',
  aliases: [],
  execute(client) {
    const channelId = '804890662859309067'; // welcome channel
    const targetChannelId = '804894207755812934'; // register channel
    const channelCountId = '804892543833341962'; // member count display
    const guild = client.guilds.cache.get('723578168224776323');

    client.on('guildMemberAdd', (member) => {
      const message = `Welcome to the North Park Hack Club Discord server, <@${member.id}>! Please ${member.guild.channels.cache
      .get(targetChannelId)
      .toString()} to gain access to the rest of the server!`;

      let role = member.guild.roles.cache.find(role => role.name === '!Registered');
      member.roles.add(role);

      const channel = member.guild.channels.cache.get(channelId);
      channel.send(message);

      updateMembers(member.guild);
    });

    const updateMembers = (guild) => {
      const channel = guild.channels.cache.get(channelCountId);
      channel.setName(`Members: ${guild.memberCount.toLocaleString()}`);
    }
    updateMembers(guild);
  }
}
