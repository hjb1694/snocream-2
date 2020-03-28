// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/db/dev.sqlite3'
    }, 
    migrations : {
      directory : './database/migrations'
    }, 
    seeds : {
      directory : './database/seeds'
    }
  }, 
  production: {
    client: 'sqlite3',
    connection: {
      filename: './database/db/prod.sqlite3'
    }, 
    migrations : {
      directory : './database/migrations'
    }, 
    seeds : {
      directory : './database/seeds'
    }
  }

};
