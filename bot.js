var SlackBot = require('slackbots');
var bot = new SlackBot({
    token: 'xoxb-264299619174-PN92dGLk4gDFOuATsdc0mEmo',
    name: 'BSec'
});


var printEvents = function (events) {
    bot.postMessageToChannel('meeting', events);
};
var printTimeZone = function (timeZone) {
    bot.postMessageToChannel('meeting', 'Your time zone is: ' + timeZone);
    console.log(timeZone);
};


bot.on('start', function () {
    bot.postMessageToChannel('meeting', 'Hello');
    var users = [];
    printTimeZone('sad');
    bot.getUsers('general')
        .then(function (response) {
            users = response.members;
        });
    this.on('message', function (data) {

    });



});
module.exports = {
    printEvents: printEvents,
    printTimeZone: printTimeZone
};