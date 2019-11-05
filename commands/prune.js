const Discord = require("discord.js");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports.run = async(client, message, args) => {
  if(message.member.hasPermission("MANAGE_MESSAGES", false, true, false)) {

     if(args[0] == undefined) return;
     if(isNaN(args[0])) return;
     if(args[0] > 100 && args[0] < 1) { message.channel.send(message.author + ", Enter amount inbetween 1 and 100"); return; }
    
     message.delete();
     await message.channel.fetchMessages({ limit: args[0] }).then(messages => { 
        message.channel.bulkDelete(messages 
    )});
  } 
}

module.exports.config = {
    name: "prune",
    aliases: ["purge"]
}