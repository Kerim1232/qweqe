require("dotenv").config()
const { Client } = require("discord.js")

const client = new Client({intents: []})

client.once("ready",() => {
  console.log( `Ready! Logged in as ${client.user.tag}! I´m on ${client.guilds.cache.size} guilds(s)! `)
 client.user.setActivity(`mit dem Discord`, { type: "PLAYING"})
  })




client.login(process.env.DISCORD_BOT_TOKEN)
