module.exports = {
    name: 'math',
    description: 'this is a test for arguments',
    execute(msg, args, Discord) {
        if (!args.length) {
            return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
        }

        let result = args[0] 

        msg.channel.send(`Arguments: ${args}`);
    }
}