import * as Discord from "discord.js-selfbot-v13";
import { Ownerid, Prefix } from "../envs";
import * as Logger from "../utils/logger";

/**
 * Replies with some info about the bot host
 * @param {Discord.Client} Client the client
 * @param {Discord.Message} Message the message that contains the command name
 * @param {string[]} args the command args
 * @param {any} options some options
 */
let kaisu = 0;
export async function run(Client: Discord.Client, message: Discord.Message, cmd) {
    if ( message.author.id === Ownerid || message.author.id === Client.user.id) {
        kaisu += 1;
        if (kaisu === 2 || 2 < kaisu) {
          while (kaisu !== 0) {
            kaisu -= 1;
          }
          console.log("cmdpamを停止しました");
        } else
            console.log("cmdpamを開始しました");
            if (message.content.slice(Prefix.length).trim().slice(cmd.length).trim().length !== 0) {
                while (kaisu === 1) {
                    const messagecontent = message.content.slice(Prefix.length).trim().slice(cmd.length).trim()
                    await message.channel.send(messagecontent);
                }
            }
    }
}
const info = {
    name: "cmdpam",
    description: "Spam command",
    category: "spam",
    args: "none"
}

export { info };