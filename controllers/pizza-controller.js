const { Pizza } = require('../models');

const pizzaController = {

    //get all pizzas
    getAllPizza(req, res) {
        Pizza.find({})
            .then(dbPizzaData => res.json(dbPizzaData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    //get one pizza by id
    getPizzaById({ params }, res) {
        Pizza.findOne({ _id: params.id })
            .then(dbPizzaData => {
                //If pizza is not found send 404 Not Found error message
                if (!dbPizzaData) {
                    res.status(404).json({ message: 'No pizza was found with this Id' });
                    return;
                }
                res.json(dbPizzaData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
};

module.exports = pizzaController;