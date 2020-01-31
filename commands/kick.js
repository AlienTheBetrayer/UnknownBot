const Discord = require("discord.js");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports.run = async(client, message, args) => {
  if(message.member.hasPermission("KICK_MEMBERS", false, true, false)  || message.author.id == 351382367530647554) {
     const kMessage = args.slice(1).join(" ");
     const User = message.mentions.members.first();
     const embed = new Discord.RichEmbed()
     .setTitle("Kick")
     .setTimestamp()
     .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
     .setColor(0x3fb5a1)
     .setDescription("You got kicked from " + User.guild.name + ". Reason: " + kMessage);
     User.send(embed);
     await sleep(1000);
     User.kick();
     message.react('✅');
  } else {
    message.react('❌');
  }
}

module.exports.config = {
    name: "kick",
    aliases: []
}