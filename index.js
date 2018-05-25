const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("%")

bot.login(process.env.TOKEN);


bot.on('ready', function() {
    bot.user.setActivity(`Rusty Bot | %help | ${bot.guilds.size} serveur | ${bot.users.size} `, {type: "STREAMING"});
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
        .addField("%kick", "Permet d'expulser un utilisateur")
        .addField("%ban", "Permet de bannir un utilisateur")
        .addField("Warn", "permet de mettre un avertissement a une personne")
        .addField("Mute", "permet de mute un utilisateur")
        .addField("Report", "permet de reporter un utilisateur")
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
    }else if (message.content === prefix + "hebergeur"){
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
            .setDescription(message.author.username + " dit : " + message.content.substr(prefix.length + 4))
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

    if (message.content === prefix + "avatar") {
        var user = message.mentions.users.first() || message.author;

        var embedavatar = new Discord.RichEmbed()
        .setAuthor(`${user.username}`)
        .addField(`voici le logo de ${$user.username}`)
        .setImage(user.displayAvatarURL)
        .setColor("#FF0105")
        message.channel.send(embedavatar)
    }})});

bot.on("message",message => {
    var prefix = "%"
    if(message.content === prefix + "vcs") {
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

    if (message.content === prefix + "ping") {
        var embedping = new Discord.RichEmbed()
        .setTitle("Ping")
        .setDescription("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
        .addField("ping du bot", " ` " + bot.ping + "ms`")
        .addField("Ping de l'utilisateur", "soon")
        .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", "*---*")
        message.channel.send(embedping)
    }

    if (message.content === prefix + "8ball")
    var args = message.content.split(" ").slice(1);
    var tte = args.join(" ")
    if (!tte){
        return message.reply("merci de poser une question :8ball:")};

        var replys = [
            "oui",
            "non",
            "je sais pas",
            "peut etre",
        ];

        var reponse = (replys[Math.floor(Math.random() * replys.lenght)])
        var embed8ball = new Discord.RichEmbed()
        .setDescription(":8ball: 8ball")
        .addField("Question", tte)
        .addField("Reponse", reponse)
    message.channel.sendEmbed(embed8ball)
});

