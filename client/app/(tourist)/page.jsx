'use client'
import { useUserContext } from '@/contexts/user'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

const page = () => {
  const pathName = usePathname()
  const {userValue,setUserValue} = useUserContext()
  const {name,email} = userValue
  console.log(name)
  return (
    <div>
        <header className='flex items-center justify-between px-10 py-4 shadow-md'>
            <div>
                <Link href='/' className='font-bold text-lg'>Sagana Travels</Link>
            </div>
            <div className='flex items-center gap-4 font-semibold'>
                <Link className={`${pathName.endsWith('accomodations') && 'text-blue-800'}`} href='/accomodations'>Accomodations</Link>
                <Link className={`${pathName.endsWith('activities') && 'text-blue-800'}`} href='activities'>Activities</Link>
            </div>
            <div>
                <Button>Log In</Button>
            </div>            
        </header>
        <main className=' mx-auto max-w-7xl'>
            <section className='w-full py-5'>
                <h2 className='font-semibold text-3xl text-black'>Accomdations</h2>
                <p className='font-semibold text-sm text-black/80'>Take a sneak peak into the <span className='text-blue-800'>comfy</span> accomodatios we offer</p>
                <div>

                </div>
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