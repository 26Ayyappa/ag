const http = require('http')
const url = require('url')
const homeApi=function (request,response)=>{
     if(request.method=='Get'){
         response.write("i m from get")
         response.end()
     }
     if(request.method=='post'){
        response.write("i m from post")
        response.end()
    }
}
const server=http.createServer(homeApi)
server.listen(1431)
