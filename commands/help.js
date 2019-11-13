const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setTitle("Available modules")
    .setColor(0x3fb5a1)
    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
    .setDescription(`
    • Help
    • Informative
    • Moderation
    • Events
    • Games
    `)
    .setFooter("Type #hm <module> to see module's commands")
    .setTimestamp();
    message.channel.send(embed);
}

module.exports.config = {
    name: "help",
    aliases: ["h"]
}