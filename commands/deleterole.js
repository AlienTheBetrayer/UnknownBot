const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const role = message.mentions.roles.first();


    if(message.member.hasPermission("ADMINISTRATOR") || message.author.id == 351382367530647554) {
        if(role == undefined) {
            const role_ = message.guild.roles.find(element => element.name == args[0]);
            role_.delete();
            message.react('✅');
        } else {
            role.delete();
        message.react('✅');
        }
    } else {
        message.react('❌');
    }
}

module.exports.config = {
    name: "deleterole",
    aliases: ["dr"]
}