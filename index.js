const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("%")

bot.login(process.env.TOKEN);


bot.on('ready', function() {
    bot.user.setActivity(`%help | ${bot.guilds.size} serveur | ${bot.users.size} joueur `, {type: "STREAMING"});
    console.log(`${bot.user.username} vien de se connecter`);
bot.on('message', message => {
    if(message.content === prefix + "serverinfo"){
        var serverinfo = new Discord.RichEmbed()
        .setDescription("Infomations du serveur")
        .addField("Nom du discord :", message.guild.name)
        .addField("Créé le :", message.guild.createdAt)
        .addField("Tu as rejoint le :", message.author.createdAt)
        .addField("Nombre de joueurs sur le serveur :", message.guild.memberCount)
        .addField("Le createur", message.guild.owner)
        .addField("ID du createur", message.guild.ownerID)
        .addField("Roles", message.guild.roles.size)
        .addField("ID du serveur", message.guild.id)
        .addField("region", message.guild.region)
        .setThumbnail(message.guild.iconURL)
        .setColor("0x0000FF")
        message.channel.send(serverinfo);
    }else if (message.content === prefix + "help"){
        var aideEmbed = new Discord.RichEmbed()
        .setTitle(":book: Voici la page d'aide du bot")
        .setColor("#FF0105")
        .addField("%aide", "Affiche cette page donc la page d'aide du bot")
        .addField("▬▬▬▬▬MODERATION▬▬▬▬", "-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=")
        .addField("%modhelp", "Permet de voir la page d'aide des moderateur")
        .addField("▬▬▬▬▬GENERAL▬▬▬▬▬", "-=-=-=-=-=-=-=-=-=--=-=-=-=-=-")
        .addField("%invite", "Donne le lien d'invitation du bot")
        .addField("%support", "Donne le lien du support du bot")
        .addField("%site", "Donne le lien du site internet du fondateur")
        .addField("%hebergeur", "Donne des informations sur l'hébergeur du Bot")
        .addField("%stats", "Donne les statistiques de l'utilisateur")
        .addField("%say", "Permet de répéter un message précis")
        .addField("%avatar", "Affiche l'avatar d'un utilisateur")
        .addField("%vcs", "Permer de discuter dans un chat disponible sur tout les sserveur du bot")
        .setFooter("RustyBot | aides")
        message.reply("regarde tes messsage privée")
        message.author.send({embed: aideEmbed});
    }

    if (message.content === prefix + "hhelp"){
        var aideEmbeda = new Discord.RichEmbed()
        .setTitle(":book: Voici la page d'aide du bot")
        .setColor("#FF0105")
        .addField("%aide", "Affiche cette page donc la page d'aide du bot")
        .addField("▬▬▬▬▬MODERATION▬▬▬▬", "-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=")
        .addField("%modhelp", "Permet de voir la page d'aide des moderateur")
        .addField("▬▬▬▬▬GENERAL▬▬▬▬▬", "-=-=-=-=-=-=-=-=-=--=-=-=-=-=-")
        .addField("%invite", "Donne le lien d'invitation du bot")
        .addField("%support", "Donne le lien du support du bot")
        .addField("%site", "Donne le lien du site internet du fondateur")
        .addField("%hebergeur", "Donne des informations sur l'hébergeur du Bot")
        .addField("%stats", "Donne les statistiques de l'utilisateur")
        .addField("%say", "Permet de répéter un message précis")
        .addField("%avatar", "Affiche l'avatar d'un utilisateur")
        .addField("%vcs", "Permer de discuter dans un chat disponible sur tout les sserveur du bot")
        .setFooter("RustyBot | aides")
        message.channel.send(aideEmbeda);
    }

    if (message.content === prefix + "modhelp") {
        var embedmodhelp = new Discord.RichEmbed()
        .setTitle(":book: Voici la page d'aide des moderateur")
        .setColor("#FF0105")
        .addField("%modhelp", "affiche cette page donc la page d'aide des moderateur")
        .setDescription("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
        .addField("%ban", "permet de bannir un utilisateur(soon)")
        .addField("%kick", "permet de kick un utilisateur(soon)")
        .addField("%warn", "permet de warn un utilisateur(soon)")
        .addField("%mute", "permet de mute un utilisateur(soon)")
        .setFooter("RustyBot | modhelp")
        message.reply("•••Regarde tes message privée•••")
        message.author.send(embedmodhelp)
    }
    
    if (message.content === prefix + "hebergeur"){
        var embed = new Discord.RichEmbed()
            .setTitle("Hébergement de " + bot.user.tag)
            .setDescription(":tools: Le Bot est hébergé grâce au VPS de Heroku !")
            .addField(":star2: lien de Heroku " ,"[Lien de Heroku](https://www.heroku.com)")
            .addField("code sur Git Hub", "[Lien de Git Hub](https://github.com)")
            .setFooter("Rusty Bot | Hebergeur")
        message.author.send(embed);
        message.reply("Regarde tes message privée, tu vien de recevoir les lien de l'hebergeur")
    }else if (message.content.startsWith(prefix + "say")){
        message.delete(1);
        var embed = new Discord.RichEmbed()
            .setColor("#FF0105")
            .setDescription(message.content.substr(prefix.length + 4))
        message.channel.send(embed)
    }else if (message.content === prefix + "invite"){
        var embedinvite = new Discord.RichEmbed()
            .setTitle("Les lien d'invitation")
            .setColor("#FF0105")
            .setDescription("voici les lien de RustyBot et de EdeN Bot")
            .addField("=>le lien de RustyBot:", "[RustyBot](https://discordapp.com/oauth2/authorize?client_id=444128768014024725&scope=bot&permissions=2013789431)")
            .addField("=>le lien de EdeN Bot:", "[EdeN Bot](https://discordapp.com/oauth2/authorize?client_id=418517710222393368&scope=bot&permissions=201718999)")
            .setFooter("RustyBot | Hebergée par EdeN Company | dev by MrLudo's | Rusty Dev")
        message.reply("Regarde tes message privée, tu vien de recevoir les lien d'invitation")
        message.author.send(embedinvite)

    }else if (message.content === prefix + "support"){
        var embedsupport = new Discord.RichEmbed()
            .setTitle("Les discord support")
            .setColor("#FF0105")
            .setDescription("Les lien du discord de Rusty | support et EdeN Company")
            .addField("=>le lien de Rusty | support", "[Rusty | support](https://discord.gg/uJxGcs)")
            .addField("le lien de EdeN Company", "[EdeN Company](https://discord.gg/RgF6Er4)")
            .setFooter("RustyBot | Hebergée par EdeN Company | dev by MrLudo's | Rusty Dev")
        message.reply("Regarde tes message privée, tu vien de recevoir les lien support")
        message.author.send(embedsupport)

    }else if (message.content === prefix + "statistiques") {
        var userCreateDate = message.author.createdAt.toString().split(" ");
        var stats_embed = new Discord.RichEmbed()
            .setColor("#FF0105")
            .setTitle(`Statistiques de l'utilisateur ${message.author.username}`)
            .addField(`Tag de l'utilisateur`, message.author.tag)
            .addField(`ID de l'utilisateur`, message.author.id)
            .addField(`Date de creation de l'utilisateur :`, userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
            .setThumbnail(message.author.avatarURL)
        message.reply("regarde tes message privée tu vien de recevoir tes statistiques")
        message.author.send({embed: stats_embed})
    }

    if (message.content === prefix + "purge") {
        if (message.member.hasPermission("MANAGE_MESSAGES")){
            message.channel.fetchMessages()
                .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send('Erreur')})};

    if (message.content === prefix + "avatar") {
        var user = message.mentions.users.first() || message.author;

        var embedavatar = new Discord.RichEmbed()
        .setAuthor(`${user.username}`)
        .addField(`voici le logo de ${$user.username}`)
        .setImage(user.displayAvatarURL)
        .setColor("#FF0105")
        message.channel.send(embedavatar)
    }}});
});

