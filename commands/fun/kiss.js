const Math = require('mathjs');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'kiss',
    category: 'fun',
    run:async(client, message, args) => {
        images = [
            'https://media2.giphy.com/media/G3va31oEEnIkM/giphy.gif',
            'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657',
            'https://media.tenor.com/images/fbb2b4d5c673ffcf8ec35e4652084c2a/tenor.gif',
            'https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif',
            'https://media.giphy.com/media/oHZPerDaubltu/giphy.gif',
            'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
            'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
            'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
            'https://media0.giphy.com/media/KH1CTZtw1iP3W/source.gif'

        ]
        personHugged = message.mentions.users.first()
        if (personHugged) {
            const embed = new MessageEmbed()
            .setTitle(`Bạn đang hôn ${personHugged.username} :heart:`)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
            message.channel.send({ embeds: [embed] });
        }
        else {
            message.channel.send('Người này không có ở trong server')
        }


    }

}