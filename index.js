const { Client, Intents, Collection } = require("discord.js");
const { auth } = require("./config.js");
const fs = require("fs");
const path = require("path");

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
});

client.commands = new Collection();

for (const file of fs.readdirSync(path.join(__dirname, "./src/commands"))) {
  const command = require(`./src/commands/${file}`);
  client.commands.set(command.name, command);
}

for (const file of fs.readdirSync(path.join(__dirname, "./src/events"))) {
  const event = require(`./src/events/${file}`);
  client.on(event.name, (...args) => event.execute(client, ...args));
}

client.login(auth.token).catch(console.error);
