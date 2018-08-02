var Express = require ('express');
var App = Express();
var bodyParser = require('body-parser');
var User = require('./models/user')

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

App.use('/index.html',function(req,res,next){
    res.send(['tony','sita','pita']);
    next();
})

App.listen(3000, () => {
    console.log("Server running on port 3000");
   });                