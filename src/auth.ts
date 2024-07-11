import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";

import {connect} from './dbconfig/dbconfig'
import UserModel from './model/User'
import Credentials from "next-auth/providers/credentials"
import { User } from 'lucide-react';

export const { handlers, signIn, signOut, auth }= NextAuth({
  
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
            
        
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              username: { label: "Username", type: "text", placeholder: "username" },
              name:{label:"name",type:"text",placeholder:"your name"},
              email: { label: "email", type: "email",placeholder:"email" },
              password: { label: "Password", type: "text",placeholder:"password"},
            },
            
           async authorize(credentials):Promise<any>{
             await connect()
          
             const param=credentials.email
             console.log(param)
               try{
               const user= await UserModel.findOne({email:param})
               

                 if (user?.password==credentials.password) {
                   console.log(user)
                   return user
                   
                  } else {
                    
                    return null
                    console.log("user not found")
                  }
                
              
                }catch{
                  console.log("error")
                }
            
       
               
             }
        })
       

    ],
    callbacks:{
      async signIn({ user, account, profile, email, credentials }) {
        if(account?.provider=="google"){
          await connect()
          try {

            const {name,email,id}=user
            const islogin=await UserModel.findOne({email})
            if(!islogin){
              console.log('no signedup')
              const reg=await UserModel.create({name,email,googleId:id})
            }
            return true
          }
          catch (error) {
            console.log(error)
            
          }
        }
          return false
      },
    }

    
})
