const fs = require('fs');

//fs.writeFileSync('notes.txt', 'My name is Damon.');

fs.appendFileSync('notes.txt', 'This message was appended on!')