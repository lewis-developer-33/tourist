'use client'
import { useUserContext } from '@/contexts/user'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  const {userValue,setUserValue} = useUserContext()
  const {name,email} = userValue
  console.log(name)
  return (
    <div className='h-screen w-screen bg-gradient-to-b to-cyan-600 from-white'>
      <header className='flex items-center justify-between px-10 h-[10vh] shadow-md font-semibold bg-transparent'>
        <div>
          <p className='text-xl'>
            E-noticeboard
          </p>
        </div>
        
      </header>
      <section className='h-[90vh] grid grid-cols-2 place-content-center place-items-center'>
        <div className='font-semibold'>
          <div className='grid gap-4'>
            <p className='text-7xl font-bold'>E-noticeboard</p>
            <p className='text-4xl text-orange-600'>Diabetes Detection Model</p>
          </div>
          <div className='max-w-[400px] tracking-wider my-5'>
            <p>An all-in-one platform to monitor and detect your patients for diabetes.</p>
          </div>
          <div className='flex items-center space-x-4'>
          <Link href='/login' className="px-4 py-2 rounded-sm border-2 hover:border-blue-800 bg-white  text-blue-800 ">
            Login
          </Link>
          <Link href='/sign-up' className="px-4 py-2 rounded-sm border-2 hover:border-blue-800 bg-white text-blue-800 ">
            Sign up
          </Link>
          
        </div>
        </div>
        <div>
          <Image
          src='/drugs.jpg'
          alt='drugs'
          width={500}
          height={500}
          />
        </div>
      </section>
      
      
      
    </div>
  )
}

export default page