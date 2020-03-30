const knex = require('../');

module.exports = {
    async getLoginCredentials(username){
        try{

        const result = await knex.column({
            hashedPassword : 'password'
        }).from('admin_users')
        .where({username}).select();

        return result;

        }catch(e){
            console.log(e);
            throw new Error('unable to obtain data from database.');
        }

    }
}