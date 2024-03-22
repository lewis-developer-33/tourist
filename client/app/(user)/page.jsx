'use client'
import {useState,useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {getAccomodations} from '@/sanity/queries'



const page = () => {
    const [accomodations,setAccomodations] = useState([])
    useEffect(() => {
        const fecthAccomodations = async () => {
            const data = await getAccomodations()
            setAccomodations(data)
        }
        fecthAccomodations()
    },[])
    
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
                <Button>Log In</Button>
            </div>            
        </header>
        <main className=' mx-auto max-w-7xl'>
            <section className='w-full py-5'>
                <h2 className='font-semibold text-3xl text-black'>Accomdations</h2>
                <p className='font-semibold text-sm text-black/80'>Take a sneak peak into the <span className='text-blue-800'>comfy</span> accomodatios we offer</p>
                {accomodations.length > 0 && (
                    <div className='grid gap-4'>
                        {accomodations.map((d) => {
                            const {_id,name,slug,image} = d
                            return(
                                <div 
                                className='p-2 rounded-sm shadow-md border-2 relative w-[400px] h-[300px]'
                                key={_id}>
                                    <Image
                                    src={image}
                                    alt={name}
                                    fill
                                    />
                                    <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-slate-900'>
                                        <Link href={`/accomodations/${slug}`} className='absolute bottom-4 left-4 text-xl text-white font-semibold'>{name}</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </section>

            <section className='w-full py-5'>
                <h2 className='font-semibold text-3xl text-black'>Activities</h2>
                <p className='font-semibold text-sm text-black/80'>Take a sneak peak into the <span className='text-blue-800'>thrilling</span> accomodatios we offer</p>
                <div>

                </div>
            </section>
            
        </main>
    </div>
  )
}



export default page