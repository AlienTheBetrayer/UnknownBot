const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const roleName = args[0];
    const roleColor = args[1];
    let color;

    if(!roleName) {
        message.react('❌');
        return;
    }
    
    if(message.member.hasPermission("ADMINISTRATOR") || message.author.id == 351382367530647554) {
        color = roleColor ? roleColor : "000000";
        const role = await message.guild.createRole({
            name: roleName,
            color: color
        })
        message.react('✅');
    } else {
        message.react('❌');
    }
}

module.exports.config = {
    name: "createrole",
    aliases: ["cr"]
}