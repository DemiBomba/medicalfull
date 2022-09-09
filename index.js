const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Demi:P5Sf3hgGhQgYHLv@cluster0.6aql49a.mongodb.net/?retryWrites=true&w=majority', {useUndified: true, useNewUrlParser: true});
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use('/', require('./route/index.route'))


const port = 3000 | process.env.PORT

app.listen(port)
































// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const path = require('path');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.set("view engine", "html");
// app.set("views",path.resolve(__dirname,"../medical/src/app"));

// app.get('/', (req, res) => {
//     res.send('Hello');
// })

// app.listen(3000, () => { console.log('listening on port 3000')});