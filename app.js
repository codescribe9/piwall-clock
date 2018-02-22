const express = require('express')
const path = require('path')

let app = express();
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3001, () => console.log('Example app listening on port 3000!'))