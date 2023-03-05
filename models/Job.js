const mongoose = require('mongoose');


const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        require: [true, 'please provide company name'],
        maxlength: 50
    },

    position: {
        type: String,
        require: [true, 'please provide position'],
        maxlength: 50
    },
    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending'
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'please provide a user']

    }


}, { timestamps: true })

module.exports = mongoose.model('Job', JobSchema)