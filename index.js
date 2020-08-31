const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();


router.get('/', function (req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);
app.use('/static', express.static('public'))
app.listen(process.env.port || 3000);

console.log("Servidor ligado");