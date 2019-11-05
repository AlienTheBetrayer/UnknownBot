const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const m = await message.channel.send("Ping!");
    const time = m.createdTimestamp - message.createdTimestamp
    m.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
    .setDescription("Bot's Latency")
    .addField("Net Latency:", time + "ms.", true)
    .addField("API Latency:", Math.round(client.ping) + "ms.", true)
    .setTimestamp()
    .setColor(0x3fb5a1);
    message.channel.send(embed);
}

module.exports.config = {
    name: "ping",
    aliases: []
}