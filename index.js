const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("%")

bot.login("NDQ0MTI4NzY4MDE0MDI0NzI1.DdXecQ.Q4hlUKvZnpBDRghE33zu4bHfR0Y");


bot.on('ready', function() {
    bot.user.setActivity(`DarK Bot | %aide | ${bot.guilds.size} serveur | en developement `, {type: "STREAMING"});
    console.log("Je suis connecté, le bot est maintenant en ligne et repond au commandes.");
});
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
    }else if (message.content === prefix + "aide"){
        var aideEmbed = new Discord.RichEmbed()
        .setTitle(":book: Voici la page d'aide du bot")
        .setColor("#FF0105")
        .addField("%aide", "Affiche cette page donc la page d'aide du bot")
        .addField("▬▬▬▬▬MODERATION▬▬▬▬▬", "-=-=-=-=-")
        .addField("%kick", "Permet d'expulser un utilisateur")
        .addField("%ban", "Permet de bannir un utilisateur")
        .addField("▬▬▬▬▬GENERAL▬▬▬▬▬", "-=-=-=-=-=-")
        .addField("%invite", "Donne le lien d'invitation du bot")
        .addField("%support", "Donne le lien du support du bot")
        .addField("%site", "Donne le lien du site internet du fondateur")
        .addField("%hebergeur", "Donne des informations sur l'hébergeur du Bot")
        .addField("%stats", "Donne les statistiques de l'utilisateur")
        .addField("%say", "Permet de répéter un message précis")
        .addField("%avatar", "Affiche l'avatar d'un utilisateur")
        message.reply("regarde tes messsage privée")
        message.author.send({embed: aideEmbed});
    }else if (message.content === prefix + "hebergeur"){
        var embed = new Discord.RichEmbed()
            .setTitle("Hébergement de " + bot.user.tag)
            .setDescription(":tools: Le Bot est hébergé grâce au VPS de EdeN Company#3994, où est aussi hébergé le EdeN Bot !")
            .addField(":star2: Serveur de l'hébergeur, EdeN Company" ,"[Lien du serveur de l'hébergeur](https://discord.gg/RgF6Er4)")
            .addField("Bot de l'hébergeur, EdeN Bot", "[Lien d'ajout du bot](https://discordapp.com/oauth2/authorize?client_id=418517710222393368&scope=bot&permissions=201718999)")
            .setFooter("Rusty Bot, hébergé et développé par EdeN Company#3994 pour Dark Manager")
        message.channel.send(embed);
    }else if (message.content === prefix + "ping"){
        message.channel.send(`Pong ! Voici votre ping : ${Date.now() - message.createdTimestamp} ms`);
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
        message.channel.send(embedinvite)
    }else if (message.content === prefix + "support"){
        var embedsupport = new Discord.RichEmbed()
            .setTitle("Les discord support")
            .setColor("#FF0105")
            .setDescription("Les lien du discord de Rusty | support et EdeN Company")
            .addField("=>le lien de Rusty | support", "[Rusty | support](https://discord.gg/uJxGcs)")
            .addField("le lien de EdeN Company", "[EdeN Company](https://discord.gg/RgF6Er4)")
            .setFooter("RustyBot | Hebergée par EdeN Company | dev by MrLudo's | Rusty Dev")
        message.channel.send(embedsupport)
    }else if (message.content === prefix + "stats"){
        var userCreateDate = message.author.createdAt.toString().split(" ");
        var stats_embed = new Discord.RichEmbed()
            .setColor("#FF0105")
            .setTitle(`Statistiques de l'utilisateur ${message.author.username}`)
            .addField(`Tag de l'utilisateur`, message.author.tag)
            .addField(`ID de l'utilisateur`, message.author.id)
            .addField(`Date de creation de l'utilisateur :`, userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
            .setThumbnail(message.author.avatarURL)
        message.channel.send({embed: stats_embed})
    }else if (message.content === prefix + "serverlist") {
        message.channel.send(bot.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))
    }else if (message.content === prefix ) {
        message.delete()
        let xoargs = message.content.split(" ").slice(1);
        let xo03 = xoargs.join(" ")
        var xo02 = message.guild.channels.find('name', 'vcs-Rusty');
        if(!xo02) return message.reply("Le channel vcs-Rusty est introuvable")
        if(message.channel.name !== 'vcs-Rusty') return  message.reply("commande a effectuer dans vcs-Rusty")
        if(!xo03) return message.reply("Merci d'ecrire un message a envoyer sur le vcs")
        var vcsembed = new Discord.RichEmbed()
        .setColor("#FF0105")
        .setTitle("vcs du Rusty Bot")
        .addField("Utilisateur", message.author.username + "#" + message.author.discriminator, true)
        .addField("Discord", message.guild.name, true)
        .addField("▬▬▬▬▬▬▬▬▬▬", "▬▬▬▬▬▬▬▬▬▬")
        .addBlankField()
        .addField("message", xo03)
        .setFooter("RustyBot | Hebergée par EdeN Company | dev by MrLudo's | Rusty Dev")
        .setTimestamp()
        bot.channels.findAll('name', 'vcs-Rusty').map(channel => channel.send(vcsembed))
    }else if (message.content === prefix + "avatar") {
        message.reply(message.author.avatarURL);
    }

    if (message.content === prefix + 'clear') {

        async function purge() {
            message.delete();

            if (!message.member.roles.find("name", "bot-commander")) {
                message.channel.send('You need the \`bot-commander\` role to use this command.');
                return;
            }


            if (isNaN(args[0])) {
                message.channel.send("mettez un nombre entre 0 et 99 \n Usage:" prefix + "clear <nombres>");

                return;
            }
            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + 'on été suprimer');

            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`));
        }
        purge();
    }

});
