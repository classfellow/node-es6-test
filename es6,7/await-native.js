'use strict';

var fs = require('fs');
var Promise = require("bluebird");
var Thread = require('node-threadobject');
var thread = new Thread();
thread.set_encode('base64');

var readFileAsync = Promise.promisify(fs.readFile, fs);
var sha2Async = Promise.promisify(thread.sha2, thread);

var start = async function(){
  try{
    var content = await readFileAsync('./stream');
    var bec = new Date().getTime();
    for(var i = 0; i <= 100000; ++i){
      var code = await sha2Async({data: content, type: 256});
    }
    console.log('总共耗时 ' + (new Date().getTime() - bec));
  }catch (err) {
    console.error(err);
  }
}

start();

//node --harmony await-native.js 总共耗时 4241
