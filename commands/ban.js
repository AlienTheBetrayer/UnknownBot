const Discord = require("discord.js");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports.run = async(client, message, args) => {
  if(message.member.hasPermission("BAN_MEMBERS", false, true, false)) {
     const kMessage = args.slice(1).join(" ");
     const User = message.mentions.members.first();
     const embed = new Discord.RichEmbed()
     .setTitle("Ban")
     .setTimestamp()  
     .setColor(0x3fb5a1)
     .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
     .setDescription("You got banned from " + User.guild.name + ". Reason: " + kMessage);
     User.send(embed);
     await sleep(1000);
     User.ban();
     
  } 
}

module.exports.config = {
    name: "ban",
    aliases: []
}