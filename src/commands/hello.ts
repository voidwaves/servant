
import { ResolverFn } from '../types/common'
import { Message } from 'discord.js'

const hello: ResolverFn =  (_message: Message, _args: string[]) => {
    return {
        text: 'Well hello there!',
        help: {
            helpText: '............'
        }
    }
}

export default hello