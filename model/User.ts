import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
 password:{
  type:String,
  
 },
 googleId:{
  type:String
 }
})

// Use existing model if it exists, otherwise create a new model
const UserModel =mongoose.models.travlog || mongoose.model('travlog', UserSchema)

export default UserModel
