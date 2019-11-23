const Discord = require("discord.js");

function getRandomInt() {
    return(Math.floor(Math.random() * 100) + 1)
}


module.exports.run = async(client, message, args) => {
    if(args[0] == undefined) return;
    const msg = args.slice(0).join(" ");
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
    .setTimestamp()
    .setColor(0x3fb5a1)
    .addField("Message", msg)
    .addField("Percents", getRandomInt() + "%")
    message.channel.send(embed);
}

module.exports.config = {
    name: "100ball",
    aliases: []
}