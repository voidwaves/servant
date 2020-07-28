
import * as Discord from 'discord.js'
import { ResolverFn } from '../types/common'

const hello: ResolverFn =  (_message: Discord.Message, _args: string[]) => {
    return 'Well hello there!'
}

export default hello