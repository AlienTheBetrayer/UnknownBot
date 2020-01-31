const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const user = message.mentions.members.first();
    const role = message.mentions.roles.first();
    if(user == undefined) {
        message.react('❌');
        return;
    }
    if(message.member.hasPermission("ADMINISTRATOR") || message.author.id == 351382367530647554) {
        if(role == undefined) {
            const role_ = message.guild.roles.find(element => element.name == args[1]);
            user.removeRole(role_.id);
            message.react('✅');
        } else {
        user.removeRole(role.id);
        message.react('✅');
        }
    } else {
        message.react('❌');
    }
}

module.exports.config = {
    name: "removerole",
    aliases: ["rr"]
}