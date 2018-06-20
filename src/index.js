const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// app.get('/products/:id', function (req, res, next) {
//     res.json({ msg: 'This is CORS-enabled for all origins!' })
// });

require('./api/users/route-manager')(app);

app.listen(3000);
