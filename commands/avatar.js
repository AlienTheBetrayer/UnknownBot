const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
    const embed = new Discord.RichEmbed()
    const user = message.mentions.users.first();
    if(args[0] != undefined) {
         const embed = new Discord.RichEmbed()
         .setTitle("Avatar | " + user.tag)
         .setImage(user.displayAvatarURL)
         .setColor(0x3fb5a1)
         .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
         .setTimestamp();
         message.channel.send(embed);
    } else {    
        const embed = new Discord.RichEmbed()
        .setTitle("Avatar | " + message.author.tag)
        .setImage(message.author.displayAvatarURL)
        .setColor(0x3fb5a1) 
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
        .setTimestamp();
        message.channel.send(embed);
    }

}

module.exports.config = {
    name: "avatar",
    aliases: ["av"]
}