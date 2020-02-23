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
        switch(roleColor){
            case "cyan":
                color = "1abc9c";
            break;
            case "dark_cyan":
                color = "16a085";
            break;
            case "green":
                color = "2ecc71";
            break;
            case "dark_green":
                color = "27ae60";
            break;
            case "blue":
                color = "3498db";
            break;
            case "dark_blue":
                color = "2980b9";
            break;
            case "purple":
                color = "9b59b6";
            break;
            case "dark_purple":
                color = "8e44ad";
            break;
            case "yellow":
                color = "f1c40f";
            break;
            case "dark_yellow":
                color = "f39c12";
            break;
            case "orange":
                color = "e67e22";
            break;
            case "dark_orange":
                color = "d35400";
            break;
            case "red":
                color = "e74c3c";
            break;
            case "dark_red":
                color = "c0392b";
            break;
            case "asphalt":
                color = "34495e";
            break;
            case "black":
                color = "2c3e50";
            break;
             case "gray":
                color = "95a5a6";
            break;
        }
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