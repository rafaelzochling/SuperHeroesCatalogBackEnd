const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

require('./api/users/route-manager')(app);
require('./api/heroes/route-manager')(app);
require('./api/powers/route-manager')(app);
require('./api/events/route-manager')(app);

app.listen(3000);
