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


    }, 
    async getMenuItems(){

        try{

            const result = await knex.column({
                id : 'menu_items.id', 
                category : 'menu_categories.category', 
                name : 'menu_items.name', 
                description : 'menu_items.description', 
                image : 'menu_items.image'
            })
            .from('menu_items')
            .join('menu_categories', 'menu_items.category', 'menu_categories.id')
            .select();

            return result;

        }catch(e){
            console.log(e);
            throw new Error('unable to fetch data from database.');
        }

    }
}