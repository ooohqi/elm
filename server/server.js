var express = require('express')
var app = express();
var allowCrossDomain = function (req, res, next) {//设置response头部的中间件
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS")
    next();
};
app.use(allowCrossDomain);

// recommed返回的json
app.get("/server/data/data", function (request, response) {
    var data = require('./data/data.json');//要获取的json文件
    response.send(data);
})
// index返回的json
app.get("/server/data/index", function (request, response) {
    var data = require('./data/index.json');//要获取的json文件
    response.send(data);
})
// shopList返回的json
app.get("/server/data/shopList", function (request, response) {
    var data = require('./data/shopList.json');//要获取的json文件
    response.send(data);
})

app.listen('3000', function () {
    console.log('listening on 3000')
});