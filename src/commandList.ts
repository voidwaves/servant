
import { ResolverList, ResolverFn } from './types/common'
import hello from './commands/hello'
import { defaultEmbed } from './embeds'
import { Message } from 'discord.js'

const commandList: ResolverList = [
    {command: 'hello', description: 'just saying hi (*!hello help* for more info)', handler: hello},
]

const help: ResolverFn =  (_message: Message, _args: string[]) => {
    const embed = commandList
    .reduce((embed, {command, description}) => embed.addField(`!${command}`, description), defaultEmbed())
    .setTitle('Available Commands')
    .setDescription('Checkout *!command help* to see further options for that command.')

    return {text: '', options: embed}
}

commandList.push({command: 'help', description: 'displaying all available commands', handler: help})

export default commandList