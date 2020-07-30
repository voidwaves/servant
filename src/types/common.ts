import { MessageEmbed, Message } from "discord.js"

export type ResolverResult = {
    text: string, 
    options?: MessageEmbed
    help?: {
        helpText: string,
        helpOptions?: MessageEmbed
    }
}
export type ResolverFn = (message: Message, args: string[]) => ResolverResult
export type ResolverList = {command: string, description: string, handler: ResolverFn}[]