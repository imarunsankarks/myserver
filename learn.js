const fs = require('fs');
const http = require("http");
// const path = require('path')

fs.writeFile('./text.txt', 'Hello Appu, Start quitting resurgent', (err) => {
    if (err) {
        console.log(err);
    }
})

fs.readFile('./text.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})

setTimeout(() => {
    if (fs.existsSync('text.txt')) {
        fs.unlink('text.txt', (err) => {
            if (err) {
                console.log(err);
            }
            console.log('deleted');
        })
    }
}, 3000)

// Create server
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch (req.url) {
        case '/':
            path += "index.html";
            res.statusCode = 200;
            break;
        case '/about':
            path += "about.html";
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    console.log(path);

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end()
        } else {
            res.end(data)
        }
    })

})
server.listen(8001, () => {
    console.log('Server is running on port 8001')
});
