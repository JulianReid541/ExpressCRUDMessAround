//Server 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const MongoClient = require('mongodb').MongoClient;

// would normally throw this in a .env but this application is purely for learing purposes
const connectionString = 'mongodb+srv://admin:Secret-1@cluster0.me149.mongodb.net/<dbname>?retryWrites=true&w=majority'

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});

// Set up express app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// const userDB = [
//     {
//         id:"1",
//         name:"JS NOOB"
//     },
//     {
//         id:"2",
//         name:"Node JS NOOB"
//     }
// ]

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    const db = client.db('expressCRUD');
    const dbCollection = db.collection('users');
})
.catch(console.error);

// // get all users
// app.get('/users', (req, res) => {
//     res.status(200).send({
//         success: 'true',
//         message: 'Data fetch success',
//         users: userDB
//     })
// });

// // get one user
// app.get('/users/:id', (req, res) => {
//     const ID = req.params.id;
    
//     let userFROMDB = userDB.find(user => user.id === ID)
    
//     res.status(200).send({
//         success: 'true',
//         message: 'Data fetch success',
//         users: userFROMDB
//     })
// });

// // post a user to the list
// app.post('/users', (req, res) => {
//     // add data to users array
//     userDB.push(req.body)
    
//      res.status(201).send({
//      success: 'true',
//      message: `Data added success ${req.body.name} added`
//     })
// });

// // update a user
// app.put('/users/:id', (req, res) => {
//     const ID = req.params.id;

//     let userIndex = userDB.findIndex(user => user.id === ID);

//     userDB[userIndex].name = req.body.name;

//     res.status(201).send({
//         success: 'true',
//         message: `User ${userDB[userIndex].id} has been updated to ${userDB[userIndex].name}!`
//     })

// });

// // delete a user
// app.delete('/users/:id', (req, res)=>{
//     const ID = req.params.id;

//     let userIndex = userDB.findIndex(user => user.id === ID);

//     userDB.splice(userIndex, 1);

//     res.status(201).send({
//         success: 'true',
//         message: 'User deleted success'
//     })

// });
