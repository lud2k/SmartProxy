
const bouncy = require('bouncy')

const server = bouncy((req, res, bounce) => {
    const host = req.headers.host
    if (host) {
        if (host.indexOf('ludovic.cabre.me') != -1) {
            return bounce(3000)
        }
    }

    res.statusCode = 404
    res.end('Page not found')
});

server.listen(80);
