const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import Routes
const postsRoute = require('./routes/posts');

// MIDDLEWARES - functions that are executed when a route is being hit
app.use(cors());
app.use('/posts', postsRoute);


// MIDDLEWARES - functions that are executed when a route is being hit
// app.use('/posts', () => {
//     console.log('this is a middleware running')
// })

// ROUTES
app.get('/', (req, res) => {
    res.send('we are on home');
})

// Connect to db
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected'))


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://bigboss:<password>@merdingen.clpge.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });


// How do we start listening to the server
app.listen(3000);
