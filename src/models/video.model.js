import mongoose, { Schema } from "mongoose";
import mongooseAggreatePaginate from "mongoose-aggreate-paginate";

const videoSchema = new Schema({
    videoFile: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

},{timestamps: true})

videoSchema.plugin(mongooseAggreatePaginate);

export const Video = mongoose.model('Video', videoSchema);