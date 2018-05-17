const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("%")

bot.login("NDQ0MTI4NzY4MDE0MDI0NzI1.DdXecQ.Q4hlUKvZnpBDRghE33zu4bHfR0Y");


bot.on('ready', function() {
    bot.user.setActivity(`Rusty Bot | %aide | ${bot.guilds.size} serveur | en developement `, {type: "STREAMING"});
    console.log(`${bot.user.username} vien de se connecter`);
bot.on('message', message => {
    if(message.content === prefix + "serverinfo"){
        var serverinfo = new Discord.RichEmbed()
        .setDescription("Infomations du serveur")
        .addField("Nom du discord :", message.guild.name)
        .addField("Créé le :", message.guild.createdAt)
        .addField("Tu as rejoint le :", message.author.createdAt)
        .addField("Nombre de joueurs sur le serveur :", message.guild.memberCount)
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
        .addField("▬▬▬▬▬GENERAL▬▬▬▬▬", "-=-=-=-=-=-=-=-=-=--=-=-=-=-=-")
        .addField("%invite", "Donne le lien d'invitation du bot")
        .addField("%support", "Donne le lien du support du bot")
        .addField("%site", "Donne le lien du site internet du fondateur")
        .addField("%hebergeur", "Donne des informations sur l'hébergeur du Bot")
        .addField("%stats", "Donne les statistiques de l'utilisateur")
        .addField("%say", "Permet de répéter un message précis")
        .addField("%avatar", "Affiche l'avatar d'un utilisateur")
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
        message.channel.send(embed);
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
        message.author.send(embedinvite)
    }else if (message.content === prefix + "support"){
        var embedsupport = new Discord.RichEmbed()
            .setTitle("Les discord support")
            .setColor("#FF0105")
            .setDescription("Les lien du discord de Rusty | support et EdeN Company")
            .addField("=>le lien de Rusty | support", "[Rusty | support](https://discord.gg/uJxGcs)")
            .addField("le lien de EdeN Company", "[EdeN Company](https://discord.gg/RgF6Er4)")
            .setFooter("RustyBot | Hebergée par EdeN Company | dev by MrLudo's | Rusty Dev")
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
    }else if (message.content === prefix + "serverlist") {
        message.channel.send(bot.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))
    }

    if (message.content === prefix + "avatar") {
        var user = message.mentions.users.first() || message.author;

        var embedavatar = new Discord.RichEmbed()
        .setAuthor(`${user.username}`)
        .setImage(user.displayAvatarURL)
        .setColor("#FF0105")
        message.channel.send(embedavatar)
    }})});

    bot.on("message",message => {
        var prefix = "%"
        if(message.content.startsWith(prefix+"vcs")){
          var xo03 = message.content.split(" ").slice(1).join(" ");
        var xo02 = message.guild.channels.find('name', 'vcs-rusty');
        if(message.channel.name == "vcs-rusty"){
        let embedvcs = new Discord.RichEmbed()
        .setColor("#FF0105")
        .setTitle("VCS-RustyBot")
        .addField("Pseudo de l'utilisateur", message.author.username + "#" + message.author.discriminator, true)
        .addField("Discord", message.guild.name, true)
        .addField("Message", xo03)
        .setFooter("RustyBot | vcs")
        .setTimestamp()
        return bot.channels.findAll('name', 'vcs-rusty').map(a=>a.send(embedvcs))
      }
        return message.channel.send("Il faut écrire dans le channel vcs-rusty")
      }
      })