'use client'
import React from 'react'
import { cn } from '../../lib/utils'
import axios from 'axios'
import Foter from '../../components/ui/Foter'
import Navbar from '../../components/ui/Navbar'
import { Input } from "../../components/ui/input";

function Page() {
  const [user, setUser] = React.useState({
    email: "",
    message: "",
    name: "",
  })

  const onEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post("/api/send",user)
      console.log(response)
    } catch (error: any) {
      console.log("unable to send email", error)
    }
  }

  return (
<>
<div>
  <Navbar></Navbar>
</div>

    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg" onSubmit={onEmail}>
        <div className="mb-4">
          
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
            <Input 
              id="name" 
              type="text" 
              placeholder="Your Name" 
              value={user.name} 
              onChange={(e) => setUser({ ...user, name: e.target.value })} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          
        </div>
        <div className="mb-4">
        
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Email id" 
              value={user.email} 
              onChange={(e) => setUser({ ...user, email: e.target.value })} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
         
        </div>
        <div className="mb-4">
         
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea 
              id="message" 
              placeholder="Your message..." 
              value={user.message} 
              onChange={(e) => setUser({ ...user, message: e.target.value })} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40 resize-y"
            />
         
        </div>
        <div className="flex items-center justify-center">
          <button 
            type="submit" 
            className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Email &rarr;
          </button>
        </div>
      </form>
      
    </div>
    <div>
      <Foter></Foter>
    </div>
    </>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  )
}

export default Page
