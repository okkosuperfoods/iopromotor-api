const mongoose = require('mongoose')
const user = mongoose.model('users')

exports.findAllUsers = (req, res) => {
    user.aggregate([
        {
            $match: {
                '_id': 'reo3RfdwSQ2FqeqDh'
            }
        }
    ], (err, response) => {
        if(err) res.send(500, err.message)

        console.log('GET /users');
        res.status(200).jsonp(response)
    })
}