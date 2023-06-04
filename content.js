const express = require('express')
const router = express.Router() 

router.get('/', (request,response) =>{
    response.send("This is content page")
})

module.exports = router