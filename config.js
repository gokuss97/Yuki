module.exports = {
    app: {
        px: '-',
        token: 'OTg4NDc3NjI0ODM5OTYyNzM0.Gfiqzw.enb4kMJAUAYFaQeI0ASdaCm9r7YrR0Y9jrRxPs',
        playing: 'by Shana ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
