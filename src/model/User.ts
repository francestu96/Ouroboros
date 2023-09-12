import mongoose from "mongoose";
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    requeired: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: false,
  },
  apollox_key: {
    type: String,
    required: false,
  },
  apollox_secret: {
    type: String,
    required: false,
  },
  capital_api: {
    type: String,
    required: false,
  },
  capital_api_password: {
    type: String,
    required: false,
  },
  discord_url: {
    type: String,
    required: false,
  },
  telegram_url: {
    type: String,
    required: false,
  },
  auth: {
    type: String,
    required: false,
    unique: true
  },
});

userSchema.pre('save', async function(next){
  if(!this.isModified('password')){
      next()
  }
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

userSchema.methods.comparePassword = async function(enteredPassword: string){
  return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;

type UserModel = {
  name: string,
  password: string,
  email: string,
  image?: string,
  apollox_key?: string,
  apollox_secret?: string,
  capital_api?: string,
  capital_api_password?: string,
  discord_url?: string,
  telegram_url?: string,
  auth?: string
}

export type { UserModel };
