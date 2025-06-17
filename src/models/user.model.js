import mongoose,{ Schema,model } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new Schema(
    {
        username: {
            type: string,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
            index:true
        },
        email: {
            type: string,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
        },
       fullName : {
            type: string,
            required: true,
            trim: true,
            index: true
        },
        avatar:{
            type: String,
            required: true
        },
        coverImage:{
            type: String,
        },
        watchHistory:[
            {
                type: Schema.model.Types.ObjectId,
                ref:'video'
            }
        ],
        password:{
            type: String,
            required :[true,'password is required']
        },
        refreshToken:{
            type: String 
        }
    }
,{timestamps: true})

userSchema.pre('save',function (next) {
    if(!this.modified("password")) return next();
        this.password = bcrypt.hash(this.password,10)
        next();
})

userSchema.mathods.isPasswordCorrect =  async function (password) {
  return  await bcrypt.compare(password, this.password)
}

userSchema.mathods.generateAccessToken = function() {
   return jwt.sign({
        _id:this._id,
        usename: this.usename,
        email: this.email,
        fullName: this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn:ACCESS_TOKEN_EXPIRY}
)
}
userSchema.mathods.generateRefreshToken = function() {
       return jwt.sign({
        _id:this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn:REFRESH_TOKEN_EXPIRY}
)
}
export const User =  model('User',userSchema)