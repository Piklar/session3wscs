const User = require('../model/user.js');
const bcrypt = require('bcryptjs');

// Controller Function
// Get all users
module.exports.getAllUsers = () => {
    return User.find({}).then(result => {
        return result;
    })
}

// Add User
module.exports.registerUser = (req, res) => {
    const reqBody = req.body;
    const newUser = new User({
        completeName: reqBody.completeName,
        contactNumber: reqBody.contactNumber,
        email: reqBody.email,
        password: bcrypt.hashSync(reqBody.password, 10)
    })

    return newUser.save().then(result => {
        res.send(result);
    })
    .catch(err => res.send(err));
}