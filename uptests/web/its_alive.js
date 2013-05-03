#!/usr/bin/env node

var http = require('http');

callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

// If this request fails, the script's exit status will be non-zero
http.request({host: process.argv[2], port: process.argv[3], path: '/'}, callback).end();
