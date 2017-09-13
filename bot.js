const settings = require("./config.json")
module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  if (message.channel.type === "dm") return message.reply(`Commands are not usable in DM.\nType \`${config.prefix}h\` in a server for help.`);
  if (message.channel.type === "group") return;
  
/* Pokémon Flame Yellow Exclusive */

if (message.channel.id === "323690694742900748") {
  message.react(message.guild.emojis.get("357348246881828864"));
  message.react(message.guild.emojis.get("357348246483370006"));
}

/* Main Code */
  if (!message.content.startsWith(settings.prefix)) return;
  let command = message.content.split(' ')[0].slice(settings.prefix.length);
  let args = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, args);
  }

};
