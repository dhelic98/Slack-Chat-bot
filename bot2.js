var slack = require('slack');
var express = require('express')();


var token = 'xoxb-264299619174-PN92dGLk4gDFOuATsdc0mEmo';

slack.chat.postMessage({
    token: token,
    channel: 'meeting',
    text: 'Your time zone is Europe/Belgrade'
});

var bot = new slack({
    token: token

});

/*
slack.channels.create({
    token: 'xoxp-262549251568-263344348885-262910942913-c435dbabbf049c81a668d6826fcda4ab',
    name: 'Meeting'
});
*/