'use client'
import Link from "next/link"
import {Button} from '@/components/ui/button'
import { usePathname } from "next/navigation"

const UserLayout = ({children}) => {
    const pathName = usePathname()
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
            {children}
        </main>
    </div>
  )
}

export default UserLayout