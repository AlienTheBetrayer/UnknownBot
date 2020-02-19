const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    let toMute = message.mentions.members.first();

    if(!toMute) {
        message.react('❌');
        return;
    }

    if(toMute.hasPermission("MANAGE_MESSAGES")) {
        message.react('❌');
        return;
    }

    let muterole = message.guild.roles.find(role => role.name === "muted");

    if(!muterole) {
            muterole = await message.guild.createRole({
                name: "muted",
                color: "#000000",
                permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    READ_MESSAGES: false
                });
            });
    }  

    await(toMute.addRole(muterole.id));
    message.react('✅');

}

module.exports.config = {
    name: "mute",
    aliases: []
}