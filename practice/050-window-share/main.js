;(function () {
    'use strict';

window.search = {
    search_user: search_user,
    search_repo: search_repo,
}

    window.send = {
        get: get,
        post: post,
        send: send,
    }

    var el_form = document.getElementById('search-form');
    var el_input = document.getElementById('search-input');

    init();

    function init() {
        el_form.addEventListener('submit',function(e) {
            e.preventDefault();
            search.search_user(el_input.value);
            search.search_repo(el_input.value);
        });
    }

function search_user(kwd) {
    send.get('https://api.github.com/search/users?q=' + kwd,
    function(data) {
        console.log(data);
    });
}

function search_repo(kwd) {
    send.get('https://api.github.com/search/repositories?q=' + kwd,

    function(data) {
        console.log(data);
    });
}

function get(url,on_succeed) {
    send(url,'get',on_succeed);
}

function post(url,on_succeed) {
    send(url,'post',on_succeed);
}

function send(url,method,on_succeed) {
    var http = new XMLHttpRequest();
    http.open(method,url);
    http.send();

    http.addEventListener('load', function() {
        on_succeed(this.responseText);
    });
}

})()