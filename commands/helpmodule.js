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
            • $calc <equation> - Solves the equation and sends it.
            `);
        } else if(args[0] == "moderation") {
            moduleEmbed("Moderation module", `
            • $ban <user> <reason> - Bans the user with a reason.
            • $kick <user> <reason> - Kicks the user with a reason.
            • $purge [$prune] <amount> - Deletes 'amount' of messages.
            `);
        } else if(args[0] == "events") {
            moduleEmbed("Events module", `
            • Welcome / Farewell
            • Message logging(edit/delete)
            `); 
        } else if(args[0] == "help") {
            moduleEmbed("Help module", `
            • $help [$h] - Lists all modules.x
            • $helpmodule [$hm, $hmodule, $helpm] <module> - Gives information about the module.
            `) 
        } else if(args[0] == "games") {
                moduleEmbed("Games module", `
                •  $rsp <rock/scissors/paper> - Rock Scissors Paper game.
                •  $8ball <question> - Answers your question.
                •  $100ball <message> - Says percents on your statement/message.
                •  $randitem <item1, itemN...> - Gives random item you entered.
               `)
            } else if(args[0] == "administration") {
                moduleEmbed("Administration module", `
                •  $rr <@user> <@role> - Removes role from user.
                •  $ar <@user> <@role> - Adds role to the user.
               `)
            }
        
}

module.exports.config = {
    name: "helpmodule",
    aliases: ["hm", "hmodule", "helpm"]
}