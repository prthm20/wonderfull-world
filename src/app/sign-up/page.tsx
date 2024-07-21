'use client'
import React from 'react'
import { Input } from "../../components/ui/input"
import type { NextApiRequest, NextApiResponse } from 'next';
import { useSearchParams, useRouter } from "next/navigation";

import { useToast } from "../../components/ui/use-toast"

import axios from 'axios'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card"
import UserModel from '../../model/User'
import { connect } from '../../dbconfig/dbconfig'
import Link from 'next/link'


function Page() {
    let router = useRouter()
    const { toast } = useToast()
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        name:"",})
   
    const onEmail = async (event: React.FormEvent) => {
        event.preventDefault();
      
       try {
        
           const response = await axios.post('/api/sign-up', {
               name:user.name,
               email:user.email ,
               password:user.password,
            })
            console.log(response)
            if (response.status==200) {
                toast({
                    title: "Success",
                    description: "SignUp was succesfull",
                })  
            }
            
        } catch (error) {
            toast({
                title: "Regisration failed",
                description: "SignUp failed",
            })  
        }
        }
        
    
    

    return (

        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Sign-Up</CardTitle>
                    <CardDescription>
                        Already have an account? <Link href={"/api/auth/signin"}>log-in</Link>
                    </CardDescription>
                </CardHeader>
                <CardContent>
              
                    <form onSubmit={onEmail}>
                        <div className="mb-4">
                            <input
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                onChange={(e) => setUser({...user, name: e.target.value})}
                                value={user.name} 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                type="email"
                                placeholder="Email id"
                                name='email'
                                onChange={(e) => setUser({...user, email: e.target.value})}
                                value={user.email} 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                id="username"
                                type="text"
                                placeholder="username"
                                name='username'
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                id="password"
                                type="text"
                                placeholder="password"
                                name="password"
                                onChange={(e) => setUser({...user, password: e.target.value})}
                                value={user.password}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit &rarr;
                            </button>
                        </div>
                    </form>
                <div>
                 signup with google? <Link href={"/api/auth/signin"}>sign-up</Link>
              
                </div>
                </CardContent>
            </Card>
        </div>
    )}


export default Page
