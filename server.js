var express=require('express');
var app=express();
app.use(express.static('public'))
app.get("/",(req, res)=>{res.send("Welcome to Web Page");});
app.get("/product",(req, res)=>{var p={ "id":45, "title":"Gerbera","description":"Wedding Flower", "unitprice":14, "quatity":7000 };
                                       res.send(p);
});
app.listen(9000);
console.log("App is listening on port 9000");