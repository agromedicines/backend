const app = require('express')()

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const routes = require('./routes/index')

app.use('/', routes.root)
app.use('/categories', routes.category)
app.use('/problems', routes.problem)
app.use('/cultures', routes.culture)
app.use('/pc', routes.pc)
app.use('/medicines', routes.medicine)
app.use('/treatments', routes.treatment)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, HEAD, OPTIONS"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

module.exports = app