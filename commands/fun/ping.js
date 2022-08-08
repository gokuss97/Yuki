module.exports = {
    name: 'ping', 
    category: 'fun',
    aliases: ['p'],
    usage: 'ping',
    run: (clinet, message, args) => {
        message.reply(`💌 Pong! \`${clinet.ws.ping}ms\``);
    }
}