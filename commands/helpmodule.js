const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {

    function moduleEmbed(module_name, description) {
        const embed = new Discord.RichEmbed()
        .setTitle(module_name)
        .setColor(0x3fb5a1)
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
        .setDescription(description)
        .setTimestamp();
        message.channel.send(embed);
    }

        if(args[0] == undefined) return;
        
        if(args[0] == "informative") {
            moduleEmbed("Informative module", `
            • $avatar [$av] <optional_user> - Gives avatar of mentioned user, or if none mentioned yourself.
            • $random [$rand] <min> <max> - Generates a random number between min and max.
            • $color [$c] <hex color> - Shows the color.
            • $randomcolor [$rc] - Generates random color and shows it.
            `);
        } else if(args[0] == "moderation") {
            moduleEmbed("Moderation module", `
            • $ban <user> <reason> - Bans user with a reason.
            • $kick <user> <reason> - Kicks user with a reason.
            • $purge [$prune] <amount> - Delets 'amount' of messages.
            `);
        } else if(args[0] == "events") {
            moduleEmbed("Events module", `
            • Welcome / Farewell
            • Message logging(edit/delete)
            `); 
        } else if(args[0] == "help") {
            moduleEmbed("Help module", `
            • $help [$h] - Lists all modules
            • $helpmodule [$hm, $hmodule, $helpm] <module> - Gives information about the module
            `) 
        } else if(args[0] == "games") {
                moduleEmbed("Games module", `
                •  $rsp <rock/scissors/paper> (2 Player coming soon)
               `)
            }
        
}

module.exports.config = {
    name: "helpmodule",
    aliases: ["hm", "hmodule", "helpm"]
}