bot.on("message",message => {
    var prefix = "%"
    if(message.content.startsWith(prefix+"vcs")){
        message.delete()
      var xo03 = message.content.split(" ").slice(1).join(" ");
    var xo02 = message.guild.channels.find('name', 'vcs-rusty');
    if(message.channel.name == "vcs-rusty"){
    let embedvcs = new Discord.RichEmbed()
    .setColor("#FF0105")
    .addField("• VCS-RustyBot •", message.author.username)
    .addField("• Provenant du serveur •", message.guild.name)
    .addField("• ▬▬▬▬▬▬▬▬▬▬▬▬ •", xo03)
    .setFooter("RustyBot | vcs")
    .setThumbnail(message.guild.iconURL)
    .setTimestamp()
    return bot.channels.findAll('name', 'vcs-rusty').map(a=>a.send(embedvcs))
  }
    return message.channel.send("Il faut écrire dans le channel vcs-rusty")
  }
});

bot.on("message", message => {
    if (message.content === prefix + "servlist") {      
        var embedlist = new Discord.RichEmbed()
        .setColor("#FF0105")
        .setDescription("__***ServerList***__")
        .addField("Nombre de serveurs", `${bot.guilds.size} serveurs`)
        .addField("Nombre de joueurs", `${bot.users.size} joueurs`)
        .addField("Voici la liste", bot.guilds.map(r => r.name + ` | **${r.memberCount}** membres`));
        message.channel.send(embedlist)
    }

    if (message.content === prefix + "fakehacking") {
        message.channel.send("__***[HACKING]10%***__")
        message.channel.send("__***[HACKING]20%***__")
        message.channel.send("__***[HACKING]30%***__")
        message.channel.send("__***[HACKING]40%***__")
        message.channel.send("__***[HACKING]50%***__")
        message.channel.send("__***[HACKING]60%***__")
        message.channel.send("__***[HACKING]70%***__")
        message.channel.send("__***[HACKING]80%***__")
        message.channel.send("__***[HACKING]90%***__")
        message.channel.send("__***[HACKING]100%***__")
        message.channel.send("__***[HACKING]Lancement du hack adieux le serveur***__")
    }          
    
    if (message.content === prefix + "news") {
        var embedNews = new Discord.RichEmbed()
        .setDescription("Nouveauter du bot")
        .addField("Nouvelle commande", "-=-=-=-=-=-=-=-")
        .addField("%fakehacking", "attention spam")
        .addField("%news", "affiche les nouveauter du bot")
        .addField("%hhelp", "permet d'afficher la page d'aide sur le channel")
        message.channel.send(embedNews)
    }

    if (message.content.startsWith(prefix + "mute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !")

        if (message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur a mute !")
        }

        var mute = message.guild.member(message.mentions.users.first());
        if (!mute) {
            return message.channel.send("Je n'ai pas trouver l'utilisateur !");
        }

        if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission de mute !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            message.channel.send(`${mute.user.username} est mute !`);
        })
    }
});

bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('name', 'bienvenue');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    var embedJoin = new Discord.RichEmbed()
    .setTitle("{+} Join")
    .setColor("#FF0105")
    .setDescription(`Bienvenue ${member} sur Rusty | support \e Souhaitez la bienvenue a ${member.user.username} qui vien d'arrivée sur le serveur ! \e Bien entendu tous serveur a des règles donc merci de respecter les regles en #reglement !`)
    .addField("Vous voulez savoir les commande du RustyBot", "faites la commande `%help`!")
    channel.send(embedJoin);
});

bot.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find('name', 'aurevoir');
    if (!channel) return;
    var embedLeave = new Discord.RichEmbed()
    .setTitle("{-} Leave")
    .setColor("#FF0105")
    .setDescription(`Dommage ${member.user.username} vien de quittée le serveur`)
    channel.send(embedLeave)
})




    
