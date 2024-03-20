'use client'
import UserProvider, { useUserContext } from '@/contexts/user'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import {
Avatar,
AvatarFallback,
AvatarImage,
} from "@/components/ui/avatar"

const AdminLayout = ({children}) => {
    const pathName = usePathname()
    const {userValue,setUserValue} = useUserContext()
    const {name} = userValue
    console.log(name)
    const menu = [
        {
            name:'Dashboard',
            link:'/dashboard'
        },
        {
            name:'Students',
            link:'/students'
        },
        {
            name:'Lecturers',
            link:'/lecturers'
        },
        {
            name:'Notices',
            link:'/notice'
        },
        {
            name:'School',
            link:'/school'
        },
    ]
  return (
    <UserProvider>
        <div className='flex h-screen'>
            <div className='bg-emerald-800 text-white flex flex-col items-start p-8 h-screen w-[400px] rounded-r-xl relative'>
                <div className='font-bold absolute bottom-8'>
                    <Image
                    src='/logo.png'
                    alt='logo'
                    width={70}
                    height={70}
                    />
                    <p className='text-lg tracking-wide'>E-Noticeboard</p>
                    <div className='border-2 w-[250px] border-white/80'>

                    </div>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="" alt="@shadcn" />
                            <AvatarFallback className='text-black font-semibold text-lg'>{name[0]}</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem className='text-destructive'>Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                    <div className='border-2 mt-2 w-[250px] border-white/80'>
                    </div>
                </DropdownMenu>
                <div className='flex flex-col gap-5 font-semibold text-lg mt-20 text-white/80'>
                    {menu.map((d,i) => {
                        const {link} = d
                        const path = pathName.endsWith(link.toLowerCase())
                        return (
                        <Link 
                        className={`${path && 'text-white'}`}
                        key={i} href={d.link}>{d.name}</Link>
                    )})}
                    
                </div>
            </div>
            <div className='px-10 w-full'>
                <div className='font-semibold tracking-wider py-2 w-full flex items-center justify-between'>
                    <div>
                        <p className='tracking-wider text-lg'>Welcome {name}</p>
                        {/* <p className='text-black/80 text-sm'>Let us help some lives</p> */}
                    </div>
                    <div>
                        <Input
                        type='text'
                        placeholder="Search .."
                        className='w-[400px] border-2 font-semibold'
                        />
                    </div>

                </div>
                <div className='w-full border-2 border-black my-1'>
                </div>
                <div className='mt-2'>
                    {children}
                </div>
            </div>
        </div>
    </UserProvider>
  )
}

export default AdminLayout