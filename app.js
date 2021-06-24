//Constantes
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const user = require('./app/models/User')(app, mongoose) //Primero que el router
const reportes = require('./app/models/Reportes')(app, mongoose) //Primero que el router
const router = require('./routes/routes')

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use('/api', router);

//Connection Mongo
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect("mongodb://localhost/meteor", (err, res) => {
    if (err) {
        console.log('Error binnie: ', err);
    }
    app.listen(3000, () => {
        console.log("Node server running on http://localhost:3000");
    });
})
