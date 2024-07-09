import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";

import {connect} from './dbconfig/dbconfig'
import UserModel from '../model/User'
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
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "text" },
              email: { label: "email", type: "email" },
              name:{label:"name",type:"text"}
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
                    
                    
                  }
                
              
                }catch{
                  console.log("error")
                }
            
       
               
             }
        })
       

    ]

    
})
