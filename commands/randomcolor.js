const Discord = require("discord.js");

function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}

module.exports.run = async(client, message, args) => {
    const color = randomColor();
    const embed = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("Random color")
    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
    .setColor(color)
    .setDescription("#" + color);
    message.channel.send(embed);
}

module.exports.config = {
    name: "randomcolor",
    aliases: ["rc", "randcolor"]
}