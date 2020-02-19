const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const user = message.mentions.members.first();
    const role = message.guild.roles.find(role => role.name === "muted");

    if(!user || !role) {
        message.react('❌');
        return;
    }

    if(user.roles.find(role => role.name === "muted")) {
        user.removeRole(role.id);
        message.react('✅');
    }
}

module.exports.config = {
    name: "unmute",
    aliases: []
}