var fs = require('fs');

/*
// readFileSync : 동기
console.log('A');
var reuslt = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(reuslt);
console.log('C');
*/

// readFile : 비동기
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);    
});
console.log('C');