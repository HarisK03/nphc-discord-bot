const fs = require('fs');

module.exports = {
  name: 'censor',
  description: 'deletes user\'s message containing profane and/or offensive word(s)',
  aliases: [],
  censor: function(message) {
    if (message.channel.name === 'middle-management') return;
    
    let args = message.content.split(' ');
    fs.readFile("./data/badwords.txt", (error, data) => {
      if (error) {
        throw error;
      }
      let words = (data.toString());
      words = words.split('\n')
      for (i = 0; i < args.length; i++) {
        if (words.includes(args[i].toLowerCase())) {
          message.delete();
          message.reply('language warning.');
          return;
        }
      }
    });
  }
}