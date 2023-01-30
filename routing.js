const fs = require('fs');
const url = require('url');

function handelrequest(filepath,res){
    fs.readFile(filepath,null,(error,data)=>{

        if(error){
            res.end('<center><h1>Page Not Found</h1></center>')
        }else{
            res.end(data)
        }
    })
}
function routing(req,res){
    const path = url.parse(req.url)
    switch(path.pathname){
    
        case '/':
            handelrequest('index.html',res);
            break;
        case '/login':
            handelrequest('login.html',res);
            break;
        case '/sigin':
            handelrequest('sigin.html',res);
            break;
        default:
            res.end('Not Found')
            break;
        
    }
    
        
}

module.exports = routing;
