const path = require('path');
require('dotenv').config({path : path.join(__dirname, '..', '.env')});

module.exports = {
    env : process.env.NODE_ENV || 'development', 
    maintenanceMode : process.env.MAINTENANCE_MODE || 'off', 
    port : process.env.PORT || 8000, 
    sessionSecret : process.env.SESSION_SECRET || 'secret'
}
