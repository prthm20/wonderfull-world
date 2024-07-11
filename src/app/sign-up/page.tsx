import React from 'react'
import { Input } from "../../components/ui/input"
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
                    <form action={async (formData: FormData) => {
                        'use server'
                        await connect()
                        const name = formData.get("name") as string
                        const password = formData.get("password") as string
                        const email = formData.get("email") as string

                        const user = await UserModel.findOne({ email: email });
                        if (user) {
                            console.log("user with email already exists")
                        } else {
                            const newUser = UserModel.create({
                                name: name, email: email, password: password
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
                </CardContent>
            </Card>
        </div>
    )
}

export default Page
