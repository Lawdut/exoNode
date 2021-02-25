var mongoose = require ('mongoose'),
Schema = mongoose.Schema;

var UserSchema = new Schema ( {
    name : String,
    password: String,
    email: String,
});

mongoose.model('User', UserSchema);
//User est le nom de la collection MongoDB