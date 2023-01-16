const express = require('express');
const bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req, res)=>{
    //console.log(__dirname);
    res.sendFile(__dirname + "/index2.html");
});

app.post("/",(req, res)=> {
    console.log(req.body.n1);
    console.log(req.body.n2);

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = (num1 / Math.pow((num2 / 100), 2));

    //res.send("ผลลัพธ์จากการคำนวณคือ " + result.toFixed(2));

    if(result>30.0){
        res.send("ค่า BMI : "+result.toFixed(2)+" อ้วนมาก")
    }else if (result >25.0 && result < 29.9){
        res.send("ค่า BMI : "+result.toFixed(2)+" อ้วน")
    }else if (result >23.0 && result < 24.9){
        res.send("ค่า BMI : "+result.toFixed(2)+" น้ำหนักเกินมาตรฐาน")
    }else if (result >18.5 && result < 22.9){
        res.send("ค่า BMI : "+result.toFixed(2)+" น้ำหนักสมส่วน	")
    }else if (result < 18.5){
        res.send("ค่า BMI : "+result.toFixed(2)+" น้ำหนักต่ำกว่าเกณฑ์")
    }

});

app.listen(3000, () => {
    console.log("เซอเวอร์พร้อมใช้งาน ณ พอร์ท 3000");
});