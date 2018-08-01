var Express = require ('express');
var App = Express();
var bodyParser = require('body-parser');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

App.use('/',function(req,res){
    res.send(['tony','sita','pita']);
})

App.listen(3000, () => {
    console.log("Server running on port 3000");
   });                