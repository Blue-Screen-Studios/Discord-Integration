import { Client, IntentsBitField } from 'discord.js';
import { config } from 'dotenv';
import { Discord } from './Discord/discord'
import { SetupGoogle } from './Google/google';

config();

const discordClient = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers
    ] 
});

//discordClient.on('debug', console.log);
discordClient.on('warn', console.log);

Discord(discordClient)
//SetupGoogle();