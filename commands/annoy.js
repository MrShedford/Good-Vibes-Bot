module.exports = {
    name: 'annoy',
    description: `Designed to annoy someone when they say they're coming back but don't`,
    execute(msg, args, Discord) {
        console.log('hello')
        const taggedUser = msg.mentions.users.first();
        console.log(taggedUser);
        msg.channel.send(` <@!${taggedUser.id}>, you said you'd be back in a minute, but the boys are sick of waiting`);
        msg.channel.send(`Your minute of suffering begins now`);

        const pingLoop = setInterval(() => {
            msg.channel.send(`<@!${taggedUser.id}> you lied to us.`)
        }, 5000);

        const stopLoop = () => {
            clearInterval(pingLoop);
        }

        setTimeout(stopLoop, 180000); // does this for 3 minutes

    }
}