const path = require('path');
require('dotenv').config({path : path.join(__dirname, '..', '.env')});

module.exports = {
    env : process.env.NODE_ENV || 'development', 
    maintenanceMode : {
        hardMode : process.env.HARD_MAINTENANCE_MODE || 'off',
        softMode : process.env.SOFT_MAINTENANCE_MODE || 'off'
    }, 
    port : process.env.PORT || 8000, 
    sessionSecret : process.env.SESSION_SECRET || 'secret'
}
