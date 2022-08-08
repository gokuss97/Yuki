const { MessageEmbed, MessageAttachment } = require('discord.js');


module.exports = {
    name: 'embed', 
    category: 'Manager',
    run: (client, message, args) => {
       
        if(!message.member.permissions.has("868329213877420053")) return message.channel.send("Bạn không có quyền để sử dụng lệnh này");
        const embed = new MessageEmbed()
    
            .setColor(0x0099FF)
            .setTitle('Shoujo Terrarium - Bắt cóc loli')
            .setURL('https://hentaivn.fun/31429-doc-truyen-shoujo-terrarium.html')
            .setAuthor({ name: 'Hentai nhà làm'})
            .setDescription('Tag: Lolicon, BBM, rape,...')
            .setThumbnail('https://img.upanh.tv/2022/08/07/01.jpg')
            .addFields(
                { name: 'Tác giả', value: 'Horonamin' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Tras', value: 'CyaoCat', inline: true },
                { name: 'Edit', value: 'Gokuss97', inline: true },
            )
            .setImage('https://img.upanh.tv/2022/08/07/01.jpg')
            .setTimestamp()
            message.channel.send({ embeds: [embed] });

}}