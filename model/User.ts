import { connect } from '../src/dbconfig/dbconfig';
import mongoose, { Schema , Document } from 'mongoose';



export interface User extends Document {
  email: string;
  name: string;
  password: string;
  googleId:string
  }
const UserSchema: Schema<User> = new mongoose.Schema({
  
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
  typte:String
 }
 
})

// Use existing model if it exists, otherwise create a new model
const UserModel =(mongoose.models?.travlog as mongoose.Model<User>) ||mongoose.model<User>('travlog', UserSchema)

export default UserModel
