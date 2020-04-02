const knex = require('./database');
const bcrypt = require('bcryptjs');

(async function(){
    const userName = 'sampleUser';
    const passWord = 'password';

    const hashedPassword = bcrypt.hashSync(passWord, 8);

    await knex('admin_users').insert({
        username : userName, 
        password : hashedPassword
    });

})();
