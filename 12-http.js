const http = require('http')

/*
const server = http.createServer((req,res)=>{
    res.write('Welcome, this is our homepage')
    res.end()
})
*/
const server = http.createServer((req,res)=>
{
    if(req.url == '/'){
        res.end('Home page')
    }
    if(req.url == '/about'){
        res.end('About section')
    }
    res.end(`
        <h1> OOPS! </h1>
        <p> This is a wrong page </p>
        <a href="/"> back home</a>
    `)
})
server.listen(3000)