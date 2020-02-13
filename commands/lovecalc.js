const Discord = require("discord.js");

function getRandomInt() {
    return(Math.floor(Math.random() * 100) + 1)
}

module.exports.run = async(client, message, args) => {
    if(args[0] == undefined || args[1] == undefined) return;
    let first, second;
    /*
    let len = (message.mentions.members.array().length);
    
    switch(len) {
        case 0:
            first = args[0];
            second = args[1];
        break;
        case 1:
            if(args[0].mentions ) {
                console.log("it is first man");
            } else if(args[1].mentions) {
                console.log("is it second.");
            }
        break;
        case 2:
            first = message.mentions.members.array()[0].user.username;
            second = message.mentions.members.array()[1].user.username;
        break;
    }
    */
   first = args[0];
   second = args[1];
   const rand = getRandomInt();
    console.log(first);
    console.log(second);
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
    .setTimestamp()
    .setColor(0x3fb5a1)
    .addField("Lovers", first + " x " + second)
    .addField("Love Calculator", rand + "%")
    message.channel.send(embed)
    .then(function(_MSG) {
        if(rand <= 30) {
            _MSG.react('💔');
        } else {
            if(rand >= 50) {
            _MSG.react('❤️');
            }
        }
    })
}

module.exports.config = {
    name: "lovecalc",
    aliases: ["lc"]
}