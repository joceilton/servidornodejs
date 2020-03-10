const fs = require("fs")
const responses = []
let url

exports.router = function(req, res) {

    url = req.url
    
    responses['/'] = fs.ReadStream(__dirname + "/src/index.html")
    responses['/contato'] = fs.ReadStream(__dirname + "/src/contato.html")
    responses['/404'] = fs.ReadStream(__dirname + "/src/404.html")

    readStream = responses[url] || responses['/404']

    readStream.on('open', function () {
        readStream.pipe(res)
    })

}