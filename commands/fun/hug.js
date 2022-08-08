const Math = require('mathjs');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'hug',
    category: 'fun',
    run:async(client, message, args) => {
        images = [
            "https://i.pinimg.com/originals/85/dc/ef/85dcef131af84b515106955e142df54e.gif",
            "https://i.pinimg.com/originals/ff/95/42/ff9542a0943d49666130b026f82401fb.gif",
            "https://acegif.com/wp-content/gif/anime-hug-14.gif",
            "https://acegif.com/wp-content/gif/anime-hug-49.gif",

        ]
        personHugged = message.mentions.users.first()
        if (personHugged) {
            const embed = new MessageEmbed()
            .setTitle(`Bạn đang ôm ${personHugged.username} :heart:`)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
            message.channel.send({ embeds: [embed] });
        }
        else {
            message.channel.send('Người này không có ở trong server')
        }


    }

}