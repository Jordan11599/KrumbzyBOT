const Discord = require("discord.js");
const client = new Discord.Client();

client.login("");

client.on("ready", () => 
{
  console.log("Bot Online!")
  //console.log(User.presense.game.streaming())
  client.user.setActivity(" with JavaScript", { type: "PLAYING" });
  try {
    client.on("raw", event => 
  {
    const eventName = event.t;
    if (eventName === "MESSAGE_REACTION_ADD") 
    {
      if (event.d.message_id === `593475093477457965` || `593477176217567254` || `593478341944803465` || `593486035262898177`) 
      {
        //This is the ID of the message in the channels
        let reactionChannel = client.channels.get(event.d.channel_id);
        if (reactionChannel.messages.has(event.d.message_id)) 
        {
          return;
        } 
        else 
        {
          reactionChannel
            .fetchMessage(event.d.message_id)
            .then(msg => 
            {
              let msgReaction = msg.reactions.get(
                event.d.emoji.name + ":" + event.d.emoji.id
              );
              let user = client.users.get(event.d.user_id);
              client.emit(`messageReactionAdd`, msgReaction, user);
            })
            .catch(err => console.log("err", err));
        }
      } 
    }  
  });

   client.on("messageReactionAdd", async (messageReaction, user) => 
   {
      if (messageReaction === undefined) 
      {
        return;
      }

      let member = messageReaction.message.guild.members.find(
        member => member.id === user.id
       );


      let emojiName = messageReaction.emoji.name.toLowerCase()

      //console.log(emojiName)
      //console.log("test")

      //-------------------------------------------------------------//
      
      let roleWarframe = messageReaction.message.guild.roles.find(
        roleWarframe =>
        roleWarframe.name.toLowerCase() === "warframe"
      );

      let roleClash = messageReaction.message.guild.roles.find(
        roleClash =>
        roleClash.name.toLowerCase() === "clash of clans"
      );

      let roleLeague = messageReaction.message.guild.roles.find(
        roleLeague =>
        roleLeague.name.toLowerCase() === "league of legends"
      );

      let roleWoW = messageReaction.message.guild.roles.find(
        roleWoW =>
        roleWoW.name.toLowerCase() === "world of warcraft"
      );

      let rolePUBG = messageReaction.message.guild.roles.find(
        rolePUBG =>
        rolePUBG.name.toLowerCase() === "pubg"
      );

      let roleKrunker = messageReaction.message.guild.roles.find(
        roleKrunker =>
        roleKrunker.name.toLowerCase() === "krunker"
      );

      let roleDota =  messageReaction.message.guild.roles.find(
        roleDota =>
        roleDota.name.toLowerCase() === "dota"
      );

      let roleMinecraft =  messageReaction.message.guild.roles.find(
        roleMinecraft =>
        roleMinecraft.name.toLowerCase() === "minecraft"
      );

      let roleMusic =  messageReaction.message.guild.roles.find(
        roleMusic =>
        roleMusic.name.toLowerCase() === "music"
      );

      let roleMovie =  messageReaction.message.guild.roles.find(
        roleMovie =>
        roleMovie.name.toLowerCase() === "movie/tv-shows"
      );

      let roleNews =  messageReaction.message.guild.roles.find(
        roleNews =>
        roleNews.name.toLowerCase() === "news"
      );

      let roleMemes =  messageReaction.message.guild.roles.find(
        roleMemes =>
        roleMemes.name.toLowerCase() === "memes"
      );

      let roleNS =  messageReaction.message.guild.roles.find(
        roleNS =>
        roleNS.name.toLowerCase() === "notification squad"
      );

      let roleMember =  messageReaction.message.guild.roles.find(
        roleMember =>
        roleMember.name.toLowerCase() === "member"
      );

      let roleClasses =  messageReaction.message.guild.roles.find(
        roleClasses =>
        roleClasses.name.toLowerCase() === "-----------classes-------------------------"
      );

      let roleFeatures =  messageReaction.message.guild.roles.find(
        roleFeatures =>
        roleFeatures.name.toLowerCase() === "-----------features------------------------"
      );

      let roleGames =  messageReaction.message.guild.roles.find(
        roleGames =>
        roleGames.name.toLowerCase() === "-----------games---------------------------"
      );



      //-------------------------------------------------------------//
     
      /* 
      let role<customName> = messageReaction.message.guild.roles.find(
        role<customName> =>
        role<customName>.name.toLowerCase() === "<name of custom emote>"
      );
      */

      //-------------------------------------------------------------//

      switch(emojiName) {
        case "warframe":
            member.addRole(roleWarframe);
            break;
        case "clashofclans":
            member.addRole(roleClash);
            break;
        case "leagueoflegends":
            member.addRole(roleLeague);
            break;
        case "worldofwarcraft":
            member.addRole(roleWoW);
            break;
        case "pubg":
            member.addRole(rolePUBG);
            break;
        case "krunker":
            member.addRole(roleKrunker);
            break;
        case "dota":
            member.addRole(roleDota);
            break;
        case "minecraft":
            member.addRole(roleMinecraft);
            break;
        case "music":
            member.addRole(roleMusic);
            break;
        case "movie":
            member.addRole(roleMovie);
            break;
        case "news":
            member.addRole(roleNews);
            break;
        case "memes":
            member.addRole(roleMemes);
            break;
        case "notificationsquad":
              member.addRole(roleNS);
              break;
        case "✅":
            member.addRole(roleMember);
            member.addRole(roleClasses);
            member.addRole(roleFeatures);
            member.addRole(roleGames);
            break;

        //-------------------------------------------------------------//

        //case "<name of custom emote>"
        //member.addRole(role<customName>);
        //---can add lots of roles here---
        //break;

        //-------------------------------------------------------------//

        default:
          return;
      }
   });

    client.on("messageReactionRemove", async (messageReaction, user) => 
    {
      if (messageReaction === undefined) 
      {
        return;
      }

      let member = messageReaction.message.guild.members.find(
        member => member.id === user.id
       );


      let emojiName = messageReaction.emoji.name.toLowerCase()

      //console.log(emojiName)
      //console.log("test")

      //-------------------------------------------------------------//
      
      let roleWarframe = messageReaction.message.guild.roles.find(
        roleWarframe =>
        roleWarframe.name.toLowerCase() === "warframe"
      );

      let roleClash = messageReaction.message.guild.roles.find(
        roleClash =>
        roleClash.name.toLowerCase() === "clash of clans"
      );

      let roleLeague = messageReaction.message.guild.roles.find(
        roleLeague =>
        roleLeague.name.toLowerCase() === "league of legends"
      );

      let roleWoW = messageReaction.message.guild.roles.find(
        roleWoW =>
        roleWoW.name.toLowerCase() === "world of warcraft"
      );

      let rolePUBG = messageReaction.message.guild.roles.find(
        rolePUBG =>
        rolePUBG.name.toLowerCase() === "pubg"
      );

      let roleKrunker = messageReaction.message.guild.roles.find(
        roleKrunker =>
        roleKrunker.name.toLowerCase() === "krunker"
      );

      let roleDota =  messageReaction.message.guild.roles.find(
        roleDota =>
        roleDota.name.toLowerCase() === "dota"
      );

      let roleMinecraft =  messageReaction.message.guild.roles.find(
        roleMinecraft =>
        roleMinecraft.name.toLowerCase() === "minecraft"
      );

      let roleMusic =  messageReaction.message.guild.roles.find(
        roleMusic =>
        roleMusic.name.toLowerCase() === "music"
      );

      let roleMovie =  messageReaction.message.guild.roles.find(
        roleMovie =>
        roleMovie.name.toLowerCase() === "movie/tv-shows"
      );

      let roleNews =  messageReaction.message.guild.roles.find(
        roleNews =>
        roleNews.name.toLowerCase() === "news"
      );

      let roleMemes =  messageReaction.message.guild.roles.find(
        roleMemes =>
        roleMemes.name.toLowerCase() === "memes"
      );

      let roleNS =  messageReaction.message.guild.roles.find(
        roleNS =>
        roleNS.name.toLowerCase() === "notification squad"
      );

      //-------------------------------------------------------------//
     
      /* 
      let role<customName> = messageReaction.message.guild.roles.find(
        role<customName> =>
        role<customName>.name.toLowerCase() === "<name of custom emote>"
      );
      */

      //-------------------------------------------------------------//

      switch(emojiName) {
        case "warframe":
            member.removeRole(roleWarframe);
            break;
        case "clashofclans":
            member.removeRole(roleClash);
            break;
        case "leagueoflegends":
            member.removeRole(roleLeague);
            break;
        case "worldofwarcraft":
            member.removeRole(roleWoW);
            break;
        case "pubg":
            member.removeRole(rolePUBG);
            break;
        case "krunker":
            member.removeRole(roleKrunker);
            break;
        case "dota":
            member.removeRole(roleDota);
            break;
        case "minecraft":
            member.removeRole(roleMinecraft);
            break;
        case "music":
            member.removeRole(roleMusic);
            break;
        case "movie":
            member.removeRole(roleMovie);
            break;
        case "news":
            member.removeRole(roleNews);
            break;
        case "memes":
            member.removeRole(roleMemes);
            break;
        case "notificationsquad":
              member.removeRole(roleNS);
              break;

        //-------------------------------------------------------------//

        //case "<name of custom emote>"
        //member.addRole(role<customName>);
        //---can add lots of roles here---
        //break;

        //-------------------------------------------------------------//

        default:
          return;
      }
    });

    client.on("guildMemberAdd", async member => {
      let roleNew = member.guild.roles.find(roleNew =>
      roleNew.name.toLowerCase() === "new")
      member.addRole(roleNew);
    })
  

    //client.on('presenceUpdate', (user, newMember) => {

      //console.log(user.presence.game.streaming);

      //console.log(newMember.presence.game.streaming);

      /* guild.members.forEach(function(newMember){
        // your code
      }); */


      // check for correct guild
      // check newMember.presence.game.streaming
      // compare with oldMember.presence.game.streaming to see if they just started streaming
    //});


    /* function processCommand(receivedMessage) {
     let fullCommand = receivedMessage.content.substr(1);
     let splitCommand = fullCommand.split(" ");
     let primaryCommand = splitCommand[0];
     let arguments = splitCommand.slice(1);

     if (primaryCommand == "help") {
       helpCommand(arguments, receivedMessage);
     } else if (primaryCommand == "multiply") {
       multiplyCommand(arguments, receivedMessage);
        } else if (primaryCommand == "logo") {
        logoPrinter();
     } else {
        receivedMessage.channel.send("Unknown command");
      }
   } */
  } catch (error) {
    console.log(error)
  }
});