'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fs = require('fs');
var Promise = require("bluebird");
var Thread = require('node-threadobject');
var thread = new Thread();
thread.set_encode('base64');

var readFileAsync = Promise.promisify(fs.readFile, fs);
var sha2Async = Promise.promisify(thread.sha2, thread);

var start = (() => {
  var _ref = _asyncToGenerator(function* () {
    try {
      var content = yield readFileAsync('./stream');
      var bec = new Date().getTime();
      for (var i = 0; i <= 100000; ++i) {
        var code = yield sha2Async({ data: content, type: 256 });
      }
      console.log('总共耗时 ' + (new Date().getTime() - bec));
    } catch (err) {
      console.error(err);
    }
  });

  return function start() {
    return _ref.apply(this, arguments);
  };
})();

start();

//总共耗时 2913ms