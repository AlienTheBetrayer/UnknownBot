const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    function random() {
        return Math.floor(Math.random() * 3);
    }
    
    let wonlose;

    function newEmb(choice, msg, wonlose) {
        const embed = new Discord.RichEmbed()
        .setTimestamp()
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
        .setColor(0x3fb5a1)
        .setTitle("Rock Paper Scissors game")
        .addField("Your choice", choice)
        .addField("I choose ", msg)
        .addField("Results", wonlose);
        message.channel.send(embed);
    }
    
    function logic(arg) {
        if(random() == 0) {
            if(arg == "rock") {
                wonlose = "Draw";
            } else if(arg == "paper") {
                wonlose = "You won!";
            } else if(arg == "scissors") {
                wonlose = "You lose.";
            }
            newEmb(arg, "rock", wonlose);
        } else if(random() == 1) {
            if(arg == "rock") {
                wonlose = "You lose!";
            } else if(arg == "paper") {
                wonlose = "Draw!";
            } else if(arg == "scissors") {
                wonlose = "You win!";
            }
            newEmb(arg, "paper", wonlose);
        } else if(random() == 2) {
            if(arg == "rock") {
                wonlose = "You win!";
            } else if(arg == "paper") {
                wonlose = "You lose.";
            } else if(arg == "scissors") {
                wonlose = "Draw!";
            }
            newEmb(arg, "scissors", wonlose);
        }
    }

    if(args[0] == undefined) return;
    if(args[0] != "rock" && args[0] != "scissors" && args[0] != "paper") return;
   logic(args[0]);
}

module.exports.config = {
    name: "rsp",
    aliases: ["rockpaperscissors"]
}