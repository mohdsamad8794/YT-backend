import mongoose,{ Schema,model } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
          videoFile:{
            type: String,
            required: true
        },
          thumbnail:{
            type: String,
            required: true
        },
          title:{
            type: String,
            required: true
        },
          description:{
            type: String,
            required: true
        },
        duration:{
             type: true,
            required: true
        },
        views:{
            type: Number,
            default:0 
        },
        ispublished:{
           type: Boolean,
           default: true
        },
        onwer:{
            type: Schema.Types.ObjectId,
            ref : 'User'
        }
    },
    {timestamps: true}
)
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = model('Video',videoSchema)