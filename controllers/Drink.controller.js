const Drink = require('../models/Drink.model');



module.exports.drinkController = {
    getDrink: (req,res) => {
        Drink.find({}).select("title").select("price").then((data) => {
            res.json(data)
        })
    },


    createDrink : (req,res) => {
        Drink.create ({
           title: req.body.title,
           price: req.body.price,
           instock: req.body.instock,
           coffeine: req.body.coffeine,
           volume: req.body.volume,
           descriptioncDrink: req.body.descriptioncDrink

        }).then((data) => {
            res.json(data)
            .catch((error) => {
                res.json(error)
            })
        });


    },

    getDrinkInstock: (req,res) => {
        Drink.find({instock:true}).then((data) => res.json(data))
    },


    getDrinkId: (req,res) => {
        Drink.findById(req.params.id).then((data) => {
            res.json(data)
        })
    },

    deleteDrink:(req,res) => {
        Drink.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })
    },

    patchDrinkId: (req,res) => {
        Drink.findByIdAndUpdate(req.params.id,req.body).then((data) =>  {
            res.json(data)
        })
    }

}