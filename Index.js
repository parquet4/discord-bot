const { generateKeyPair } = require('crypto');
const Discord = require('discord.js');
const { create } = require('domain');
const { createConnection } = require('net');
const { userInfo, type } = require('os');
const { send } = require('process');
const client = new Discord.Client();

client.on("ready", function () {
  console.log("Mon BOT est Connecté");
})


client.on('message', message => {
    if(message.content.startsWith("-clear")) {
      message.delete();
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
          return
            message.channel.send("");
     
            let args = message.content.split(" ").slice(1);
     
        if(!args[0]) return message.channel.send("Tu ne m'as pas dit combien de message je devais supprimer :/")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(``);
            console.log(`J'ai supprimer ${args[0]} messages chez "${message.guild.name}" :D`);
            message.delete(1000)
})}});


client.on("message", function (message) {
    if (message.content === "-help") {
        message.channel.send("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
        message.channel.send("`-help Admin`")
        message.channel.send("`-help membre`")
        message.channel.send("`-help inutile`")
        message.channel.send("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
    }
})


client.on('message', message => {
  
    if (!message.guild) return;
  
    if (message.content.startsWith('-ban')) {
     
      const user = message.mentions.users.first();
     
      if (user) {
        
        const member = message.guild.members.resolve(user);
        
        if (member) {
         
          member
            .ban({
              reason: ':/',
            })
            .then(() => {
              
              message.channel.send(`j'ai bien banni ${user.tag}`);
            })
            .catch(err => {
              
              message.channel.send('je ne peut pas bannir ce membre');
              
              console.error(err);
            });
        } else {
        
          message.channel.send("ce n'est pas un utisisateur de ce serveur");
        }
      } else {

        message.channel.send("tu n'a pas mentionner qui tu veut ban!");
      }
    }
  });
;

client.on('message', message => {
  
    if (!message.guild) return;
  
    if (message.content.startsWith('-kick')) {
     
      const user = message.mentions.users.first();
     
      if (user) {
        
        const member = message.guild.members.resolve(user);
        
        if (member) {
         
          member
            .kick({
              reason: ':/',
            })
            .then(() => {
              
              message.channel.send(`j'ai bien kick ${user.tag}`);
            })
            .catch(err => {
              
              message.channel.send('je ne peut pas kick ce membre');
              
              console.error(err);
            });
        } else {
        
          message.channel.send("ce n'est pas un utisisateur de ce serveur");
        }
      } else {

        message.channel.send("tu n'a pas mentionner qui tu veut kick!");
      }
    }
  });
;

client.on("message", function (message) {
    if (message.content === "-help admin") {
        message.channel.send("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
        message.channel.send("`-ban` (le nom de la personne que tu veut ban)")
        message.channel.send("`-clear` (pour clear le channel que tu veut)")
        message.channel.send("`-kick` (Pour exclure une personne)")
        message.channel.send("(Il faut bien-sur avoir le permissions")
        message.channel.send("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
        console.log(`j'ai envoyé la commande a ${message.guild.name} `)
    }
})

client.on("message", function (message) {
    if (message.content === "-help Admin") {
        message.channel.send("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
        message.channel.send("`-ban` (le nom de la personne que tu veut ban)")
        message.channel.send("`-clear` (pour clear le channel que tu veut)")
        message.channel.send("`-kick` (Pour exclure une personne)")
        message.channel.send("(Il faut bien-sur avoir les permissions)")
        message.channel.send("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
        console.log(`j'ai envoyé la commande a ${message.guild.name} `)
    }
})


client.on("ready", function () {
  console.log("Mon BOT est Connecté");
})

client.on("message", function (message) {
  if (message.content === "-prix") { 
      message.channel.send("Voici la liste des prix :")
      message.channel.send("https://cdn.discordapp.com/attachments/841961565200842773/871439550218657792/Prix_Karting.png")
  }
})

client.on("message", function (message) {
  if (message.content === "-Prix") { 
      message.channel.send("Voici la liste des prix :")
      message.channel.send("https://cdn.discordapp.com/attachments/841961565200842773/871439550218657792/Prix_Karting.png")
  }
})

client.login(process.env.TOKEN);


