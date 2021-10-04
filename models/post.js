import { Mongoose } from "mongoose";
const Schema = mongoose.Schema

const Post = new Schema(
    {
        name:{type: String, required: true},
        pfp:{type: String, requierd:true}, 
        status:{type: String, requierd:true}, 
        ghUrl:{type: String, requierd:true},

    },
    {timestamps: true},
)

export default mongoose.model('posts', post)