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
    
    function logic() {
        if(random() == 0) {
            if(args[0] == "rock") {
                wonlose = "Draw";
            } else if(args[0] == "paper") {
                wonlose = "You won!";
            } else if(args[0] == "scissors") {
                wonlose = "You lose.";
            }
            newEmb(arg, "rock", wonlose);
        } else if(random() == 1) {
            if(args[0] == "rock") {
                wonlose = "You lose!";
            } else if(args[0] == "paper") {
                wonlose = "Draw!";
            } else if(args[0] == "scissors") {
                wonlose = "You win!";
            }
            newEmb(arg, "paper", wonlose);
        } else if(random() == 2) {
            if(args[0] == "rock") {
                wonlose = "You win!";
            } else if(args[0] == "paper") {
                wonlose = "You lose.";
            } else if(args[0] == "scissors") {
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