const Discord = require("discord.js");

function randomItem(item) {
    return item[Math.floor(Math.random() * item.length)];
}


module.exports.run = async(client, message, args) => {
    const items = args.slice(0);
    if(items.length == 0) return;
    const randitem = randomItem(items);
    const embed = new Discord.RichEmbed()
    .setTitle("Random Item")
    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
    .setDescription(randitem)
    .setTimestamp()
    .setColor(0x3fb5a1);
    message.channel.send(embed);
}

module.exports.config = {
    name: "randitem",
    aliases: ["ri","randomitem"]
}