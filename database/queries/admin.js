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

    }, 
    async getSingleMenuItem(itemId){

        try{

            const result = await knex.column({
                id : 'menu_items.id', 
                name : 'menu_items.name',
                catId : 'menu_items.category', 
                catName : 'menu_categories.category', 
                description : 'menu_items.description',
                image : 'menu_items.image'
            })
            .from('menu_items')
            .join('menu_categories','menu_items.category','menu_categories.id')
            .where({'menu_items.id' : itemId})
            .select();

            return result;


        }catch(e){
            console.log(e);
            throw new Error('unable to fetch data from database.');
        }

    }, 
    async insertMenuItem({name, category, description, image}){

        try{

            await knex('menu_items').insert({
                name, 
                category, 
                description, 
                image
            });


        }catch(e){
            console.log(e);
            throw new Error('unable to insert data into database.');
        }


    }, 
    async deleteMenuItem(itemId){

        try{

            await knex('menu_items').where({id : itemId}).del();

        }catch(e){
            console.log(e);
            throw new Error('unable to delete item from database.');
        }
    }, 
    async getSpecialsOffers(){

        try{

            const result = await knex.column({
                id : 'id', 
                offerName : 'offer_name', 
                offerDescription : 'offer_description', 
                offerImage : 'offer_image', 
                offerExpiration : 'expiration_date'
            }).from('specials_offers').select();

            return result;

        }catch(e){
            console.log(e);
            throw new Error('Unable to fetch data from database.');
        }

    },
    async insertNewOffer({offerName, offerDescription, offerImage, expireDate}){

        try{

            await knex('specials_offers').insert({
                offer_name : offerName, 
                offer_description : offerDescription, 
                offer_image : offerImage, 
                expiration_date : expireDate
            });

        }catch(e){
            console.log(e);
            throw new Error('Unable to insert data into database.');
        }



    }, 
    async deleteOffer(id){

        try{

            await knex('specials_offers').where({id}).del();


        }catch(e){
            console.log(e);
            throw new Error('Server unable to delete item from database.');

        }


    }
}