const Discord = require("discord.js");

function ballRandom() {
    const answers = ["Surely yes.", "Maybe yes.", "Probably.", "50/50.", "No, never.", "Probably not.", "Nope.", "Yeah!", "Definitely!",
     "I don't know.", "Yes! Why do you even ask?", "Not sure.", "Nah.", "Meh.", "False."];
    return answers[Math.floor(Math.random() * answers.length)];
}

module.exports.run = async(client, message, args) => {
    if(args[0] == undefined) {
        message.react('❌');
        message.reply("please provide a message.");
        return;
    }

    const msg = args.slice(0).join(" ");
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
    .setTimestamp()
    .setColor(0x3fb5a1)
    .addField("Question", msg)
    .addField("8ball says:", ballRandom())
    message.channel.send(embed);

}

module.exports.config = {
    name: "8ball",
    aliases: []
}