var fs = require('fs');
var styleme = require('styleme');
styleme.extend();

console.log = function(/**/) {
for (var i in arguments) {
  process.stdout.write(arguments[i] + "\n")
}
  
}

console.debug = function(/**/) {


}

function log(txt,head,type) {
  
  
}

