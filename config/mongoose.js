const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://gaurav98marwah:12345@cluster0.7sk7p9g.mongodb.net/Polling-Api?retryWrites=true&w=majority');

// Code for using the cloud mongodb atlas 
const connectParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

// Code for manually using the mongodb of local system

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;
