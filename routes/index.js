const siteRouter = require('./siterouter')
const table1Router = require('./table1router')
function route(app){



    app.use('/table_1',table1Router )

    app.use('/',siteRouter )

    app.get('/table_2', function (req, res) {
        res.render('table_2');
    })
    
    app.get('/data', function (req, res) {
        res.render('data');
    })
    
    app.get('/setting', function (req, res) {
        res.render('setting');
    })
    
}



module.exports = route