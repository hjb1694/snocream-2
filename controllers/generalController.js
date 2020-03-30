exports.renderHomePage = (req,res) => {

    res.render('index', {
        title : 'Home'
    });
    
}

exports.renderMenuPage = (req,res) => {

    res.render('menu', {
        title : 'menu'
    });

}