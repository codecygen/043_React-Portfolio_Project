const express = require('express');
const router = express.Router();

router.get('/test', (req, res, next) => {
    res.json({
        color: "red",
		value: "#f00"
    });
});

module.exports = router;