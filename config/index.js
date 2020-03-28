require('dotenv').config();

module.exports = {
    env : process.env.NODE_ENV || 'development', 
    maintenance : process.env.MAINTENANCE_MODE || 'off'
}
