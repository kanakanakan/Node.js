const http = require('http');
const PORT = 8001;
const html = require('fs').readFileSync("./index.html")
//標準でライブラリがすでに実装されている

//webサーバーを作ろう
const server = http.createServer((req, res) => {
    //ブラウザからアクセスが来たときの処理
    res.writeHead(200, { "Content-Type": "Text/html" });
    res.write(html);
    res.end();
});

server.listen(PORT, () => {
    console.log('server runnning!');
});