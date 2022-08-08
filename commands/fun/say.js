module.exports = {
    name: 'say', 
    category: 'fun',
    usage: 'say',
    run: (clinet, message, args) => {
        if (message.deletable) message.delete();
        message.channel.send(args.join(' '));
    }
}