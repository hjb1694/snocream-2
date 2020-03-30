const knex = require('../');

module.exports = {
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