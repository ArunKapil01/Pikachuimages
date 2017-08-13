const Discord = require("discord.js");
const config = require("../config.json")

module.exports = guild => {
  let client = guild.client;
  const bot = client.user;
  const botOwner = client.users.get(config.botOwner);
  botOwner.send(`Someone invited me in ${guild.name}, I will do my best there.`);
  const embed = new Discord.RichEmbed()
    .setDescription(`Hello there, I am **${bot.username}**, a Discord.js Bot made by **${botOwner.tag}**.\nType \`${config.prefix}h\` for a list of commands.\nAdditionally, I will send cool welcome and goodbye messages in a channel named #\`welcome_goodbye\`. Be sure to make one if you want embedded greet-and-bye messages.`);
  guild.defaultChannel.send({embed});
}