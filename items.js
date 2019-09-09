const items = require('../models').items;
module.exports ={
    create(req,res) {
        return items
        .create({
            item:req.body.item,
            quantity:req.body.quantity,
        })
        .then(item => res.status(201).send(item))
        .catch(error => res.status(400).sens(error));
    },
};