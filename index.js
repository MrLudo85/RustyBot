const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("%")

bot.login(process.env.TOKEN);


bot.on('ready', function() {

    bot.user.setActivity(`%help | ${bot.guilds.size} serveur | ${bot.users.size} joueur `, {type: "STREAMING"});
    console.log(`${bot.user.username} vien de se connecter`);
bot.on('message', message => {
    if(message.author.bot) return;
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
    }
    if (message.content === prefix + "help"){
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
        .addField("%vcs", "Permer de discuter dans un chat disponible sur tout les sserveur du bot")
        .addField("▬▬▬▬▬FUN▬▬▬▬▬", "-=-=-=-=-=-=-=-=-=--=-=-=-=-=-")
        .addField("%dog", "Donne une image de chien aléatoire")
        .addField("%cat", "Donne une image de chat aléatoire")
        .addField("%fight", "Jeu pour doner un coup de point")
        .addField("%8ball", "Repont aléatoirement a une question")
        .addField("▬▬▬▬▬NSFW▬▬▬▬▬", "-=-=-=-=-=-=-=-=-=--=-=-=-=-=-")
        .addField("%nsfw", "donne des image de porno aléatoirement")
        .setFooter("RustyBot | aides")
        message.channel.send(aideEmbed);
    }

    if (message.content === prefix + "hhelp"){
        var aideEmbeda = new Discord.RichEmbed()
        .setTitle(":book: Voici la page d'aide du bot")
        .setColor("#FF0105")
        .addField("%aide", "Affiche cette page donc la page d'aide du bot")
        .addField("▬▬▬▬▬MODERATION▬▬▬▬", "-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=")
        .addField("%modhelp", "Permet de voir la page d'aide des moderateur")
        .addField("<457879292152381443>▬▬▬▬▬GENERAL▬▬▬▬▬", "-=-=-=-=-=-=-=-=-=--=-=-=-=-=-")
        .addField("%invite", "Donne le lien d'invitation du bot")
        .addField("%support", "Donne le lien du support du bot")
        .addField("%site", "Donne le lien du site internet du fondateur")
        .addField("%hebergeur", "Donne des informations sur l'hébergeur du Bot")
        .addField("%stats", "Donne les statistiques de l'utilisateur")
        .addField("%say", "Permet de répéter un message précis")
        .addField("%vcs", "Permer de discuter dans un chat disponible sur tout les sserveur du bot")
        .addField(":coolpartyblob:▬▬▬▬▬FUN▬▬▬▬▬", "-=-=-=-=-=-=-=-=-=--=-=-=-=-=-")
        .addField("%dog", "Donne une image de chien aléatoire")
        .addField("%cat", "Donne une image de chat aléatoire")
        .addField("%fight", "Jeu pour doner un coup de point")
        .addField("%8ball", "Repont aléatoirement a une question")
        .addField("▬▬▬▬▬NSFW▬▬▬▬▬", "-=-=-=-=-=-=-=-=-=--=-=-=-=-=-")
        .addField("%nsfw", "donne des image de porno aléatoirement")
        .setFooter("RustyBot | aides")
        message.channel.send(aideEmbeda);
    }

    if (message.content === prefix + "modhelp") {
        var embedmodhelp = new Discord.RichEmbed()
        .setTitle(":book: Voici la page d'aide des moderateur")
        .setColor("#FF0105")
        .addField("%modhelp", "affiche cette page donc la page d'aide des moderateur")
        .setDescription("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
        .addField("%ban", "permet de bannir un utilisateur")
        .addField("%kick", "permet de kick un utilisateur")
        .addField("%warn", "permet de warn un utilisateur")
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
});

bot.on("message",message => {
    if(message.author.bot) return;
            if(message.content.startsWith(prefix+ "vcs")){

            message.delete()
        
            var xo03 = message.content.split(" ").slice(1).join(" ");
        
            var xo02 = message.guild.channels.find('name', 'vcs-rusty');
            
            if(message.channel.name == "vcs-rusty"){
            
                if (message.author.id === "373616425727819776") {
                const fondateur_embed = new Discord.RichEmbed()
                .setColor("#FF0105")
        
                .addField("• Fondateur •", message.author.username)
            
                .addField("• Provenant du serveur •", message.guild.name)
            
                .addField("• ▬▬▬▬▬▬▬▬▬▬▬▬ •", xo03)
            
                .setFooter("RustyBot | vcs")
            
                .setThumbnail(message.guild.iconURL)
            
                .setTimestamp()
                message.delete()
                return bot.channels.findAll("name", "vcs-rusty").map(channel => channel.send(fondateur_embed));
            } 
                if (message.author.id === "394879906095431681") {
                const modérateur_embed = new Discord.RichEmbed()
                .setColor("#1F618D")
        
                .addField("• Modérateur •", message.author.username)
            
                .addField("• Provenant du serveur •", message.guild.name)
            
                .addField("• ▬▬▬▬▬▬▬▬▬▬▬▬ •", xo03)
            
                .setFooter("RustyBot | vcs")
            
                .setThumbnail(message.guild.iconURL)
            
                .setTimestamp()
                message.delete()
                return bot.channels.findAll("name", "vcs-rusty").map(channel => channel.send(fondateur_embed));
            } 
         
            {
            let embedvcs = new Discord.RichEmbed()
        
            .setColor("#339999")
        
            .addField("• Utilisateur •", message.author.username)
        
            .addField("• Provenant du serveur •", message.guild.name)
        
            .addField("• ▬▬▬▬▬▬▬▬▬▬▬▬ •", xo03)
        
            .setFooter("RustyBot | vcs")
        
            .setThumbnail(message.guild.iconURL)
        
            .setTimestamp()
        
            return bot.channels.findAll('name', 'vcs-rusty').map(a=>a.send(embedvcs))
            }
          }
        
            return message.channel.send("Il faut écrire dans le channel vcs-rusty")
        
          }
 
});

bot.on("message", message => {
    if(message.author.bot) return;
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

bot.on("message", message => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + "8ball")) {
        message.delete();
        var args = message.content.substr(6)
        if(!args) return message.reply("Merci de poser une question");
        var replies = ["Oui.",
        "Non.",
        "Peut-être.",
        "Je ne sais pas"];
        var result = replies[Math.floor(Math.random()*replies.length)];
        var question = message.content.split(" ").slice(1).join(" ");
      
        var ballembed = new Discord.RichEmbed()
        .setTitle("par :" + message.author.tag)
        .setColor("#FF0105")
        .setDescription("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
        .addField(":arrow_down_small: **Question** :arrow_down_small:", question)
        .addField(":arrow_down_small: **Réponse** :arrow_down_small:", result)
        .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","RustyBot | 8ball")
        .setFooter("RustyBot | 8ball")
        message.channel.send(ballembed);
    }

    if (message.content.startsWith(prefix+ "nsfw")) {
        message.delete(message.author);
        if(!message.guild.channels.find("name", "nsfw")) return message.reply(":x: **Vous devez créer le salon `nsfw` !** :x:");
        if(message.channel.name !== "nsfw") return message.reply(":x: **Veuillez exécuter cette commande dans la salon `nsfw` !** :x:");
      
        let urlList3 = [
          'http://imgur.com/SBbyJZ8.gif',
          'https://78.media.tumblr.com/6706c5e266928d8110da11bb244bc20a/tumblr_nmwopzOrTt1tzmxtzo1_500.gif',
          'https://cdn.discordapp.com/attachments/455017232154755072/455017984600309761/2NRTBIG.jpg',
          'http://imgur.com/cDMInxI.gif',
          'https://78.media.tumblr.com/858b2aa67850b68509b16e5b4db8eb8e/tumblr_nn2p63QtSf1t39maqo1_500.gif',
          'https://78.media.tumblr.com/8b5e0420f9f574139964cfb91bb22a1d/tumblr_n3c029egSU1sfkfqio3_400.gif',
          'https://78.media.tumblr.com/63d2e7a5ad510bd5562f3b11ec8aeda4/tumblr_n7l9tafxU81revz5to1_500.gif',
          'http://imgur.com/3IQlDUn.gif',
          'https://78.media.tumblr.com/a3fc0459056ee268889427afaa4873b2/tumblr_n3g8dk7OVb1rnnw2ro1_500.gif',
          'https://78.media.tumblr.com/acdd22d00efe5636255f91eed8c00d63/tumblr_n4aoglNICi1qd5ic3o1_500.gif',
          'https://78.media.tumblr.com/15ee43be12bd548853573410bc2c4732/tumblr_o208fqtepF1s1qf6no6_400.gif',
          'https://78.media.tumblr.com/64591d33baa055ca41d17ca3912559e3/tumblr_n7hx132YXi1r9snzco1_400.gif',
          'https://cdn.discordapp.com/attachments/455017232154755072/455018451845644318/j3KdaH2.jpg',
          'https://78.media.tumblr.com/08c1868b788badc7ad9751e8ebf1873c/tumblr_ovwtq0gYxa1rylulro1_500.gif',
          'https://78.media.tumblr.com/858b2aa67850b68509b16e5b4db8eb8e/tumblr_nn2p63QtSf1t39maqo1_500.gif',
          'https://78.media.tumblr.com/354d34a212c4f8b37ad8433fe8fe5a80/tumblr_nvy1dk6k8Z1tlxyuno1_500.gif',
          'https://78.media.tumblr.com/8b060268a42ff9f3b8a9566f4ae231ff/tumblr_nyfkte5NRg1ui0i0eo1_500.gif',
          'https://cdn.discordapp.com/attachments/455017232154755072/455018250237902858/kxWrQVH.jpg',
          'http://imgur.com/7Kume3H.gif',
          'https://78.media.tumblr.com/7edd3194048c2d41a80435fddc585451/tumblr_p9lenn4tZj1rat4opo1_540.gif',
          'https://78.media.tumblr.com/a61cee7d4fee897666e79250e7768f4d/tumblr_nz99v5D6wJ1u9j6sno1_500.gif',
          'http://imgur.com/RZFmOtJ.gif',
          'http://imgur.com/mCFuGzn.gif',
          'https://78.media.tumblr.com/29e0eed2bab99ae58c75195e740815b7/tumblr_nz4jhylgC11tvbwtwo1_500.gif',
    
          
        ];
    
    let randomUrl3 = (urlList3[Math.floor(Math.random() * urlList3.length)])
    var nsfw_embed = new Discord.RichEmbed()
    .setColor('#339999')
    .setTitle("NSFW")
    .setImage(randomUrl3)
    .setFooter("Requête de  "  +  message.author.tag)
    message.guild.channels.find('name', 'nsfw').send(nsfw_embed)
    }

    if (message.content.startsWith(prefix + "fight")) {
        message.delete();
        if(!message.mentions.users.first()) {
          return message.channel.send(":tools: **Comment utiliser ma commande =>** ```%fight <@utilisateur>``` ")}
          let urlList2 = [
            'https://cdn.discordapp.com/attachments/444172474373111818/454967574636003338/fight_8.gif',
            'https://cdn.discordapp.com/attachments/444172474373111818/454967612775071744/fight_3.gif',
            'https://cdn.discordapp.com/attachments/444172474373111818/454967637567471616/fight1.gif',
            'https://cdn.discordapp.com/attachments/444172474373111818/454967690419765249/fight_9.gif',
            'https://cdn.discordapp.com/attachments/444172474373111818/454967726331527178/fight_6.gif',
            'https://cdn.discordapp.com/attachments/444172474373111818/454967768647860224/fight_7.gif',
            'https://cdn.discordapp.com/attachments/444172474373111818/454967804387655683/fight_10.gif',
            'https://cdn.discordapp.com/attachments/444172474373111818/454967819117920256/fight_5.gif',
            'https://cdn.discordapp.com/attachments/444172474373111818/454967742357831700/fight_2.gif',
            'https://cdn.discordapp.com/attachments/444172474373111818/454967724024528906/fight_4.gif',
          ];
    
          let randomUrl2 = (urlList2[Math.floor(Math.random() * urlList2.length)])
          var fight_embed = new Discord.RichEmbed()
          .setColor("#339999")
          .setTitle("Combat de " + message.author.tag + message.mentions.users.first())
          .setImage(randomUrl2)
          .setFooter("RustyBot | Fight")
          message.channel.send(fight_embed).catch();  
    }

    if(message.content.startsWith(prefix + "dog")) {
        message.delete();
        let urlList = [
          'https://cdn.discordapp.com/attachments/444172474373111818/454909820781330433/chien_5.jpeg',
          'https://cdn.discordapp.com/attachments/444172474373111818/454909825386807302/chien_7.jpeg',
          'https://cdn.discordapp.com/attachments/444172474373111818/454909824178716672/chien_6.jpeg',
          'https://cdn.discordapp.com/attachments/444172474373111818/454909829270470656/chien_8.jpeg',
          'https://cdn.discordapp.com/attachments/444172474373111818/454909838460321792/chien_10.jpeg',
          'https://cdn.discordapp.com/attachments/444172474373111818/454909832433238029/chien_9.jpeg',
          'https://cdn.discordapp.com/attachments/444172474373111818/454909843283771393/chien1.jpeg',
          'https://cdn.discordapp.com/attachments/444172474373111818/454920935544455168/chien_2.jpeg',
          'https://cdn.discordapp.com/attachments/444172474373111818/454920973951696896/chien_4.jpeg',
          'https://cdn.discordapp.com/attachments/444172474373111818/454920952938233866/chien_3.jpeg',
        ];
    
        let randomUrl = (urlList[Math.floor(Math.random() * urlList.length)])
        var cat_embed = new Discord.RichEmbed()
        .setColor("#FF0105")
        .setTitle("Voici le chien que vous avez demander")
        .setImage(randomUrl)
        .setFooter("Requête de " + message.author.tag)
        message.channel.send(cat_embed).catch();
    }

    if(message.content.startsWith(prefix + "cat")) {
        message.delete();
        let urlList1 = [
          'https://cdn.discordapp.com/attachments/444621791374082078/459025893080301598/1.jpg',
          'https://cdn.discordapp.com/attachments/444621791374082078/459025894632194098/2.jpg',
          'https://cdn.discordapp.com/attachments/444621791374082078/459025897475932161/3.jpg',
          'https://cdn.discordapp.com/attachments/444621791374082078/459025899434803233/8.jpg',
          'https://cdn.discordapp.com/attachments/444621791374082078/459025898105077773/7.jpg',
          'https://cdn.discordapp.com/attachments/444621791374082078/459025903687827467/9.jpg',
          'https://cdn.discordapp.com/attachments/444621791374082078/459025912357453824/5.jpg',
          'https://cdn.discordapp.com/attachments/444621791374082078/459025906384633870/telechargement.jpg',
          'https://cdn.discordapp.com/attachments/444621791374082078/459025916782444555/6.jpg',
          'https://cdn.discordapp.com/attachments/444621791374082078/459025909005942796/4.jpg',
        ];
    
        let randomUrl1 = (urlList1[Math.floor(Math.random() * urlList1.length)])
        var dog_embed = new Discord.RichEmbed()
        .setColor("#FF0105")
        .setTitle("Voici le chat que vous avez demander")
        .setImage(randomUrl1)
        .setFooter("Requête de " + message.author.tag)
        message.channel.send(dog_embed).catch();
    }

    if (message.content.startsWith(prefix + "setStatus")) {
        if(message.author.id == "373616425727819776") {
          var status = message.content.substr(13)
          bot.user.setStatus(`${status}`)
          message.channel.send("**Maintenant, le BOT a pour statut :** __**`` " + status + " !``**__")
        } else {
          message.channel.send("** :x: Vous n'avez pas la permission d'exécuter cette commande ! :x:**")
        }
    }

    if (message.content.startsWith(prefix + "setBotActif")) {
        message.delete();
        if(message.author.id == "373616425727819776"){
        bot.user.setStatus('online')
        message.channel.send("Statut changé en mode _en ligne_ ");
        console.log("Statut changé en mode en ligne.")
        } else {
        message.channel.send(":x: **Tu n'as pas la permission d'effectuer cette commande !** :x:")
    }}
        
    if (message.content.startsWith(prefix + "setBotNpd")) {
          message.delete();
        if(message.author.id == "373616425727819776"){
        bot.user.setStatus('dnd')
        message.channel.send("Statut changé en mode _ne pas déranger_ ");
        console.log("Statut changé en mode ne pas déranger.")
        } else {
        message.channel.send(":x: **Tu n'as pas la permission d'effectuer cette commande !** :x:")
    }}
        
    if (message.content.startsWith(prefix + "setBotInactif")) {
          message.delete();
        if(message.author.id == "373616425727819776"){
        bot.user.setStatus('idle')
        message.channel.send("Statut changé en mode _inactif_ ");
        console.log("Statut changé en mode inactif.")
        } else {
        message.channel.send(":x: **Tu n'as pas la permission d'effectuer cette commande !** :x:")
    }}
        
    if (message.content.startsWith(prefix + "setBotInvisible")) {
          message.delete();
        if(message.author.id == "373616425727819776"){
        bot.user.setStatus('invisible')
        message.channel.send("Statut changé en mode _invisible_ ");
        console.log("Statut changé en mode invisible.")
        } else {
        message.channel.send(":x: **Tu n'as pas la permission d'effectuer cette commande !** :x:")
    }}

    if(message.content.startsWith(prefix + "sondage")) {
        message.delete();
      var args = message.content.substr(8);
      if(!args) return message.channel.send(":x: **Tu dois préciser un sondage !** :x:").then(function (message) { message.react("❌") })
      if(args < 1 || args > 201){  return message.channel.send(":x: **Le sondage ne doit pas dépasser les 200 caractères !** :x:").then(function (message) { message.react("❌") });  }
      var sondage_embed = new Discord.RichEmbed()
      .setColor("#339999")
      .addField("__**Sondage :**__", args, true)
      .setFooter("RustyBot | sondage")
      message.channel.send(sondage_embed).then(function (message) { message.react("❌"); {message.react("✅")} });
    }

    if(message.content.startsWith(prefix + "purge")) {
        message.delete();
      let myrole = message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES");
      
      if(!myrole){
      return message.channel.send(":x: **Je n'ai pas la permission de gérer les messages !** :x:").then(msg => {msg.delete(15000)});
      }
      if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: **Vous n'avez pas la permission de gérer les messages !** :x:");
      
      var args = message.content.split(" ").slice(1)[0];
      if(!args) return message.channel.send(":tools: **Comment utiliser ma commande =>** ```%purge <Nombre Entre 1 et 100> ``` **Permission requise ->** ```MANAGE_MESSAGES```")
      if (isNaN(args)){  return message.channel.send(":x: **Tu dois préciser un nombre de message à supprimer et pas un autre caractère !** :x:") }
      if(args < 1 || args > 101){  return message.channel.send(":x: **Tu dois préciser un nombre entre 1 à 100 !** :x:")  }
      return message.channel.bulkDelete(Math.floor(args)).then(ok=>{
      var clear_embed = new Discord.RichEmbed()
      .setColor("#FF0105")
      .addField("__Nombre de messages supprimés :__", args)
      .setFooter("RustyBot | purge | requete de :" + message.author.tag).setTimestamp()
      message.channel.send(clear_embed).then(msg => {msg.delete(5000)});
})}})});
bot.on("message", message => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + 'warn')){
        message.delete();
         var botrole = message.guild.member(bot.user).hasPermission("KICK_MEMBERS");
      var memberrole = message.guild.member(message.author).hasPermission("KICK_MEMBERS");
      var reportmember = message.member.id;
      if(!message.mentions.users.first())
      return message.channel.send(":tools: **Comment utiliser ma commande =>** ```%warn <@utilisateur> <raison>``` **Permission requise ->** ```KICK_MEMBERS```")
      var member = message.mentions.users.first();
      var reason = message.content.split(" ").slice(2).join(" ");
      if(!botrole){
          return message.channel.send(":x: **Je n'ai pas la permission ``KICK_MEMBERS`` pour avertir cet utilisateur !:x: **")
        };
          if(!memberrole){
              return message.channel.send(":x: **Tu n'as pas la permission ``KICK_MEMBERS`` pour avertir cet utilisateur !** :x:")
          };
          if(!reason){
              return message.channel.send(":x: **Vous devez indiquer une raison valable !** :x:").catch()
          };
      if(memberrole){
          if(botrole){
            if(message.guild.member(message.mentions.users.first())){
                  eval(message.guild.member(message.mentions.users.first()))
                  message.guild.member(message.mentions.users.first()).send("Tu as été averti sur le serveur " +  message.guild.name + " par le modérateur <@" + message.author.id+"> pour la raison : \n " + reason )
                
                  
                  var warn_embed = new Discord.RichEmbed()
                  .setColor("#B40404")
                  .addField("**Avetissement du joueur **", message.mentions.users.first(), true)
                  .addField("**Avertissement exécuté Par **", message.author.tag, true)
                  .addField("**Raison de l'avertissement : **", reason, true)
                  .setFooter("RustyBot | warn")
                  message.channel.send(warn_embed).then(function (message) { message.react("💢") })}
                }
              }
        }

        if(message.content.startsWith(prefix + 'kick')){
            message.delete();
          if (message.channel.type === "dm") return;
          if(!message.mentions.users.first()){
            return message.channel.send(":tools: **Comment utiliser ma commande =>** ```%kick <@utilisateur> <raison>```  **Permission requise ->** ```KICK_MEMBERS```");
          }
          if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))  return message.reply("**:x: Vous n'avez pas la permission !** :x:").catch(console.error);
          if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("**:x: Je n'ai pas la permission pour exclure. :x:**").catch(console.error);
            
          }
          var reason = message.content.split(" ").slice(2).join(" ");
          if(!reason){
               return message.channel.send(":x: **Vous devez indiquer une raison valable !** :x:")
           };
          var member = message.mentions.users.first();             
          message.guild.members.get(member.id).kick(); {
            var mentionned = message.mentions.users.first();
            var getvalueof;
            if(mentionned){
                var getvalueof = mentionned;
            } else {
                var getvalueof = message.author;
            }
            message.client.users.get(getvalueof.id).send("**Tu as été exclu du serveur **" +  message.guild.name + "** Pour la raison** " + reason)
    
            var kick_embed = new Discord.RichEmbed()
            .setColor("#B40404")
            .addField("**Exclusion du joueur **", message.mentions.users.first(), true)
            .addField("**Exclusion exécutée Par **", message.author.tag, true)
            .addField("**Raison de l'exclusion : **", reason, true)
            .setFooter("RustyBot | Kick")
            message.channel.send(kick_embed).then(function (message) { message.react("❌") })
        }};

        if(message.content.startsWith(prefix + 'ban')){
            message.delete();
            if (message.channel.type === "dm") return;
                    if(!message.mentions.users.first()){
              return message.channel.send(":tools: **Comment utiliser ma commande ->** ```%ban <@utilisateur> <raison>```  **Permission requise ->** ```BAN_MEMBERS```");
            }
            if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))  return message.reply("**:x: Vous n'avez pas la permission !** :x:").catch(console.error);
            if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
              return message.reply("**:x: Je n'ai pas la permission pour bannir. :x:**").catch(console.error);
              
            }
            var reason = message.content.split(" ").slice(2).join(" ");
            if(!reason){
                 return message.channel.send(":x: **Vous devez indiquer une raison valable !** :x:")
             };
            var member = message.mentions.users.first();             
            message.guild.members.get(member.id).ban(); {
              var mentionned = message.mentions.users.first();
              var getvalueof;
              if(mentionned){
                  var getvalueof = mentionned;
              } else {
                  var getvalueof = message.author;
              }
            message.client.users.get(getvalueof.id).send("**Tu as été Banni du serveur **" +  message.guild.name + "** Pour la raison** " + reason)
            var ban_embed = new Discord.RichEmbed()
            .setColor("#B40404")
            .addField("**Bannissement du joueur **", message.mentions.users.first(), true)
            .addField("**Bannissement exécuté Par **", message.author.tag, true)
            .addField("**Raison du bannissement : **", reason, true)
            .setImage("https://cdn.discordapp.com/attachments/424936338031116308/454634287484895232/BAN.gif")
            .setFooter("RustyBot | ban")
            message.channel.send(ban_embed).then(function (message) { message.react("🚫") })
        }};

        if (message.content.startsWith(prefix + "addrole")) {
            if (message.channel.type === "dm") return;
            if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
            if(message.mentions.users.size === 0) {
              return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
            }
            let addmember = message.guild.member(message.mentions.users.first());
            if(!addmember) {
              return message.channel.send("**:x: Je ne suis pas sur que cet utilisateur existe...**");
            
                  }else{
            let args = message.content.split(" ").slice(1);
                                  var amount = message.content.slice(message.content.indexOf(message.content.split(" ")[2]))
            let userRoleID = message.guild.roles.find("name", `${amount}`);
            if(!message.guild.roles.exists("name", `${amount}`)) {
                    message.channel.send(":x: Le role **"+amount+"** n'a pas été trouvé");
                  }else{
            
                        addmember.addRole(userRoleID).catch(error => console.log(error));
              message.channel.send(`**${addmember}** à désormais le role **${amount} :smile:**`)
        }}};

        if (message.content.startsWith(prefix + "mute")) {
            if (message.channel.type === "dm") return;
            if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
            if(message.mentions.users.size === 0) {
              return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
            }
            let muteMember = message.guild.member(message.mentions.users.first());
            if(!muteMember) {
              return message.channel.send("**:x: Je ne suis pas sur que cet utilisateur existe...**");
            }
            if(!message.guild.member(bot.user).hasPermission("MANAGE_GUILD")) {
              return message.reply("*:x: Je n'ai pas la permission pour mute...**").catch(console.error);
            }
            message.channel.overwritePermissions(muteMember, { SEND_MESSAGES: false }).then(member => {
                message.channel.send(`**${muteMember.user.username}** est désormais mute dans **#${message.channel.name}** :mute:`)
        })
}});

