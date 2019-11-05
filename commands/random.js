const Discord = require("discord.js");

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

module.exports.run = async(client, message, args) => {
    if((args[0] || args[1]) == undefined) return;
    if(isNaN(args[0]) || isNaN(args[1])) return;
    if(args[0] > args[1]) return;
    if(args[0] < 0 || args[1] < 0) return;

    if(!(args[0] == args[1])) {
            const randNumber = rand(Math.floor(args[0]), Math.floor(args[1]));
            const embed = new Discord.RichEmbed()
            .setTimestamp()
            .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
            .setDescription(Math.floor(randNumber))
            .setColor(0x019587)
            .setTitle("Random number");
            message.channel.send(embed)
    } else {
        const randNumber = rand(args[0], args[1]);
        const embed = new Discord.RichEmbed()
        .setTimestamp()
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
        .setDescription(args[0])
        .setColor(0x019587)
        .setTitle("Random number");
        message.channel.send(embed)
    }
}

module.exports.config = {
    name: "random",
    aliases: ["rand"]
}