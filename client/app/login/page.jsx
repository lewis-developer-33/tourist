'use client'
import { useState} from "react"
import { useUserContext } from '@/contexts/user'
import Link from "next/link"
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import axios from 'axios'


const page = () => {
    const [user,setUser] = useState({})
    const {userValue,setUserValue} = useUserContext()
    const inputs = [
        {
            type:'email',
            name:'email',
            placeholder:'Email',
            required:true
        },
        {
            type:'password',
            name:'password',
            placeholder:'Password',
            required:true
        },
    ]

    const handleChange = (e) => {
        const {name,value} = e.target
        setUser((prevUser) => ({
            ...prevUser,
            [name]:value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post("http://localhost:8000/api/auth/login",user)
        console.log(res.data)
        setUserValue(res.data)
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
        className="shadow-md shadow-slate-900 rounded-md bg-white text-slate-900 w-[400px] h-[440px] p-5 flex flex-col items-center justify-center z-20">
            <h2 className="font-bold text-2xl mb-4">E-noticeboard | Log In </h2>
            <div className="grid gap-4 w-full">
                {inputs.map((d,i) => {
                    const {type,name,placeholder,required,minLength} = d
                    return(
                        <Input
                        key={i}
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        required={required}
                        onChange={handleChange}
                        
                        />
                    )
                })}
            </div>
            <button className="px-2 py-2 rounded-sm bg-blue-800 text-white w-full h-fit my-5">
                Log In
            </button>
            <div className="flex w-full gap-2 justify-end">
                <Link className="hover:text-blue-800" href='/sign-up'>Sign Up </Link>
            </div>
        </form>
    </div>
  )
}

export default page