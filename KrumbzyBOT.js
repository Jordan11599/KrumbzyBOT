const Discord = require("discord.js");
const client = new Discord.Client();

client.login("TheDiscordBotToken");

client.on("ready", () => {
  console.log("Bot Online!");
  client.user.setActivity(" !help", { type: "LISTENING" });
  rStart();

  client.on("messageReactionAdd", async (messageReaction, user) => {
    if (messageReaction === undefined) {
      return;
    }
    let member = messageReaction.message.guild.members.find(
      member => member.id === user.id
    );
    let emojiName = messageReaction.emoji.name.toLowerCase();
    ARoles(IRoles(messageReaction, emojiName), member);
  });

  client.on("messageReactionRemove", async (messageReaction, user) => {
    if (messageReaction === undefined) {
      return;
    }
    let member = messageReaction.message.guild.members.find(
      member => member.id === user.id
    );
    let emojiName = messageReaction.emoji.name.toLowerCase();
    DRoles(IRoles(messageReaction, emojiName), member);
  });

  client.on("presenceUpdate", (olds, news) => {
    //this presenceUpdate will be used to see if the user is streaming not their activity
    let member = news;
    let oldPresence = olds.presence.clientStatus.desktop;
    let newPresence = news.presence.clientStatus.desktop;
    let role = news.guild.roles.find(role => role.id === "656166343489617980");

    if (newPresence === "online") {
      member.addRole(role);
      console.log("Member " + member.user.username + " is now active");
    }
    if (oldPresence === "online") {
      member.removeRole(role);
      console.log("Member " + member.user.username + " is now inactive");
    }
  });
});

function rStart() {
  try {
    client.on("raw", event => {
      const eventName = event.t;
      if (eventName === "MESSAGE_REACTION_ADD") {
        if (event.d.message_id === `594232601305415683`) {
          //This is the ID of the message in the channels
          let reactionChannel = client.channels.get(event.d.channel_id);
          if (reactionChannel.messages.has(event.d.message_id)) {
            return;
          } else {
            reactionChannel.fetchMessage(event.d.message_id).then(msg => {
              let msgReaction = msg.reactions.get(
                event.d.emoji.name + ":" + event.d.emoji.id
              );
              let user = client.users.get(event.d.user_id);
              client.emit(`messageReactionAdd`, msgReaction, user);
            });
          }
        }
      }
    });
  } catch {
    console.log("error with raw event");
    return;
  }
}

function IRoles(messageReaction, emojiName) {
  try {
    let role = messageReaction.message.guild.roles.find(
      role => role.name.toLowerCase() === emojiName
    );
    return role;
  } catch {
    console.log("error emojiname not valid");
    return;
  }
}

function ARoles(role, member) {
  try {
    member.addRole(role);
    console.log("Added role " + role.name + " to " + member);
  } catch {
    console.log("error with assigning roles");
    return;
  }
}

function DRoles(role, member) {
  try {
    member.removeRole(role);
    console.log("Removed role " + role.name + " to " + member);
  } catch {
    console.log("error with removing roles");
    return;
  }
}
