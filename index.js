const { Client, RichEmbed } = require("discord.js");
const client = new Client();
const config = require("./config.json");  

function sendEmbed(_msg, eTitle, eContent, eColor) {
    const embed = new RichEmbed()
    .setTitle(eTitle)
    .setColor(eColor)
    .setDescription(eContent)
    .setTimestamp()
    .setAuthor(_msg.author.username, _msg.author.avatarURL);
    _msg.channel.send(embed);
}

client.on("ready", () => { // setup
    client.user.setActivity("🎃 Halloween 🎃", {type: "STREAMING", url: "https://www.twitch.tv/alienbetrayer"});
    console.log("Client is ready!");
});

client.on("message", msg => { // message event
   if(msg.author.bot || !msg.content.startsWith(config.prefix)) return;
    
   const args = msg.content.slice(config.prefix.length).split(' ');
   const command = args.shift().toLowerCase();
    
});

client.login(process.env.BOT_TOKEN);
