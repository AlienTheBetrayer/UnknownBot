const Discord = require("discord.js");
const config = require("./config.json"); 
const client = new Discord.Client();
const fs = require("fs");
const prefix = config.prefix;

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
   if(jsfile.length <= 0) {
       return console.log("[LOG] Couldn't find commands folder.");
   } 

   jsfile.forEach((f,i) => {
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            client.aliases.set(alias, pull.config.name);
        });
   });
});

function findChannel(channel, message) {
if(message.guild.channels.find(ch => ch.name === channel)) {
    return 1;
  } else {
    return 0
  }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

client.on("ready", () => { // setup
    client.user.setActivity(" | " + prefix + "help", {type: "STREAMING", url: "https://www.twitch.tv/alienbetrayer"});
    console.log("Client is online.");
});

client.on("message", message => {    // message event
   if(message.author.bot) return;
   const parts = message.content.split(" ");// message parsing
   const command = parts[0];
   const args = parts.slice(1);
   let commandFile = client.commands.get(command.slice(prefix.length)) || client.commands.get(client.aliases.get(command.slice(prefix.length)))
   if(commandFile) commandFile.run(client, message, args)
});

client.on("guildMemberAdd", member => {
    const dChannel = member.guild.systemChannel;
    const embed = new Discord.RichEmbed()
    .setTitle("Welcome!")
    .setColor(0x3fb5a1)
    .setAuthor(member.user.username + "#" + member.user.discriminator, member.user.displayAvatarURL)
    .setDescription(member.user + " has joined us!")
    .setTimestamp();
    dChannel.send(embed);
});

client.on("guildMemberRemove", member => {
    const dChannel = member.guild.systemChannel;
    const embed = new Discord.RichEmbed()
    .setTitle("Farewell!")  
    .setColor(0x3fb5a1)
    .setAuthor(member.user.username + "#" + member.user.discriminator, member.user.displayAvatarURL)
    .setDescription(member.user + " has left us...")
    .setTimestamp();
    dChannel.send(embed);
});

client.on("messageDelete", async message => {
    const logsChannel = findChannel("logs", message);
    let msgChannel = message.guild.channels.find(ch => ch.name === "logs");
    if(logsChannel) {
        const embed = new Discord.RichEmbed()
        .setColor(0x3fb5a1)
        .setTimestamp()
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
        .setDescription("Deleted a message in " + msgChannel.toString())
        .addField("Content", message.content, true);
        msgChannel.send(embed);
    } else {
        message.guild.createChannel("logs",{ type: "text" , permissionOverwrites: [{id: message.guild.id, deny: ["VIEW_CHANNEL"]}]});
        await sleep(1000);
        msgChannel = message.guild.channels.find(ch => ch.name === "logs");
        msgChannel.setTopic("Unknown Bot's log channel");
        const embed = new Discord.RichEmbed()
        .setColor(0x3fb5a1)
        .setTimestamp()
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
        .setDescription("Deleted a message in " + msgChannel.toString())
        .addField("Content", message.content, true);
        msgChannel.send(embed);

    }
});

client.on("messageUpdate", async (message, newMessage) => {
    if(message.content === newMessage.content) return;
    const logsChannel = findChannel("logs", message);
    let msgChannel = message.guild.channels.find(ch => ch.name === "logs");
    if(logsChannel) {
        const embed = new Discord.RichEmbed()
        .setColor(0x3fb5a1)
        .setTimestamp()
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
        .setDescription("Message changed in " + msgChannel.toString())
        .addField("Old message", message.content, true)
        .addField("New Message", newMessage.content, false);
        msgChannel.send(embed);
    } else {
        message.guild.createChannel("logs",{ type: "text" , permissionOverwrites: [{id: message.guild.id, deny: ["VIEW_CHANNEL"]}]});
        await sleep(1000);
        msgChannel = message.guild.channels.find(ch => ch.name === "logs");
        msgChannel.setTopic("Unknown Bot's log channel");
        const embed = new Discord.RichEmbed()
        .setColor(0x3fb5a1)
        .setTimestamp()
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
        .setDescription("Message changed in " + msgChannel.toString())
        .addField("Old message", message.content, true)
        .addField("New Message", newMessage.content, false);
        msgChannel.send(embed);
    }
});

client.login(process.env.BOT_TOKEN);
