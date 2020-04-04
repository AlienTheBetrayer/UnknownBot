const Discord = require("discord.js");

function getRandomInt() {
    return(Math.floor(Math.random() * 100) + 1)
}

function getRandomInt_() {
    return(Math.floor(Math.random() * 2) + 1)
}

const posLove = ["Lovely!", "Perfect couple!", "That's love!"];
const negLove = ["Well... Get rejected kid.", "No love.", "No gf/bf for you..."];
const neuLove = ["That's nothing.", "No love, no rejection.", "You won't get him/her."]; 

module.exports.run = async(client, message, args) => {  
    if(args[0] == undefined || args[1] == undefined) {
        message.react('❌');
        message.reply("Please provide both lovers.");
        return;
    }
    let first, second;
   first = args[0];
   second = args[1];
   let rand = getRandomInt();
   const rand_ = getRandomInt_();
   if(first == "<:daniil:669132339812630528>" || second == "<:daniil:669132339812630528>") {
    rand = 100;
}
    let Ltext;
    console.log(rand_);
    if(rand <= 30) {
        Ltext = negLove[rand_];
    } else {
        if(rand >= 50) {
            Ltext = posLove[rand_];
        } else {
            Ltext = neuLove[rand_];
        }
    }


    console.log(first);
    console.log(second);
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
    .setTimestamp()
    .setColor(0x3fb5a1)
    .addField("Lovers", first + " x " + second)
    .addField("Love Calculator", rand + "%")
    .addField("Message", Ltext)
    
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