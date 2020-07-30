
import { token, prefix } from './config/servant.json' 
import notFound from './commands/notFound'
import commandList from './commandList'
import { Client } from 'discord.js'

const bot = new Client()

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
            const result = resolver?.handler(message, args) || notFound(message, args)
            
            if(args[0] === 'help') {
                const noHelpMessageText = `This command doesn't define a help message, try *!help* to see all commands that do.`
                const [helpText, helpOptions] = [result.help?.helpText, result.help?.helpOptions]
                const { helpText: text, helpOptions: options } = {helpText: helpText || noHelpMessageText, helpOptions}
                message.channel.send(text, options)
            } else {
                message.channel.send(result.text, result.options)
            }
        }
    }
})
