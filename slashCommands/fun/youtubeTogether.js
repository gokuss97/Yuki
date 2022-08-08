const { CommandInteraction, Client } = require("discord.js");
const { discordTogether } = require("../../Client/DiscordTogether");

module.exports = {
    name:"together",
    description: "Coi youtube với mọi người!",
    options: [
        {
            name: "channel",
            description: "kênh bạn muốn hoạt động",
            type:"CHANNEL",

        },
    ],
    /**
     * 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async(client, interaction, args) => {
        const [channelID] = args;
        const channel = interaction.guild.channels.cache.get(channelID);

        console.log({ channel });
        if(channel.type !=='GUILD_VOICE')
          return interaction.followUp
          ({ content: 'Hãy chọn một kênh bạn muốn xem'});

        discordTogether
        .createTogetherCode(channelID, "youtube")
        .then((x) => interaction.followUp(x.code));



    },
     

}