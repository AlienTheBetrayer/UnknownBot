const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const user = message.mentions.members.first();
    const messagea = args.slice(1).join(" ");

    if(!user) {
        message.react('❌');
        return;
    }

    if(message.member.hasPermission("KICK_MEMBERS", false, true, false)  || message.author.id == 351382367530647554) {
    if(messagea) {
        const embed = new Discord.RichEmbed()
     .setTitle("Warn")
     .setTimestamp()
     .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
     .setColor(0x3fb5a1)
     .setDescription("You got warned in " + message.guild.name + " for: " + messagea);
     user.send(embed);
        message.react('✅');
    } else {
        const embed = new Discord.RichEmbed()
     .setTitle("Warn")
     .setTimestamp()
     .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
     .setColor(0x3fb5a1)
     .setDescription("You got warned in " + message.guild.name + " with no reason");
     user.send(embed);
        message.react('✅');
    }
} else {
        message.react('❌');
}

}

module.exports.config = {
    name: "warn",
    aliases: []
}