const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const time = 60000 

    message.channel.send("Hello World")
    .then(async function (message) {
         await message.react('✅')
         const filter = (reaction, user) => {
             if(user.bot) return;
             
             return user.discsriminator.contains("0");
         };
   
         const collector = message.createReactionCollector(filter, { time: time });
   
         collector.on('collect', (reaction, reactionCollector) => {
              message.channel.send("Somebody reacted my message... ");

                function deleteMessage() {
                    message.delete();
                }  
                setTimeout(deleteMessage, 1500);
        });
    });
}

module.exports.config = {
    name: "collectoafsdfsadfdsafasfr",
    aliases: []
}