'use client'
import { useState,useEffect } from "react"
import Link from "next/link"
import Image from 'next/image'
import axios from "axios"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const page = () => {
    const [user,setUser] = useState({})
    
    const inputs = [
        {
            type:'text',
            name:'name',
            placeholder:'Name',
            required:true
        },
        {
            type:'email',
            name:'email',
            placeholder:'Email',
            required:true
        },
        {
            type:'text',
            name:'phone',
            placeholder:'Phone Number',
            required:true,
            minLength:10
        },
        {
            type:'password',
            name:'password',
            placeholder:'Password',
            required:true
        },
    ]
    const signUpUrl = ''
    const handleChange = (e) => {
        const {name,value} = e.target
        setUser((prevUser) => ({
            ...prevUser,
            [name]:value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await axios.post(
            'http://localhost:8000/api/auth/register',
            user
        )
        console.log(res)
    }

  return (
    <div className="flex h-screen items-center justify-center font-semibold">
        <div className="h-screen w-screen fixed">
            <Image
            src="/noticeboard-bg.jpg"
            alt="Background Image"
            layout="fill" // Fill the container dimensions
            objectFit="cover" // Adjust image size to cover the container
            />
            <div className="h-screen w-screen z-10 bg-black/80">

            </div>
        </div>
        <form 
        onSubmit={handleSubmit}
        className="shadow-md shadow-slate-900 rounded-md bg-white text-slate-900 w-[400px] h-[500px] p-5 flex flex-col items-center justify-center z-20">
            <h2 className="font-bold text-2xl mb-4">E-noticeboard | Sign Up </h2>
            <div className="grid gap-4 w-full">
                {inputs.map((d,i) => {
                    const {type,name,placeholder,required,minLength} = d
                    return(
                        <Input
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        required={required}
                        minLength={minLength}
                        onChange={handleChange}
                        // className="border-2 border-slate-900 font-semibold px-2 py-1 rounded-sm"
                        />
                    )
                })}
                <Select 
                onValueChange={(value) => {
                    setUser((prevUser) => ({
                        ...prevUser,
                        role:value
                    }))
                }}
                className='my-4 text-slate-900'>
                <SelectTrigger className="w-full ">
                    <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Roles</SelectLabel>
                        <SelectItem name='student'value='student' className=''>Student</SelectItem>
                        <SelectItem name='lecturer'value='lecturer' className=''>Lecturer</SelectItem>
                        <SelectItem name='admin'value='admin' className=''>Admin</SelectItem>
                    
                    </SelectGroup>
                </SelectContent>
                </Select>
            </div>
            <button className="px-2 py-2 rounded-sm bg-blue-800 text-white w-full h-fit my-5">
                Sign up
            </button>
            <div className="flex w-full gap-2 justify-end">
                <Link className="hover:text-blue-800" href='/login'>Log In </Link>
            </div>
        </form>
    </div>
  )
}

export default page