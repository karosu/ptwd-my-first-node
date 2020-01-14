// console.log("Is this my first node project? 😁")

const myChalk = require('chalk');
const myHttp = require('http');
require('dotenv').config();














console.log(myChalk.bgYellowBright.bold("Hello world!"));

const myServer = myHttp.createServer((request, response) => {
    console.log(`Requested URL: ${request.url}`);
    if(request.url === '/') {
     response.write('you requested localhost my friend!!');
     response.end();

    }})


// myServer.listen(3000, () => console.log('I am running on port 3000!'));
myServer.listen(process.env.PORT, () => console.log('I am running on port 3000!')); 