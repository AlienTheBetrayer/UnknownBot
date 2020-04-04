const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const user = message.mentions.members.first();
    const role = message.guild.roles.find(role => role.name === "muted");

    if(!user || !role) {
        message.react('❌');
        return;
    }

    if(message.member.hasPermission("KICK_MEMBERS", false, true, false)  || message.author.id == 351382367530647554) {
    if(user.roles.find(role => role.name === "muted")) {
        user.removeRole(role.id);
        message.react('✅');

        const User = message.mentions.members.first();
        const embed = new Discord.RichEmbed()
        .setTitle("Temporary Mute")
        .setTimestamp()  
        .setColor(0x3fb5a1)
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
        .setDescription("You got unmuted in " + User.guild.name);

        User.send(embed);
    }
} else {
    message.react('❌');
}
}

module.exports.config = {
    name: "unmute",
    aliases: []
}