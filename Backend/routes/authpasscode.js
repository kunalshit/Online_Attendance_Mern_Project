const express = require("express");
const router = express.Router();


//static passcode
const passcode = '1234'; 

router.post('/verify_passcode',(req, res) => {
    const { password } = req.body;

    if(password === passcode) {
        return res.status(200).json({success: true, message: 'passcode verified '});
    } else {
        return res.status(400).json({success: false, message: 'Invalid passcode'});
    }
});

module.exports = router;