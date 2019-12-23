console.log(process.argv);
const http = require('http');
const optionsGet = {
    hostname: 'localhost',
    port: 8080,
    path: '/',
    method: 'GET'
}
// put rquest 
const optionsPut = {
    hostname: 'localhost',
    port: 8080,
    path: '/',
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    }
}
if (process.argv[2] == "GET") {
    const reqGet = http.request(optionsGet, res => {
        console.log(`statusCode: ${res.statusCode}`)

        res.on('data', d => {
            process.stdout.write(d)
        
        })
     })

     reqGet.on('error', error => {
         console.error(error)
     })

     reqGet.end()

 } else if (process.argv[2] == "PUT") {
    const reqPut = http.request(optionsPut, res => {
        console.log(`statusCode: ${res.statusCode}`)

        res.on('data', d => {
            process.stdout.write(d)
        })
    })
    reqPut.on('error', error => {
        console.error(error)
    })
    //reqPut.write(data)
    reqPut.end()
}else{
    console.log("Unknown Parameter");
}
