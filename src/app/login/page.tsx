"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage () {
    const [user, setUser] = React.useState({
        email:"",
        password:"",
    });
    const onLogin = async () => {
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <hr />
            <label htmlFor="email">Email</label>
            <input 
            className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            type="text" />
            <label htmlFor="password">Password</label>
            <input 
            className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            type="password" />

            <button
            onClick={onLogin}
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
                Login
            </button>
            <Link href={"/home"}>Go back to Home</Link>
        </div>
    )
}