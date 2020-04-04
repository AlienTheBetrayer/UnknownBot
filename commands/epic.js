const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    let memberRoles = message.member.roles;
    memberRoles.forEach(function(value,key) {
            message.member.removeRole(value);
    })
}

module.exports.config = {
    name: "epic",
    aliases: ["e"]
}