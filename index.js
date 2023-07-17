import app from "./app/app.js";

/*
import http from 'http';

const hostname = '0.0.0.0';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Zeet Node');
});


app.listen(app.get("port", hostname), () => {
    console.log(`estas en puerto: http://${hostname}:${app.get("port")}`);
})
*/

app.listen(app.get("port"), () => {
    console.log(`estas en puerto: http://localhost:${app.get("port")}`);
})