bot.on("message", message => {
    if(message.author.bot) return;
    if (message.content.startsWith(prefix + "unmute")) {
        if (message.channel.type === "dm") return;
        if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
        if(message.mentions.users.size === 0) {
          return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
        }
        let muteMember = message.guild.member(message.mentions.users.first());
        if(!muteMember) {
          return message.channel.send("**:x: Je ne suis pas sur que cet utilisateur existe...**");
        }
        if(!message.guild.member(bot.user).hasPermission("MANAGE_GUILD")) {
          return message.reply("*:x: Je n'ai pas la permission pour unmute...**").catch(console.error);
        }
        message.channel.overwritePermissions(muteMember, { SEND_MESSAGES: true }).then(member => {
            message.channel.send(`**${muteMember.user.username}** est désormais unmute dans **#${message.channel.name}** :mute:`)
    })
}});

bot.on("message", message => {
    if(message.author.bot) return;
    if (message.content.startsWith(prefix + "annonce")) {
        message.delete()
        if(!message.guild) return;
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("**:x: Vous n'avez pas la permission `Administrateur` dans ce serveur**").catch(console.error);
        let args = message.content.split(" ").slice(1).join(" ");
        if(!args) return message.channel.send("Hey y a rien à annoncer ?");
        var embed = new Discord.RichEmbed();
        embed
        .setColor(10038562)
        .setTitle("⚠Annonce importante:⚠")
        .setDescription(args)
        .setFooter("Annonce par " + message.author.username);
        message.channel.send(embed)
    }

    if (message.content.startsWith(prefix + "roll")) {
        const roll = Math.floor(Math.random() * 6) + 1;
        message.channel.send(new Discord.RichEmbed()
            .setColor(12370112)
            .setTitle('Roll')
            .setAuthor(message.member.user.username, message.member.user.displayAvatarURL)
            .setDescription('Tomber sur un: **' + roll + '**'));
    }

    if(message.content.startsWith(prefix + 'rename')){
        if(message.author.id == "373616425727819776"){
            bot.user.setUsername(message.content.substr(8));
            message.reply("Voici le nouveau non du bot")
        } else {
            message.channel.send("Nop !")
          }
    }

    if (message.content.startsWith(prefix + 'debug')) {
        if(!message.guild) return;
        if (message.author.id !== '373616425727819776') {return message.reply("Ta crue que tu pouvais faire la commande bhien non :rage:")
    } else {
        var os = require('os');
        var cpu = os.loadavg();
        var embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username + " Commande Debug") 
        .setColor(12745742)
        .setThumbnail(bot.user.avatarURL) 
        .addField("📋Nom du bot", bot.user.tag, true)
        .addField("🆔ID", bot.user.id, true)
        .addField("🤖Version","0.2.1", true)
        .addField("✏librairie", "Discord.js",true)
        .addField("📔Version discord.js", Discord.version, true)
        .addField("🔐Node", process.version, true)
        .addField("❔Présent sur ", bot.guilds.size + " serveurs", true)
        .addField("🖥OS", process.platform, true)
        .addField("🚅Ram" , `${Math.round(process.memoryUsage().heapUsed / 1000000)}MB`, true)
        .addField("☄Serveur en Commun", bot.guilds.filter(g => g.members.has(message.author.id)).size, true)
        message.channel.send(embed);
    }

    if (message.content.startsWith(prefix + "embh")) {
        if(!message.guild) return;
        message.channel.send({embed: {
            color: Math.floor(Math.random()*16777216),
            author: {
              name: bot.user.username,
              icon_url: bott.user.avatarURL
            },
            title: "Aide sur les **embed** prefix ``+``",
            fields: [{
                name: "Couleur aléatoire",
                value: "embed <message>",
                inline: true
              },
              {
                name: "🔴Rouge",
                value: "embr <message",
                inline: true
              },
              {
                name: "🔵Bleu",
                value: "embl <message>",
                inline: true
              },
              {
                name: "🍏Vert",
                value: "embv <message>",
                inline: true
              },
              {
                name: "⚪Blanc",
                value: "embb <message>",
                inline: true
              },
              {
                name: "🍊Orange",
                value: "embo <message>",
                inline: true
              },
              {
                name: "⚫Noir",
                value: "embn <message>",
                inline: true
              },
              {
                name: "💛Jaune",
                value: "embj <message>",
                inline : true
              },
              {
                name: "🌑Gris",
                value: "embg <message>",
                inline: true
              },
              {
                name: "🐷Rose",
                value: "emb.ro <message>",
                inline: true
              },
            ],
            footer: {
                icon_url: client.user.avatarURL,
                text: "©️Yazguard"
            }
          }
        });
    }
}});
