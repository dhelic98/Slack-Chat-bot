var slack = require('slack');
var bot1 = require('./bot');
var express = require('express')();
var calendar = require('./google.calendar');

var token = 'xoxb-264299619174-NAokKOU4uPU6ABbjH8C83rXc';
var events = calendar.events;

bot1.printEvents(events);

var bot = new slack({
    token: token

});

slack.channels.create({
    token: 'xoxp-262549251568-263344348885-262910942913-c435dbabbf049c81a668d6826fcda4ab',
    name: 'Meeting'
});

express.get('https://www.googleapis.com/calendar/v3/calendars/dzenan_helic%40hotmail.com?key=AIzaSyA8hvFnpcJo0PJ8pgdrq05Cu7es92fiB8o', function (req, res) {

    console.log(req, '\n', res);
});