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

        if(args[0] == undefined) {
            message.react('❌');
            message.reply("please select a module from $help.");
            return;
        }
        
        if(args[0].toLowerCase() == "informative") {
            moduleEmbed("Informative module", `
            • $avatar [$av] <opt_user> - Gives avatar of mentioned user, or if none mentioned yourself.
            • $random [$rand] <min> <max> - Generates a random number between min and max.
            • $color [$c] <hex color> - Shows the color.
            • $randomcolor [$rc] - Generates random color and shows it.
            `);
        } else if(args[0].toLowerCase()  == "moderation") {
            moduleEmbed("Moderation module", `
            • $ban <user> <reason> - Bans the user with a reason.
            • $kick <user> <reason> - Kicks the user with a reason.
            • $purge [$prune] <amount> - Deletes 'amount' of messages.
            • $mute <@user> <opt_reason> - Mutes user.
            • $unmute <@user> - Unmutes user.
            • $warn <@user> <opt_reason> - Warns user with optional reason.
            `);
        } else if(args[0].toLowerCase()  == "events") {
            moduleEmbed("Events module", `
            • Welcome / Farewell
            • Message logging(edit/delete)
            `); 
        } else if(args[0].toLowerCase()  == "help") {
            moduleEmbed("Help module", `
            • $help [$h] - Lists all modules.x
            • $helpmodule [$hm] <module> - Gives information about the module.
            `) 
        } else if(args[0].toLowerCase()  == "games") {
                moduleEmbed("Games module", `
                •  $rsp <rock/scissors/paper> - Rock Scissors Paper game.
                •  $8ball <question> - Answers your question.
                •  $100ball <message> - Says percents on your statement/message.
                •  $randitem <item1, itemN...> - Gives random item you entered.
                •  $lovecalc <lover1, lover2> - Calculates love percentage between two.
               `)
            } else if(args[0].toLowerCase()  == "administration") {
                moduleEmbed("Administration module", `
                •  $removerole [$rr] <@user> <role> - Removes role from user.
                •  $addrole [$ar] <@user> <role> - Adds role to the user.
                •  $createrole [$cr] <name> <opt_color> - Creates a role with name and color.
                •  $deleterole [$dr] <role> - Deletes role.
               `)
            }
        
}

module.exports.config = {
    name: "helpmodule",
    aliases: ["hm", "hmodule", "helpm"]
}