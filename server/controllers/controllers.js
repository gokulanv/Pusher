const service = require("../services/services");
const User = require("../models/User");


module.exports.addUser = (req, res ) => {
    const newUser = new User({
      userId : req.body.userId,
      role : req.body.role,
      username : req.body.username,
      password : req.body.password,
      emailId : req.body.emailId,
      institution : req.body.institution,
      company : req.body.company,
      phone : req.body.phone
    });

    console.log("service : "+JSON.stringify(service));

    service.addUser(newUser)
    .then ((result) => {
        return res.send(result);
    }).catch( (err)=> {
        return res.send(err);
    });

    
  }