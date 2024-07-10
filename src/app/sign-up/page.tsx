
import React, { useState } from 'react'
import { Input } from "../../components/ui/input"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../components/ui/card"
import UserModel from '../../../model/User'

import { redirect } from 'next/dist/server/api-utils'
import { connect } from '../../dbconfig/dbconfig'
  
function Page() {
   
  
    

  return (
    <>
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
  <form  action={async(formData:FormData)=>{
        'use server'
        await connect()
          const name=formData.get("name")as string
          const password=formData.get("password")as string
          const email=formData.get("email")as string

          const user= await UserModel.findOne({email:email});
          if(user){
                console.log("user with email already exists")
          }
          else{

              const newUser=UserModel.create({
                  name:name,email:email,password:password
                })
            }
      }}>
      

        <div className="mb-4">
          

            <input 
              name="name" 
              type="text" 
              placeholder="Your Name" 
            
             
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          
        </div>
        <div className="mb-4">
          
            
            <Input
             
              type="email" 
              placeholder="Email id" 
              name='email'
             
             
            />
          
        </div>
        <div className="mb-4">
          
            
            <Input
              id="username" 
              type="text" 
              placeholder="Email id" 
              name='username'
              
             
            />
          
        </div>
        <div className="mb-4">
          
            
            <Input
              id="password" 
              type="text" 
              placeholder="pssword" 
              name="password"
              
              
            />
          
        </div>
        
        <div className="flex items-center justify-center">
          <button 
            type="submit" 
            className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            submit &rarr;
          </button>
        </div>
      </form>
      
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
      
    </>
  )
}

export default Page