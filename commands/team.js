module.exports = {
  name: 'team',
  description: 'create a team with up to four members',
  aliases: [],
  execute(message, args) {
    if (args.length == 0) return;
    if (message.mentions.members.size < 1 || message.mentions.members.size > 4) return;

    const str = message.content.substr('?team '.length);
    const teamName = [];
    let stringArray = str.split(/(\s+)/);
    for (i = 0; i < stringArray.length; i++) {
      if ((!stringArray[i].startsWith('<')) && (stringArray[i] != ' ')) {
        teamName.push(stringArray[i]);
      }
    }
    roleName = 'TEAM - ' + teamName.join(' ');
    if (teamName.length > 0) {
      if (message.guild.roles.cache.find(r => r.name == roleName)) {
        message.channel.send('Team name already exists. Try picking a new team name.');
        return;
      }
      else {
        try {
          let guild = message.guild;
          guild.roles.create({
            data:{
              name: roleName,
              color:"grey",
            },
            reason:"team create command",
          }).then(function(){
            let member = message.mentions.members.array();
            let role = message.guild.roles.cache.find(r => r.name == roleName);
            for (i = 0; i < member.length; i++) {
              member[i].roles.add(role);
            }
            message.reply('team created!');
          })
        } 
        catch (error) {
          console.log(error);
        }
      }
    } 
  },
}