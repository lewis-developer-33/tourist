'use client'
import {EllipsisIcon,ChevronLeftIcon,ChevronRightIcon,PlusIcon} from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const page = () => {
  const [createDoctor,setCreateDoctor] = useState(false)
  const data = [
    {
      name:'Lewis',
      speciality:"Doctor"
    },
    {
      name:'Lewis',
      speciality:"Doctor"
    },
    {
      name:'Lewis',
      speciality:"Doctor"
    },
  ]
  const filteredData = search.length > 3 ? data.filter((word) => {
    const {name} = word
    const searchTerm = search.toLowerCase()
    const nameTerm = name.toLowerCase()
    return (nameTerm.includes(searchTerm))
  }) : data
  return (
    <div className="flex flex-col ">
      <div className='flex flex-col items-start gap-5'>
        <div className='flex items-center gap-8'>
          <input
          type='text'
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your doctor ..."
          className="border-2 outline-none border-black rounded-sm w-[400px] px-2 py-1 font-semibold text-black active:border-blue-800"
          />
          <div className='bg-transparent text-blue-800 border-2 border-blue-800 p-2 w-fit h-fit rounded-full '>
            <PlusIcon
            strokeWidth={3}
            onClick={() => setCreateDoctor(true)}
            />
          </div>
        </div>
        {/* Table */}
        <div className='w-[700px] py-2 rounded-sm border-2 border-black grid gap-2'>
          <div className=" font-semibold  rounded-sm grid grid-flow-col justify-stretch w-full px-4">
            <div className=''>Name</div>
            <div className=''>Speciality</div>
            <div className=''>options</div>
          </div>
          {filteredData.map((d,i) => {
            const {name,speciality} = d
            return (
            <div className="grid grid-flow-col justify-stretch odd:bg-blue-800 odd:text-white py-2 px-4 rounded-sm">
              <div className=''>{name}</div>
              <div className=' '>{speciality}</div>
              <DropdownMenu className=' '>
                <DropdownMenuTrigger>
                  <EllipsisIcon/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem><Link href={`/doctors/${name}`}>View</Link></DropdownMenuItem>
                  <DropdownMenuItem className='text-destructive'>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            )
          })}
          <div className='p-4 flex items-center justify-between'>
            <p className='font-semibold'>Doctors: {data.length}</p>
            <div className='flex items-center gap-4'>
              <ChevronLeftIcon className='cursor-pointer'/>

              <ChevronRightIcon className='cursor-pointer'/>
            </div>
          </div>
          
        </div>
      </div>
      {
        createDoctor && 
        (
          <div className='fixed bg-blue-800/80 top-0 bottom-0 left-0 right-0 flex items-center justify-center '>
            <div className='w-fit p-5 bg-white text-black rounded-sm font-semibold'>
              
            </div>

          </div>
        )
      }


    </div>
  )
}

export default page
