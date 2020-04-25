const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    let totalSeconds = 86390 + client.uptime / 1000;
    let hours = Math.floor(totalSeconds / 3600);
    let days = 0;
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.round(totalSeconds % 60);
    if(hours == 24) {
        days++;
        hours = 0;
    }


    const botuptstr = days + "d. " + hours + "h. " + minutes + "m. " + seconds + "s.";

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