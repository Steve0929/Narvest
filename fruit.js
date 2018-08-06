var express = require("express");
var app = express();
var server = require ('http').createServer(app);
var request = require('request');
var cheer = require('cheerio');
var fs =require('fs');

var target = 'http://www.corabastos.com.co/sitio/historicoApp2/reportes/index.php';
var arr= [];
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // :p 
app.use(express.static(__dirname + '/public'));

server.listen(process.env.PORT || 3000);
console.log('SERVIDOR FUNCIONANDO');

app.get('/', function(req, res){
            res .sendFile(__dirname + '/fruit.html');

          });

request(target, function(err, response, body) {
        if(!err){
          var $ = cheer.load(body);
          var todo = $('.table-responsive');
          var date = $('.col-md-6');
          date = date .children().eq(2).children().eq(1);
          date = date.text();
          date = date.replace(/[\n\t\r]/g,'');
          arr[0] = date;
          console.log("date: "+date);

          var coco = todo.children().eq(1).children().eq(1).children().eq(5);
          //coco = coco.text();

          var guayaba= todo.children().eq(1).children().eq(1).children().eq(13);
          //guayaba =  guayaba.text();

          var mango= todo.children().eq(1).children().eq(1).children().eq(22);
          //mango =  mango.text();

          var banano= todo.children().eq(1).children().eq(1).children().eq(3);
          //banano =  banano.text();

          var manzana= todo.children().eq(1).children().eq(1).children().eq(23);
          //manzana=  manzana.text();

          var price_manzana = manzana.children().eq(6);
          price_manzana = price_manzana.text()

          //console.log(coco);
          //console.log(guayaba);
          //console.log(manzana);
          //console.log(mango);
          //console.log(banano);
                    
          console.log(price_manzana);
          console.log("En el día de hoy una unidad de " +manzana.children().eq(0).text()+" Cuesta "+manzana.children().eq(6).text());
          console.log("En el día de hoy una unidad de " +coco.children().eq(0).text()+" Cuesta "+coco.children().eq(6).text());
          console.log("En el día de hoy una unidad de " +banano.children().eq(0).text()+" Cuesta "+banano.children().eq(6).text());
          console.log("En el día de hoy una unidad de " +mango.children().eq(0).text()+" Cuesta "+mango.children().eq(6).text());

          arr[1] = "En el día de hoy un "+ manzana.children().eq(1).text()+" de " +manzana.children().eq(0).text()+" Cuesta "+manzana.children().eq(6).text();
          arr[2] = "En el día de hoy un "+ coco.children().eq(3).text()+" de " +coco.children().eq(0).text()+" Cuesta "+coco.children().eq(6).text();
          arr[3] = "En el día de hoy un "+ banano.children().eq(3).text()+" de " +banano.children().eq(0).text()+" Cuesta "+banano.children().eq(6).text();
          arr[4] = "En el día de hoy un "+ mango.children().eq(3).text()+" de " +mango.children().eq(0).text()+" Cuesta "+mango.children().eq(6).text();
        }

app.get("/getInfo", function(req, res) {
  var dataStr = JSON.stringify(arr);
  dataStr = dataStr.replace([],'');
  console.log(dataStr)
        res.send(arr)
            })
        app.listen(8001)
});
