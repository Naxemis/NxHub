const botconfig = require("./botconfig.json");
const Discord = require("discord.js")
const prefix = "!"
var nazwabota = "twojbot"

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log(`${nazwabota} został włączony/przeładowany.`)

});
bot.on("message", async message => {
    if (message.author.bot) return;
 
    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()


if(command == "say"){
    message.delete() 

   if(message.member.hasPermission("ADMINISTRATOR")) message.channel.send(message.content.slice(prefix.length+3))
   else
   return message.channel.send("Hej! Nie posiadasz uprawnień aby używać tej komendy! Zjedz pomarańczę.")  
}


if(command == "embed"){
    var embed = new Discord.RichEmbed()
    .setDescription("Poradnik Embedy Discord.js")
    .setTitle("Embed info")
    .setColor(`#ff0000`)
    .setThumbnail(bot.user.avatarURL)
    
    message.channel.send(embed)

}
if(command == "serwer"){
    var embed = new Discord.RichEmbed
    .addField("Nazwa Serwera:", message.guild.name, true)
    .addField("Właścieciel serwera:", message.guild.owner.user.tag, true)
    .addField("Data dołączenia na serwer:", message.guild.joinedAt, false)
    .setTimestamp()
    .setColor("BLUE")
    .setFooter(message.member.user.tag, message.member.user.avatarURL)

    return message.channel.send(embed)

}
});


bot.login(botconfig.token)
