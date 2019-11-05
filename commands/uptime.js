const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const botupt = client.uptime;
    const hours = Math.round(botupt / 3600 / 1000);
    const minutes = Math.round(botupt / 60 / 1000);
    const seconds = Math.round(botupt / 1000);
    const botuptstr = hours + "h. " + minutes + "m. " + seconds + "s.";

    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
    .setDescription("Bot's uptime: " + botuptstr)
    .setTimestamp()
    .setColor(0x3fb5a1);
    message.channel.send(embed);
}

module.exports.config = {
    name: "uptime",
    aliases: ["upt"]
}