const {
    getMenuItems
} = require('../database/queries/general');
const unique = require('array-unique');

exports.renderHomePage = (req,res) => {

    res.render('index', {
        title : 'Home', 
        ogPath : '/'
    });

}

exports.renderMenuPage = async (req,res) => {

    const menuItems = await getMenuItems();

    const menuCategories = menuItems.map(item => item.category);

    const uniqueMenuCategories = unique(menuCategories);

    const menuItemsByCategory = [];

    uniqueMenuCategories.forEach(item => {

        const categoryObj = {
            category : item,
        };

        categoryObj.menuItems = menuItems.filter(i => i.category == item);

        menuItemsByCategory.push(categoryObj);

    });

    res.render('menu', {
        title : 'Menu', 
        ogPath : '/menu',
        menuItemsByCategory
    });

}


exports.renderSpecialsOffers = (req,res) => {

    res.render('specialsOffers', {
        title : 'Specials &amp; Offers', 
        ogPath : '/specials-offers'
    });


}