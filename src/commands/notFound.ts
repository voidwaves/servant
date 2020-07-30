
import { ResolverFn } from '../types/common'
import { Message } from 'discord.js'

const notFound: ResolverFn = (message: Message, _args: string[]) => {
    return {text: `Hi ${message.author.username}, the command you're looking for doesn't exist. Try *!help* instead.`}
}

export default notFound