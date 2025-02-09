const express = require('express');
const path = require('path');
const { fileURLToPath } = require('url');

const app = express();

app.listen(3005, () => {
    console.log('Server running on port 3005');
});

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res, next) => {
    const _retfile = path.join(__dirname, 'index.html');

    res.sendFile(_retfile);
});