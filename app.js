const http = require("http")
const routers = require("./routers")
let readStream


const server = http.createServer(function(req, res) {

    routers.router(req, res)

})


server.listen(3000, function() {
    console.log("Servidor rodando na porta 3000")
})

