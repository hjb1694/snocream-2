const path = require('path');
const config = require('./config');
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));

// If changes are made to maintenance mode, you must restart the running app!
app.use((req,res,next) => {
    if(config.maintenanceMode.toLowerCase() === 'on')
        return res.status(200).render('maintenance');
    next();
});

app.use('/', require('./routes/general'));

app.use('*', (req,res) => res.status(404).redirect('/'));


app.listen(config.port, () => console.log(`Listening on port ${config.port}`));