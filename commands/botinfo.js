const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setTimestamp()
    .setColor(0x3fb5a1)
    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
    .addField("Github", "https://github.com/AlienTheBetrayer/UnknownBot", false)
    .addField("Version", "1.0", true)
    .addField("Uptime", "type $uptime", true)
    .addField("Prefix", "$", true)
    .addField("")
    message.channel.send(embed);
}

module.exports.config = {
    name: "botinfo",
    aliases: ["botinformation"]
}