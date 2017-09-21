var wish = require('../models/wisher'); // Import User Model

module.exports = function (router) {

    router.post('/wisher', function(req,res) {
        var wishing = new wish();
        wishing.messages = reg.body.messages;
        wishing.choice   = req.body.choice;
        wishing.counter  = req.body.counter;
        wishing.views    = req.body.views;

        if (req.body.messages === null || req.body.messages === '' || req.body.views === null || req.body.views === 0 || req.body.choice === null || req.body.choice === '' || req.body.counter === 0 || req.body.counter === null)
        {
              res.json({success: false, message: 'Ensure all the details were provided'});
        }
        else
        {
            wishing.save(function(err) {
                if (err) {
                    res.json({success: false, message: err}); // Display any other error
                }
                else {
                    res.json({success: true, message: 'Wish Created! Please share your wishes now.'}); // Send success message back to controller/request
                }
            });
        }
    });
    return router; // Return the router object to the server
};