const {
    getLoginCredentials, 
    getMenuCats, 
    deleteMenuCat, 
    addMenuCategory, 
    editMenuCategory, 
    getMenuItems, 
    getSingleMenuItem
} = require('../database/queries/admin');
const bcrypt = require('bcryptjs');
const unique = require('array-unique');

exports.loginPage = (req,res) => {

    res.render('admin/login');

}

exports.loginProcess = async (req,res) => {

    try{

    const {username, password} = req.body;

    const credentials = await getLoginCredentials(username);


    if(!credentials.length)
        return res.status(403).json({
            status : 'error', 
            data : {
                msg : 'The login credentials you provided are invalid.'
            }
        });

    const matched = await bcrypt.compare(password, credentials[0].hashedPassword);

    if(!matched)
        return res.status(403).json({
            status : 'error', 
            data : {
                msg : 'The login credentials you provided are invalid.'
            }
        });

    req.session.isLoggedIn = true;

    res.json({
        status : 'success', 
        data : {
            msg : 'Login successful'
        }
    });

    }catch(e){
        console.log(e.message);
        res.status(500).json({
            status : 'error', 
            data : {
                msg : 'A server error has occurred'
            }
        });
    }

}

exports.mainMenu = (req,res) => {

    res.render('admin/mainMenu');

}

exports.menuCats = async (req,res) => {

    const categories = await getMenuCats();

    res.render('admin/menuCategories.ejs', {categories});

}

exports.deleteMenuCat = async (req,res) => {

    try{

        const {itemId} = req.body;

        await deleteMenuCat(itemId);

        res.json({
            status : 'success', 
            data : {
                msg : 'successfully deleted menu category!'
            }
        });


    }catch(e){
        console.log(e);
        res.status(500).json({
            status : 'error', 
            data : {
                msg : 'A server error occurred.'
            }
        });
    }


}


exports.addMenuCategory = async (req,res) => {

    try{

        const {newCategory} = req.body;

        await addMenuCategory(newCategory);

        res.status(201).json({
            status : 'success', 
            data : {
                msg : 'new category created!'
            }
        });

    }catch(e){
        console.log(e);
        res.status(500).json({
            status : 'error', 
            data : {
                msg : 'A server error occurred.'
            }
        });
    }

}

exports.editMenuCat = async (req,res) => {

    try{

        const {catId, category} = req.body;

        await editMenuCategory(catId, category);

        res.json({
            status : 'success', 
            data : {
                msg : 'successfully updated'
            }
        });


    }catch(e){
        console.log(e);
        res.status(500).json({
            status : 'error', 
            data : {
                msg : 'A server error occurred.'
            }
        });
    }

}


exports.menuItems = async (req,res) => {

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

    res.render('admin/menuItems.ejs', {menuItemsByCategory});

}

exports.singleMenuItem = async (req,res) => {

    const itemId = req.params.id;

    const menuItem = await getSingleMenuItem(itemId);

    if(!menuItem.length)
        return res.redirect('/admin/menu-items');

    res.render('admin/singleMenuItem', {menuItem : menuItem[0]});

}

exports.newMenuItem = async (req,res) => {

    const menuCats = await getMenuCats();

    res.render('admin/newMenuItem', {menuCats});


}