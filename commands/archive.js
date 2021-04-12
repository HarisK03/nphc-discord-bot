const fs = require('fs').promises;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM();
const document = dom.window.document;

module.exports = {
  name: 'archive',
  description: 'archives the messages in the text channel',
  aliases: [],
  execute(message, args) {
    if (args.length > 0) return;

    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.reply('archiving has begun. Please do not use the command again.');
      createFile(message);
      archiveChannel(message, message.id);
    }
    else {
      message.reply('you do not have permission to use this command.');
    }
  },
}

function archiveChannel(message, messageID) {
  try {
    let archived = message.channel.messages.fetch({ before: messageID, limit: 100 }).then(map => {
      if (map.size == 0) {
        let archiveChannel = message.guild.channels.cache.get('831034766915665950');
        archiveChannel.send('**✅ `' + message.channel.name + '` Archived**', {
          files: [
            './data/index.html'
          ]
        });
        if ((message.channel.name).startsWith('ticket-')) message.channel.delete();
        else message.channel.send('**✅ `' + message.channel.name + '` Archived**');
        return;
      }
      map.forEach(async msg => {
        if (msg.content != '' || msg.attachments.size != 0 || msg.embeds.size != 0 || msg.type == 'PINS_ADD') {
          
          let date = new Date(msg.createdTimestamp);
          let day = date.getDate();
          let month = date.getMonth() + 1;
          let year = date.getFullYear(); 
          let time = date.toLocaleTimeString();

          let messageContainer = document.createElement("div");
          messageContainer.className = "message-container";
          let pfp = document.createElement("div");
          pfp.className = "pfp";
          let img = document.createElement("img");
          img.setAttribute('src', msg.author.displayAvatarURL());
          let content = document.createElement("div");
          content.className = "content";
          let username = document.createElement("h4");
          username.className = "username";
          username.appendChild(document.createTextNode(msg.author.username + "#" + msg.author.discriminator));
          let dateMessage = document.createElement("h4");
          dateMessage.className = "date";
          dateMessage.appendChild(document.createTextNode(month + '/' + day + '/' + year + " - " + time));

          content.append(username);
          content.append(dateMessage);
          pfp.append(img);
          messageContainer.append(pfp);
          
          if (msg.attachments.size != 0) {
            msg.attachments.find(async attachment => {
              if (msg.content != "") {
                let message = document.createElement("p");
                message.className = "message";
                message.appendChild(document.createTextNode(msg.content));
                content.append(message);
              }
              
              // pictures
              if ((attachment.url).endsWith(".png") || (attachment.url).endsWith(".jpg") || (attachment.url).endsWith(".jpeg")) {
                let contentImageContainer = document.createElement("div");
                contentImageContainer.className = "content-image";
                let contentImage = document.createElement("img");
                contentImage.setAttribute('src', attachment.url);
                contentImageContainer.append(contentImage);
                content.append(contentImageContainer);
              }
              // attachments
              else {
                let attachmentFile = document.createElement("a");
                attachmentFile.className = "attachment-file";
                attachmentFile.setAttribute('href', attachment.url);
                attachmentFile.appendChild(document.createTextNode("Attachment"));
                content.append(attachmentFile);
              } 
            });
          }
          // regular image
          else {
            let message = document.createElement("p");
            message.className = "message";
            message.appendChild(document.createTextNode(msg.content));
            content.append(message);
          }
          messageID = msg.id;
          messageContainer.append(content);
          await fs.appendFile('./data/index.html', messageContainer.outerHTML).catch(err => console.log(err));
        }
      })
      setTimeout(function() {archiveChannel(message, messageID)}, 5000);
    });
  }
  catch (e) {console.log(e)}
} 

async function createFile(message) {
  let data = await fs.readFile('./data/template.html', 'utf8').catch(err => console.log(err)); 
  await fs.writeFile('./data/index.html', data);

  let wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  let header = document.createElement("header");
  let channelContainer = document.createElement("div");
  channelContainer.className = "channel-name";
  let banner = document.createElement("h3");
  let hashtag = document.createElement("a");
  hashtag.appendChild(document.createTextNode("#"));
  banner.append(hashtag);
  banner.appendChild(document.createTextNode(" " + message.channel.name));
  channelContainer.append(banner);
  header.append(channelContainer);
  wrapper.append(header);

  await fs.appendFile('./data/index.html', wrapper.outerHTML).catch(err => console.log(err));

  let push = document.createElement("div");
  push.className = "push";

  await fs.appendFile('./data/index.html', push.outerHTML).catch(err => console.log(err));
}