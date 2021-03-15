const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const path = require('path');
const linkRoute = require('./routes/linkRoute')


mongoose.connect("mongodb://localhost/links", { useNewUrlParser: true, useUnifiedTopology: true });





let db = mongoose.connection

db.on('error', () => { console.log("Error!") });
db.once("open", () => {console.log("DataBase loaded")})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'))

app.use("/", linkRoute)



app.listen(PORT, () => { console.log(`server running on port ${PORT}`) });