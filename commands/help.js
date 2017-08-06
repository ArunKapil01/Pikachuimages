const Discord = require("discord.js");
const settings = require('../config.json');
exports.run = (client, message, args) => {
  if (!args[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    
    /* new code starts here, delete this part if not works, replace with original if not works */
    const embed = new Discord.RichEmbed()
    .setColor(4447003)
    .setAuthor(client.user.username, client.user.avatarURL)
    .setTitle("List Of Commands")
    .setDescription(`\`\`\`\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}\n\`\`\``)
    .setFooter(`Use ${settings.prefix}help <commandname> for details on a specific command.`);
    message.author.send({embed});
    message.reply("Check your Direct Message!");
    /* new code ends here */
  } else {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      const cmdhelp = new Discord.RichEmbed()
      .setColor(4447003)
      .setDescription(`\`${command.help.name} ${command.help.alias}\`\n${command.help.description}\n**${command.help.permit}**`)
      .addField(`Usage`, `\`${settings.prefix}${command.help.usage}\``)
      .setFooter(`Module: ${command.help.module}`)
      message.channel.send({embed: cmdhelp});
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]',
  module: 'Help',
  permit: ' ',
  alias: '/ h'
};

/* Help & Conf example

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: ' ',
  description: ' ',
  usage: ' ',
  module: ' ',
  permit: ' ',
  alias: ' '
};

exports.run = (client, message, args) => {
// code here
};

// aliases example

aliases: ['h', 'help'],

example ends here */

/* perm levels (incomplete)
0 = ???
1 = Requires Manage_Messages
2 = Requires Manage_Server
3 = Requires Administration
4 = Requires Bot Ownership
*/
