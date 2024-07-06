import mongoose, { connection } from "mongoose";

export async function connect() {

    try {
        mongoose.connect('mongodb+srv://prathammm:prathamm@cluster0.pjvn3ov.mongodb.net/Wonderfull-world')
        connection.on('connected',()=>{
            console.log("Mongo db connnected succesfully");
        })
        connection.on('error',()=>{
            console.log('mongodb connection error')
            process.exit();
        })
        
    } catch (error) {
        console.log("Something went wrong while connecting to database",error)
    }
    
}
