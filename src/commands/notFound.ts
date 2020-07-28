
import * as Discord from 'discord.js'

export default (message: Discord.Message) => {
    return `Hi ${message.author.username}, the command you're looking for doesn't exist. Try *!help* instead.`
}