
const discord = require('discord.js')
const math = require('mathjs')

module.exports = {
name: 'math',
category: 'fun',
run:async(client, message, args) => {
    var question = args.join(' ') // =calc 1 + 1
    if(!question) return message.channel.send('Vui lòng nhập số để tín')

    let result;
    try {
        result = math.evaluate(question);


    } catch (e) {
        return message.channel.send('Đưa số vô lý vkl') // =calc blblal so it will send this
    }


    return message.channel.send(`${question} = ${result}`)
}
};