const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const user = message.mentions.members.first();
    const role = message.mentions.roles.first();
    if(user == undefined) return;
    if(message.member.hasPermission("ADMINISTRATOR") || message.author.id == 351382367530647554) {
        if(role == undefined) {
            const role_ = message.guild.roles.find(element => element.name == args[1]);
            user.addRole(role_.id);
        } else {
        user.addRole(role.id);
        }
    }
}

module.exports.config = {
    name: "addrole",
    aliases: ["ar"]
}