require('dotenv').config();
const  { REST, routs} = require('discord.js')

const commands = [
    {
        name: "hey",
        description: 'replies with hey!',
    }
];

const rest = new REST ({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try{
        console.log('registaring slash commands...');
        
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.
            GUILD_ID),
            { body: commands}
            )
        
        console.log('slash commands were registered succesfuly');
    }catch (error) {
        console.log(`there was an error: ${error}`)
    }
})();
