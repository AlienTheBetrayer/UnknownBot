const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const user = message.mentions.members.first();
    const role = message.mentions.roles.first();
    if(user == undefined || role == undefined) return;
    if(message.member.hasPermission("ADMINISTRATOR") || message.author.id == 351382367530647554) {
        message.member.addRole(role.id);
    }
}

module.exports.config = {
    name: "addrole",
    aliases: ["ar"]
}