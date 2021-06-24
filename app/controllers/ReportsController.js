const mongoose = require('mongoose')
const user = mongoose.model('reportes')

exports.findAllUsers = (req, res) => {
    user.aggregate([
        {
            $match: {
                '_id': 'yeMdtgcgzHszzxDh2'
            }
        }
    ], (err, response) => {
        if(err) console.log(err);

        console.log('GET /reportes');
        res.status(200).jsonp(response)
    })
}