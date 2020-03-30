const {
    getLoginCredentials
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