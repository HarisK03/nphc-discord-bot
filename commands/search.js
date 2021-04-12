const Discord = require('discord.js');

module.exports = {
  name: 'search',
  description: 'search for a song and add to queue',
  aliases: [],
  execute(message, args, distube) {
    if (args.length == 0) return;

    if (message.member.voice.channel === null) {
      message.reply('you need to be in a voice channel to use this command.');
      return;
    } 

    let content = args.join(' ');

    const embed = new Discord.MessageEmbed()
    .setFooter('Requested by: ' + message.author.username + '#' + message.author.discriminator + ' | ' + 'Type cancel to stop the search')
    .setColor('#E74C3C')
    .setTitle('Search Resuls for ' + content)

    distube.search(content).then(data => {
      try {
        for (i = 0; i < 10; i++) {
          embed.addField('\u200B', '`' + parseInt(i + 1) + '.` ' + '[' + data[i].name + '](' + data[i].url + ')' + ' **[' + data[i].formattedDuration + ']**');
        }
        message.channel.send(embed);
        
        try {
          const filter = m => (m.author.bot == false && parseInt(m.content) >= 1 && parseInt(m.content) <= 10) || (m.author.bot == false && m.content == 'cancel');
          const collector = message.channel.createMessageCollector(filter, { max: 1, time: 15000 });

          collector.on('collect', m => {
            collector.stop();
          });

          collector.on('end', collected => {
            if (collected.size == 0) {
              message.channel.send('**❌ Timed Out**');
            }
            else {
              let number = collected.forEach(n => {
                if (n.content == 'cancel') {
                  message.channel.send('**❌ Search Cancelled**');
                }
                else {
                  distube.play(message, data[parseInt(n.content) - 1].url);
                }
              });
            }
          });
        }
        catch {}
      }
      catch {}
    })
  },
}