var exec = require('child_process').execSync;
var path = require('path');

// (cljs.closure/build "src" {:output-to :print})
// java -cp cljs.jar:src -Dcljs=FOO clojure.main build.clj
// java -cp ext/cljs.jar:src -Dcljs=foo clojure.main src/cljs/build.clj

var command = function(filename) {
  cljsSrc = path.dirname(filename);
  javaSrc = path.resolve(__dirname, 'cljs');
  javaExt = path.resolve(path.dirname(__dirname), 'ext', 'cljs.jar');
  files   = 'clojure.main ' + path.resolve(javaSrc, 'build.clj');
  command = ['java -cp ', javaExt, ':', cljsSrc, ' -Dcljs=', cljsSrc, ' ', files];
  return command.join('');
}

exports.compile = function(source, filename) {
  var cmd = command(filename);

  console.log(cmd);
  //
  // // console.log(exec("echo 'hey there'").toString('utf8'));
  //
  // cljsJS = exec(cmd);
  // return "console.log('" + cljsJS + "');"
  return exec(cmd).toString('utf8');
}

require('node-hook').hook('.cljs', exports.compile);
