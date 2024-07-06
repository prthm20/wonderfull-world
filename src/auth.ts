import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import {connect} from './dbconfig/dbconfig'
import UserModel from '../model/User'
import Credentials from "next-auth/providers/credentials"
import { User } from 'lucide-react'
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
              password: { label: "Password", type: "password" }
            },
            authorize:async({username,password})=> {
                console.log(username)
                
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
                if (password=="passcode"
                ) {
                    
                    return user
                  } else {
                    
                    return null
            
                    
                  }
            
       
               
             }
        })
       

    ]

    
})
