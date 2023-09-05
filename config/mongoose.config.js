const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/jokesdb', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>console.log('A connection is made!'))
    .catch(()=>console.log('Gotta get youself connected',err));
