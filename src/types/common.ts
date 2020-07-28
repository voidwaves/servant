
import * as Discord from 'discord.js'

export type ResolverFn = (message: Discord.Message, args: string[]) => string
export type ResolverList = {command: string, handler: ResolverFn}[]