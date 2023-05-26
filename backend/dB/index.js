const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ppriyankababu1:priyankap1@cluster0.ztwbldg.mongodb.net/product')
.then(() => {
    console.log('Connected');
})
.catch(err => {
    console.log(err)
})