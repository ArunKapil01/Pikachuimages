const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setTitle("List Of Roles")
    .setColor(3447003)
    .setDescription(message.guild.roles.map(r=>r.name).join(", "));
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'roles',
  description: 'Gives a list of roles in that server.',
  usage: 'roles',
  module: 'Other',
  permit: ' ',
  alias: ' '
}; 
