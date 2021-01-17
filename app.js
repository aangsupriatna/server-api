const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

app.disable('x-powered-by');

//middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());
const routes = require('./routes');

//routes
app.use('/v1', routes)

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`);
});