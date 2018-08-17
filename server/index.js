require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const controller = require('./controller')

const app = express();
app.use(bodyParser.json());

//express static
 app.use(express.static(`${__dirname}/../build`));
  

const {
           SERVER_PORT,
           CONNECTION_STRING,
           } = process.env

//setting up massive to make connection to the db
massive( CONNECTION_STRING )
  .then(dbInstance => {
    app.set('db', dbInstance)
  })

  //endpoints
  app.get('/api/houses', controller.getAllHouses);
   app.post('/api/house/add', controller.createHouse);
   app.delete(`/api/house/:id`, controller.deleteHouse);



  


app.listen(SERVER_PORT, () => {
  console.log(`Dancing on PORT:${SERVER_PORT}`);
});
