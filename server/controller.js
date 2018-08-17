module.exports = {

    getAllHouses: (req, res, next) => {
        const dbInstance = req.app.get("db");
    
        dbInstance.getAll_houses()
        .then( response=> res.status(200).send(response) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong."})
            console.log(err)
        });
      },

      createHouse: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const { name, address, city, state,  zip, img, mortgage, rent } = req.body;
    
        dbInstance.create_house([ name, address, city, state,  zip, img, mortgage, rent ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong."})
            console.log(err)
        });
      },
      
       deleteHouse: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const { id } = req.params;
    
        dbInstance.delete_house([ id ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong."})
            console.log(err)
        });
      }
}