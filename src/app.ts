
import { token, prefix } from './config/servant.json' 
import * as Discord from 'discord.js'
import hello from './commands/hello'
import notFound from './commands/notFound'

const bot = new Discord.Client()

bot.login(token)

bot.on('ready', () => {
    console.log('Servant online!')
})

type ResolverFn = (message: Discord.Message, args: string[]) => string
type ResolverList = {command: string, handle: ResolverFn}[]

const resolverList: ResolverList = [
    {command: 'hello', handle: hello},
]

bot.on('message', (message) => {
    if(!message.author.bot && !(message.channel.type === 'dm')) {
        const args = message.content.split(' ')
        const command = args.shift()
        if(command?.startsWith(prefix)) {
            const resolver = resolverList.find(resolver => resolver.command === command.substr(1))
            const response: string =  resolver?.handle(message, args) || notFound(message)
            message.channel.send(response)
        }
    }
})
