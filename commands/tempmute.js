const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const toMute = message.mentions.members.first();
    const muteTime = args[1];
    let reasonMessage = args.slice(2).join(" ");
    const numberPart = muteTime.substr(0, muteTime.length - 1);
    const letterPart = muteTime.substr(muteTime.length - 1, muteTime.length);
    
    let time = 0;
    switch(letterPart) {
        case "s":
            time = numberPart;
        break;
        case "m":
            time = numberPart * 60
        break;
        case "h":
            time = numberPart * 3600;
        break;
        case "d":
            time = numberPart * 24000;
        break;
    }

    console.log(numberPart);
    console.log(letterPart);
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
        .setTitle("Temporary Mute")
        .setTimestamp()  
        .setColor(0x3fb5a1)
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
        .setDescription("You got temporarily muted in " + User.guild.name + ". Reason: " + reasonMessage);

        User.send(embed);

        function unmute() {
            toMute.removeRole(muterole.id);
            console.log(toMute.user.username + " has been unmuted!");
            const embed = new Discord.RichEmbed()
            .setTitle("Temporary Mute")
            .setTimestamp()  
            .setColor(0x3fb5a1)
            .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
            .setDescription("You got unmuted in " + User.guild.name);
    
            User.send(embed);
        }

        setTimeout(unmute, time * 1000);
    } else {
        message.react('❌');
    }
}

module.exports.config = {
    name: "tempmute",
    aliases: []
}