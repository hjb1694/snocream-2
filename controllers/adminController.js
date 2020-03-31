const {
    getLoginCredentials, 
    getMenuCats, 
    deleteMenuCat, 
    addMenuCategory, 
    editMenuCategory
} = require('../database/queries/admin');
const bcrypt = require('bcryptjs');

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