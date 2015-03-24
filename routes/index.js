var express = require('express');
var router = express.Router();
var io = require("socket.io").listen(8081);

// 新谷一時的に削除します(3月24日 22:47)
/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'kubothello',
  database : 'kubothello'
});

connection.connect();

connection.query('SELECT * FROM sboad', function(err, rows, fields) {
  if (err) throw err;
  console.log('rows: '+JSON.stringify(rows));
  console.log('fields: '+JSON.stringify(fields));
});

connection.end();
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/game', function(req, res, next) {
  res.render('game', { title: 'Express' });
});

io.sockets.on("connection", function (socket) {

  console.log("connect!"); // 接続成功

  socket.on("test1", function(){ // 単独 - クライアントから受ける
    socket.emit("test1", "a");  // クライアントに返す
  });
  
  socket.on("test2", function(){ // 全体 - クライアントから受ける
	socket.broadcast.emit("test2", JSON.stringify(rows));  // クライアントに返す	
  });

});

module.exports = router;
