const Discord = require('discord.js')
const client = new Discord.Client()

client.login("");

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("JavaScript", {type: "STREAMING"})

    client.guilds.forEach((guild) => {
        // console.log(guild.name)
        guild.channels.forEach((channel) => {
            // console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
            //Text Channels category 588492374993534986
            //general text 588492374993534987
            //Voice Channels category 588492374993534988
            //General voice 588492374993534989
        })
    })

    client.on('message', (receivedMessage) => {
        if (receivedMessage.author == client.user) {
            return
        }
        //receivedMessage.channel.send("Message received, " +
        // receivedMessage.author.toString() + ": " + receivedMessage.content)

        // receivedMessage.react("🏆")

        if(receivedMessage.content.startsWith("!")){
            processCommand(receivedMessage)
        }
    })






    function processCommand(receivedMessage) {
        let fullCommand = receivedMessage.content.substr(1)
        let splitCommand = fullCommand.split(" ")
        let primaryCommand = splitCommand[0]
        let arguments = splitCommand.slice(1)

        if(primaryCommand == "help") {
            helpCommand(arguments, receivedMessage)
        } else if (primaryCommand == "multiply") {
            multiplyCommand(arguments, receivedMessage)
        } else if (primaryCommand == "logo") {
            logoPrinter()
        } else {
            receivedMessage.channel.send("Unknown command")
        }
    }


function helpCommand(arguments, receivedMessage) {
    if(arguments.length == 0) {
        receivedMessage.channel.send("I'm not sure what you need help with. Try !help [topic]")
    } else {
        receivedMessage.channel.send("It looks like you need help with with " + arguments)
    }
}

function multiplyCommand(arguments, receivedMessage) {
    if(arguments.length < 2) {
        receivedMessage.channel.send("Not enough arguments. Try `!multiply 2 10`")
        return
    }
    let product = 1
    arguments.forEach((value) => {
        product = product * parseFloat(value)
    })
    receivedMessage.channel.send("The product of " + arguments + " is " + product.toString())
}

function logoPrinter() {
    let generalChannel = client.channels.get("588492374993534987")
    const attachment = new Discord.Attachment("test.png")
    generalChannel.send(attachment)
}
})