//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");



const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(request,response){
  response.sendFile(__dirname + "/bmiCalculator.html");
})


app.post("/", function(request, response){
var num1 =Number(request.body.weight);
var num2 =Number(request.body.height);
var result = num1/(num2*num2);

  response.send("Your bmi is  "+result);
})


app.listen(3000,function(){
  console.log("server has started on port 3000...");
});
