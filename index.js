const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("%")

bot.login(process.env.TOKEN);


bot.on('ready', function() {
    bot.user.setActivity(`DarK Bot | %aide | ${bot.guilds.size} serveur | en developement `, {type: "STREAMING"});
    console.log("Je suis connecter, le bot est maintenant en ligne et repond au commands.");
});

bot.on('message', message => {

    if(message.content === prefix + "serverinfo") {
        var serverinfo = new Discord.RichEmbed()
        .setDescription("Infomation du serveur")
        .addField("Non du discord :", message.guild.name)
        .addField("Crée le :", message.guild.createdAt)
        .addField("Tu as rejoin le :", message.member.createdAt)
        .addField("Nombre de joueur sur le serveur :", message.guild.memberCount)
        .setColor("0x0000FF")
    message.channel.sendEmbed(serverinfo)

    }

bot.on('message', message => {

    if (command === "aide") {

        var aideEmbed = new Discord.RichEmbed()
        .setTitle(":book: Voici la page d'aide du bot")
        .setColor("#FF0105")
        .addField("d/aide", "affiche cette page donc la page d'aide du serveur")
        .addField("▬▬▬▬▬MODERATION▬▬▬▬▬", "moderation")
        .addField("d/kick", "permet de kick l'utilisateur")
        .addField("d/ban", "permet de ban un utilisateur")
        .addField("▬▬▬▬▬GENERAL▬▬▬▬▬", "general")
        .addField("d/invite", "donne le lien d'invitation du bot")
        .addField("d/support", "donne le lien du support du bot")
        .addField("d/site", "donne le lien du site internet du fondateur")
        .addField("d/prefix", "donne le prifx du serveur + bientot custom prefix")
        .addField("d/info", "donne les informations du bot")
        .addField("d/stats", "donne les statistiques de l'utilisateur")
        .addField("d/say", "permes au bot de repeter votre message")
        .addField("d/avatar", "donne l'avatar de l'utilisateur")
        message.channel.sendEmbed(aideEmbed);
    }})});

bot.on("message", message => {

    if (command === "ping") {
        message.channel.send(`pong ! voici votre ping : message.createdTimestamp ms`);
    }
    
    if (command === "say") {
        message.delete()
        const embed = new Discord.RichEmbed()
        .setColor("#FF0105")
        .setDescription("" + message.author.username + " says: " + args.join(" "))
        message.channel.send({embed})
    }

})
