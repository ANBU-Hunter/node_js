const http = require('http');
const routing = require('./routing')
const express = require('express');
const app = express();
app.use((req,res)=>{
    res.json({
        massege:'hello'
    })
   
})
function server(){
    const server = http.createServer(app)
    server.listen('3000','127.0.0.1',()=>{
        console.log('Magnum Is Flying 🎈')
    })
}
server()


module.exports = server;
