const mongoose = require('mongoose');

const SessionSchema = mongoose.Schema({
  sessionId: {
    type: Number,
    required : true
  },
  createdBy: {
    type: String,
    required : true
  },
  attendedBy: {
    type: String,
    required : true
  },
  questions: [
    {
      question : {
        type : String 
      },
      createdBy : {
        type: String
      },
      time: {
        type: String,
        default : Date.now()
      },
      answer: {
        type : mongoose.Schema.Types.Mixed //TBD
      }
    }
  ],
  comments: [
    {
      comment : {
        type: String
      },
      createdBy : {
        type: String
      },
      time: {
        type: String
      }
    }
  ]

});

const Pusher = mongoose.model('Pusher', PusherSchema);

module.exports.findBySessionId = (sessionId, callback) => {
  const query = { sessionId : sessionId }
  Pusher.findOne(sessionId, callback);
}

module.exports.addQuestion = (newQuestion, callback) => {
  newQuestion.save(callback);
}

