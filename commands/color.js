const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
    const regex = /[0-9A-Fa-f]/g;
    if(args[0] == undefined) return;
    if(!(regex.test(args[0]))) return;
    
    const embed = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("Color")
    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
    .setColor(args[0])
    .setDescription("#" + args[0]);
    message.channel.send(embed);
}

module.exports.config = {
    name: "color",
    aliases: ["c"]
}