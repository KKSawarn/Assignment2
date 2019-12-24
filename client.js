
const http = require('http');
const optionsGet = {
    hostname: 'localhost',
    port: 8080,
    path: '/',
    method: 'GET'
}
 
const optionsPut = {
    hostname: 'localhost',
    port: 8080,
    path: '/',
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    }
    
}
    var statusCode= null, reqGet =null, reqPut =null;
    if ((process.argv[2] == "GET") || (process.argv[2] == "get")) {
        try{
            reqGet = http.request(optionsGet, res => {
                console.log(`statusCode: ${res.statusCode}`);
                res.on('data', d => {
                    process.stdout.write(d)
                })
            })
            reqGet.end()
        }catch(err){
            reqGet.on('error', error => {
                console.error(error)
            })
            reqGet.end()
        }
        
    }else if ((process.argv[2] == "PUT") || (process.argv[2] == "put")) {
        try{
            reqPut = http.request(optionsPut, res => {
                console.log(`statusCode: ${res.statusCode}`);
                res.on('data', d => {
                    process.stdout.write(d)
                })
            })
            
            reqPut.end()
        }
        catch(err){
            reqPut.on('error', error => {
                console.error(error);    
            })
            reqPut.end()
        }
    
    
    }else{
        statusCode = 404;
        console.log(statusCode,' Request not found');
    }
