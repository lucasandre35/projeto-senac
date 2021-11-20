/*const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type':'text/plain'
    })
    response.write('Dale pirraia')
    response.end()
}).listen(1337)*/

//-------------------



const app = require(' ./src/app');
const port = 1337;

app.listen(port, () => {
    console.log(`App esta rodando na porta ${port}`)
});