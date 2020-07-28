
import * as Discord from 'discord.js'

const notFound = (message: Discord.Message) => {
    return `Hi ${message.author.username}, the command you're looking for doesn't exist. Try *!help* instead.`
}

export default notFound