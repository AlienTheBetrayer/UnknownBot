const Discord = require("discord.js");

function calc(equation) {
return new Function('return ' + equation)();
}

module.exports.run = async(client, message, args) => {
    if(args[0] == undefined) return;
    const eq = args[0];
    const embed = new Discord.RichEmbed()
    .setTitle("Calculation")
    .setTimestamp()  
    .setColor(0x3fb5a1)
    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
    .addField("Equation", eq)
    .addField("Result", calc(eq))
    message.channel.send(embed);
}

module.exports.config = {
    name: "calcasdfadsasdfasdf",
    aliases: ["calculateasdfasfasdfsafsadfwef"]
}
