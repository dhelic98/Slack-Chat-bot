var SlackBot = require('slackbots');
var bot = new SlackBot({
    token: 'xoxb-264299619174-NAokKOU4uPU6ABbjH8C83rXc',
    name: 'BSec'
});
exports.printEvents = function (events) {
    bot.postMessageToChannel('meeting', events);
}
bot.on('start', function () {
    bot.postMessageToChannel('meeting');
    var users = [];
    bot.getUsers('general')
        .then(function (response) {
            users = response.members;
        });
    this.on('message', function (data) {
       // console.log(data);

    });



});