const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    
    if(args[0] == undefined) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
    .setDescription("User's info")
    .addField("Name", message.author.tag, true)
    .addField("ID", message.member.id, true)
    .addField("Joined Discord", message.author.createdAt)
    .addField("Joined guild", message.member.joinedAt)
    .setTimestamp()
    .setColor(message.member.displayHexColor);
    message.channel.send(embed);
    } else {
        const memb = message.mentions.members.first();
        const muser = memb.user;
        const embed = new Discord.RichEmbed()
        .setAuthor(muser.username + "#" + muser.discriminator, muser.displayAvatarURL)
        .setDescription("User's info")
        .addField("Name", muser.tag, true)
        .addField("ID", memb.id, true)
        .addField("Joined Discord",muser.createdAt)
        .addField("Joined guild", memb.joinedAt)
        .setTimestamp()
        .setColor(memb.displayHexColor);
        message.channel.send(embed);
    }
}

module.exports.config = {
    name: "userinfo",
    aliases: ["ui"]
}