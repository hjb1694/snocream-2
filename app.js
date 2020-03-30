const path = require('path');
const fs = require('fs');
const config = require('./config');
const express = require('express');
const fileUpload = require('express-fileupload');
const helmet = require('helmet');
const session = require('express-session');
const app = express();
const morgan = require('morgan');

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

const sessConf = {
    secret : config.sessionSecret,
    cookie : {
        maxAge : 1000 * 60 * 60, // 1 hour
        sameSite : true, 
    }, 
    resave : false, 
    saveUninitialized : false
}

if(config.env.toLowerCase() === 'production'){
    app.set('trust proxy', 1);
    sess.cookie.secure = true;
}

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(helmet());
app.use(morgan('combined', {stream : accessLogStream}));
app.use(session(sessConf));
app.use(express.json());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));

// If changes are made to maintenance mode, you must restart the running app!
app.use((req,res,next) => {
    if(config.maintenanceMode.hardMode.toLowerCase() === 'on')
        return res.status(200).render('maintenance');
    next();
});

// Soft maintenance mode
app.use((req,res,next) => {
    let mode;
    if(config.maintenanceMode.softMode.toLowerCase() === 'on')
        mode = true;
    else mode = false;
    app.locals.softMaintenanceMode = mode;
    next();
});

app.use('/admin', require('./routes/admin'));
app.use('/', require('./routes/general'));

app.use('*', (req,res) => res.status(404).redirect('/'));


app.listen(config.port, () => console.log(`Listening on port ${config.port}`));