
import { token, prefix } from './config/servant.json' 
import * as Discord from 'discord.js'
import notFound from './commands/notFound'
import commandList from './commandList'


const bot = new Discord.Client()

bot.login(token)

bot.on('ready', () => {
    console.log('Servant online!')
})


bot.on('message', (message) => {
    if(!message.author.bot && !(message.channel.type === 'dm')) {
        const args = message.content.split(' ')
        const command = args.shift()
        if(command?.startsWith(prefix)) {
            const resolver = commandList.find(resolver => resolver.command === command.substr(1))
            const response: string =  resolver?.handler(message, args) || notFound(message)
            message.channel.send(response)
        }
    }
})
