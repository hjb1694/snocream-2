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

    }, 
    async getMenuCats(){

        try{

            const result = await knex.select('*').from('menu_categories');

            return result;

        }catch(e){
            console.log(e);
            throw new Error('unable to obtain data from database.');
        }


    }, 
    async deleteMenuCat(catId){

        try{

            await knex('menu_categories').where({id : catId}).del();    

        }catch(e){
            console.log(e);
            throw new Error('unable to delete record from database.');
        }

    }, 
    async addMenuCategory(newCategory){

        try{

            await knex('menu_categories').insert({
                category : newCategory
            });


        }catch(e){
            console.log(e);
            throw new Error('unable to insert new category.');
        }


    }, 
    async editMenuCategory(catId, categoryName){

        try{

            await knex('menu_categories').update({
                category : categoryName
            }).where({id : catId});

        }catch(e){
            console.log(e);
            throw new Error('unable to update category.');
        }


    }
}