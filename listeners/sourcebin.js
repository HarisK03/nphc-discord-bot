const sourcebin = require('sourcebin');

module.exports = {
  name: 'sourcebin',
  description: 'automatically uploads large code blocks to https://sourceb.in/',
  aliases: [],
  sourcebin: async function(message) {
    if (message.author.bot) return;
    if (message.content.toLowerCase().startsWith('\`\`\`') && message.content.length <= 2000) {
      let member = message.author.username;
      let content = message.content.substr('\`\`\`'.length);
      content = content.slice(0, -3)
      let language = content.split('\n')[0];
      let lines = content.split('\n');
      lines.splice(0,1);
      let newtext = lines.join('\n');

      switch(language) {
        case 'apache': {language = 'ApacheConf'; break;}
        case 'html': {language = 'HTML'; break;}
        case 'xml': {language = 'XML'; break;}
        case 'sh': {language = 'Shell'; break;}
        case 'shell': {language = 'Shell'; break;}
        case 'bash': {language = 'Shell'; break;}
        case 'coffeescript': {language = 'CoffeeScript'; break;}
        case 'cs': {language = 'CoffeeScript'; break;}
        case 'c++': {language = 'C++'; break;}
        case 'csharp': {language = 'C#'; break;}
        case 'css': {language = 'CSS'; break;}
        case 'markdown': {language = 'Markdown'; break;}
        case 'diff': {language = 'Diff'; break;}
        case 'ruby': {language = 'Ruby'; break;}
        case 'go': {language = 'Go'; break;}
        case 'http': {language = 'HTTP'; break;}
        case 'toml': {language = 'TOML'; break;}
        case 'ini': {language = 'INI'; break;}
        case 'java': {language = 'Java'; break;}
        case 'js': {language = 'JavaScript'; break;}
        case 'javascript': {language = 'JavaScript'; break;}
        case 'json': {language = 'JSON'; break;}
        case 'kotlin': {language = 'Kotlin'; break;}
        case 'less': {language = 'Less'; break;}
        case 'lua': {language = 'Lua'; break;}
        case 'makefile': {language = 'Makefile'; break;}
        case 'perl': {language = 'Perl'; break;}
        case 'nginx': {language = 'Nginx'; break;}
        case 'objc': {language = 'Objective-C'; break;}
        case 'php': {language = 'PHP'; break;}
        case 'py': {language = 'Python'; break;}
        case 'python': {language = 'Python'; break;}
        case 'r': {language = 'R'; break;}
        case 'rust': {language = 'Rust'; break;}
        case 'scss': {language = 'SCSS'; break;}
        case 'sql': {language = 'SQL'; break;}
        case 'swift': {language = 'Swift'; break;}
        case 'yaml': {language = 'YAML'; break;}
        case 'ts': {language = 'TypeScript'; break;}
        case 'typescript': {language = 'TypeScript'; break;}
        case 'vb': {language = 'Visual Basic .NET'; break;}
        default: {language = 'Text'; break;} 
      }

      const bin = await sourcebin.create([
        {
          content: newtext,
          language: language,
          name: 'NPHC Code Snippet Requested for ' + member,
        },],
        {
          title: 'NPHC Code Snippet',
          description: 'Requested for ' + member,
        },
      );
      message.channel.send('I\'ve automatically uploaded your code to <' + bin.url + '>. ' + 'When possible, please consider using a code source sharing service.');
    }
  }
}