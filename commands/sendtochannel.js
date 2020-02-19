const Discord = require("discord.js");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports.run = async(client, message, args) => {
  if(message.member.hasPermission("ADMINISTRATOR", false, true, false) || message.author.id == 351382367530647554 ) {
    const CHANNEL = message.mentions.channels.first().id;
     const kMessage = args.slice(1).join(" ");
     if(CHANNEL && kMessage) {
      client.channels.get(CHANNEL).send(kMessage);
     message.react('✅');
     } else {
      message.react('❌');
     }
  } else {
    message.react('❌');
  }
}

module.exports.config = {
    name: "sendtochannel",
    aliases: ["stc"]
}