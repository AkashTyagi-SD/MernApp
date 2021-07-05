const mongoose = require('mongoose');
const connection = "mongodb+srv://Akash:1qazxsw23edc@cluster0.tr2r8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));