const Discord = require("discord.js");

module.exports = {
    name: 'clear', 
    category: 'Manager',
    aliases: ['cl'],
    usage: '-clear [Chỉ hoạt động với role Manager trở lênh!]', 
    run: (client, message, args) => {
    const amount = parseInt(args[0])
    if(!message.member.permissions.has("868329213877420053")) return message.channel.send("Cậu không có sự cho phép của Gin.");
    if (!amount) return message.channel.send ('Xin hãy nhập số thoại Onii-chan muốn xóa');
    if (amount > 100 || amount < 1) return message.channel.send('Xin hãy nhập số từ 1 đến 100 Baka!');

    message.channel.bulkDelete(amount).catch(err => {
        message.channel.send ('Discord không cho phép em xóa tin nhắn hơn 14 ngày')
    })


}

}

