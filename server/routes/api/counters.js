const User = require('../../models/User');

module.exports = (app) => {

  app.get('/api/', (req, res) => {
    res.send("api works");
  })

  app.post('/api/user', (req, res, next ) => {
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

    User.addUser(newUser,(err,user) => {
      console.log("adding user");
      if(err){
       console.log(err)
       res.json({
         success: false,
         msg: 'Failed to register the user'
       })
      } 
      else{
       res.json({
         success: true,
         msg: 'User registered'
       })  
      }
      
    })
  });


  app.get('/api/counters', (req, res, next) => {
    Counter.find()
      .exec()
      .then((counter) => res.json(counter))
      .catch((err) => next(err));
  });

  app.post('/api/counters', function (req, res, next) {
    const counter = new Counter();

    counter.save()
      .then(() => res.json(counter))
      .catch((err) => next(err));
  });

  app.delete('/api/counters/:id', function (req, res, next) {
    Counter.findOneAndRemove({ _id: req.params.id })
      .exec()
      .then((counter) => res.json())
      .catch((err) => next(err));
  });

  app.put('/api/counters/:id/increment', (req, res, next) => {
    Counter.findById(req.params.id)
      .exec()
      .then((counter) => {
        counter.count++;

        counter.save()
          .then(() => res.json(counter))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });

  app.put('/api/counters/:id/decrement', (req, res, next) => {
    Counter.findById(req.params.id)
      .exec()
      .then((counter) => {
        counter.count--;

        counter.save()
          .then(() => res.json(counter))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });
};
