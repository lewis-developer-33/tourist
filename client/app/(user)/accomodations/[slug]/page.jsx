'use client'
import { useState,useEffect } from 'react'
import { useUser } from "@clerk/clerk-react";
import Link from 'next/link'
import Image from 'next/image'
import { useToast } from "@/components/ui/use-toast"
import { Button } from '@/components/ui/button'
import {getAccomodations} from '@/sanity/queries'
import { UserButton } from '@clerk/nextjs';

import {sendMoney} from "../../../../lib/actions"


const page = ({params}) => {
    const { isSignedIn, user } = useUser();
    const { toast } = useToast()
    const [accomodation,setAccomodation] = useState([])
    useEffect(() => {
        const fecthAccomodations = async () => {
            const data = await getAccomodations()
            const accomodation = data.filter((d) => d.slug == params.slug)
            console.log(accomodation)
            setAccomodation(accomodation[0])
        }
        fecthAccomodations()
    },[])

    const handleBooking = async () => {
        if (!isSignedIn) {
            toast({
                variant:"destructive",
                title: "Booking failed",
                description: "You need to log in, first",
              })
        }
        const paymentDetails = {
            paybill:'174379',
            amount:1,
            phone:'0111280166'
        }
        await sendMoney(paymentDetails)
        toast({
            title: "STK sent",
            description: "Check your phone",
          })
        
    }
    console.log(accomodation)
    
  return (
    <div>
        <header className='flex items-center justify-between px-10 py-4 shadow-md'>
            <div>
                <Link href='/' className='font-bold text-lg'>Sagana Travels</Link>
            </div>
            <div className='flex items-center gap-4 font-semibold'>
                <Link  href='/accomodations'>Accomodations</Link>
                <Link  href='activities'>Activities</Link>
            </div>
            <div>
                {isSignedIn ? <UserButton/> : <Button>Log In</Button>}
            </div>            
        </header>
        
        <main className=' mx-auto max-w-7xl'>
            <section>
                {accomodation && (
                    <div className='flex flex-col px-8 lg:px-10 py-4'>
                        <h1 className='font-bold text-3xl'>{accomodation.name}</h1>
                        <div className='border-2 w-full h-[400px] relative'>
                            <Image
                            src={accomodation.image}
                            alt={accomodation.name}
                            fill
                            />
                        </div>
                        

                        <Button className='w-fit' onClick={handleBooking}>Book Now</Button>
                    </div>
                )}
            </section>
        </main>
    </div>
  )
}

export default page