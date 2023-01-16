const express = require('express');
const bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req, res)=>{
    //console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});

app.post("/",(req, res)=> {
    console.log(req.body.n1);
    console.log(req.body.n2);

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = (num1 + num2 );

    res.send("ผลลัพธ์จากการคำนวณคือ " + result);
});

app.listen(3000, () => {
    console.log("เซอเวอร์พร้อมใช้งาน ณ พอร์ท 3000");
});