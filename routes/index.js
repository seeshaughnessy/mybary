const express = require('express')
const router = express.Router()

// Get application route (controller)
router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router