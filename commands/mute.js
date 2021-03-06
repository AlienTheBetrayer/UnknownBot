const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    let toMute = message.mentions.members.first();
    let reasonMessage = args.slice(1).join(" ");

    if(!toMute) {
        message.react('❌');
        return;
    }

    if(toMute.hasPermission("MANAGE_MESSAGES")) {
        message.react('❌');
        return;
    }
    
    if(message.member.hasPermission("KICK_MEMBERS", false, true, false)  || message.author.id == 351382367530647554) {
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

        const User = message.mentions.members.first();
        if(!reasonMessage) {
            reasonMessage = "not specified.";
        }
        const embed = new Discord.RichEmbed()
        .setTitle("Permanent Mute")
        .setTimestamp()  
        .setColor(0x3fb5a1)
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
        .setDescription("You got permanently muted in " + User.guild.name + ". Reason: " + reasonMessage);

        User.send(embed);

    } else {
        message.react('❌');
    }
}

module.exports.config = {
    name: "mute",
    aliases: []
}