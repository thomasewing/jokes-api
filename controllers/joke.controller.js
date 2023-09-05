const Joke = require('../models/joke.model');

//----------------find all---------------------------------------
module.exports.findAllJokes = (req,res)=>{
    Joke.find()
        .then((allDaJokes)=> {
            res.json({jokes:allDaJokes})
        })
        .catch((err)=>{
            res.json({message:'Somethings fucky', error:err})
        });
}

//------------------------find one---------------------------------
module.exports.findOneSingleJoke=(req,res)=>{
    Joke.findOne({_id: req.params.id})
        .then(oneSingleJoke=>{
            res.json({joke:oneSingleJoke})
        })
        .catch((err)=>{
            res.json({message: 'Somethings fucky', error:err})
        });
}

//-------------------------create new---------------------------------
module.exports.createNewJoke=(req,res)=>{
    Joke.create(req.body)
        .then(newlyCreatedJoke =>{
            res.json({ joke: newlyCreatedJoke})
        })
        .catch((err)=> {
            res.json({message:'Somethings fucky', error:err})
        });
}

//---------------------update-----------------------------------------
module.exports.updateExistingJoke=(req,res)=>{
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators:true}
    )
        .then(updatedJoke=>{
            res.json({joke:updatedJoke})
        })
        .catch((err)=>{
            res.json({message:'Somethings fucky', error:err})
        });
}

//----------------------delete-----------------------------------------
module.exports.deleteAnExistingJoke=(req,res)=>{
    Joke.deleteOne({_id: req.params.id})
        .then(result =>{
            res.json({result:result})
        })
        .catch((err)=>{
            res.json({message: 'Somethings fucky', error:err})
        });
}