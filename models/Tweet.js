import mongoose, { Schema } from 'mongoose';

const TweetSchema = new Schema({
    text: {
        type: String,
        minlength: [5, 'Text needs to be longer'],
        maxlength: [120, 'Text is too short']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    favoriteCount: {
        type: Number,
        default: 0
    }

}, {timestamps: true})

export default mongoose.model('Tweet', TweetSchema)