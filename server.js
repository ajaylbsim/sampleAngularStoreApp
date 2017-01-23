var express = require('express')
var bodyParser = require('body-parser');
var app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static('./static'))

var cart = [
		{
			name:"Brinjal",
			price:"$34",
			id:1
		},
		{
			name:"Potato",
			price:"$98",
			id:2
		},
		{
			name:"Cauliflawer",
			price:"$434",
			id:3
		},
		{
			name:"Cauliflawer",
			price:"$434",
			id:4
		}
		]


app.get('/', function (req, res) {
  res.end("/index.html");
})

app.get('/item/cart', function (req, res) {
 res.send(cart);
})

app.get('/item/list', function (req, res) {
 res.send(cart);
})


app.post('/item', function (req, res) {

console.log("received item ",req.body);
  res.send(true);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
