const login =require('../models').login;
module.exports ={
 create(req,res) {
 return login 
 .create({
     name:req.body.name,
     password:req.boy.password,
 })
 .then(company =>res.status(201).send(login))
 .catch(error =>res.status(400).send(error));
},
};