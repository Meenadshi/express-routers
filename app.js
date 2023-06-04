const express = require('express')
const app = express()
const newlook= require('./newlook.js')
const menu= require('./menu.js')
const content= require('./content.js')
const highlight= require('./highlight.js')
const about= require('./about.js')
const contact= require('./contact.js')

app.get('/', (request,response) =>{
    response.send("GET Router on Home Page")

})
app.use('/newlook',newlook)
app.use('/menu',menu)
app.use('/content',content)
app.use('/contact',contact)
app.use('/about',about)
app.use('/highlight',highlight)

app.listen(3600)