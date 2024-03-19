'use client'
import {EllipsisIcon,ChevronLeftIcon,ChevronRightIcon,PlusIcon,FilterIcon,PlusCircleIcon} from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
  
  const [filterModal,setFilterModal] = useState(false)
  const [createModal,setCreateModal] = useState(true)
  const [filter,setFilter] =  useState({
    school:'',
    department:'',
    college:'',
    course:''
  })
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

  // course,department,school,college

  // const filteredData = search.length > 3 ? data.filter((word) => {
  //   const {name} = word
  //   const searchTerm = search.toLowerCase()
  //   const nameTerm = name.toLowerCase()
  //   return (nameTerm.includes(searchTerm))
  // }) : data
  return (
    <div className="flex flex-col ">
      <div className='flex flex-col items-start gap-5'>
        <div className='flex w-full relative gap-5'>
        <FilterIcon
        className='cursor-pointer hover:text-blue-800'
        onClick={() => setFilterModal(true)}
        />
        <PlusCircleIcon
        className='cursor-pointer hover:text-blue-800'
        onClick={() => setCreateModal(true)}
        />
        </div>
        {/* Table */}
        <div className='w-[700px] py-2 rounded-sm border-2 border-black grid gap-2'>
          <div className=" font-semibold  rounded-sm grid grid-flow-col justify-stretch w-full px-4">
            <div className=''>Name</div>
            <div className=''>Speciality</div>
            <div className=''>options</div>
          </div>
          {data.map((d,i) => {
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
        filterModal && 
        (
          <div className='fixed bg-blue-800/80 top-0 bottom-0 left-0 right-0 flex items-center justify-center '>
            <div className='w-fit p-5 bg-white text-black rounded-sm font-semibold gap-5'>
            <p>Filter here</p>
            <div className='w-[400px] grid gap-5 mt-5'>
              <Select 
                  onValueChange={(value) => {
                      setFilter((prevUser) => ({
                          ...prevUser,
                          college:value
                      }))
                  }}
                  className='my-4 text-slate-900'>
                  <SelectTrigger className="w-full ">
                      <SelectValue placeholder="Select College" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectGroup>
                      <SelectLabel>College</SelectLabel>
                          <SelectItem name='student'value='student' className=''>Student</SelectItem>
                          <SelectItem name='lecturer'value='lecturer' className=''>Lecturer</SelectItem>
                          <SelectItem name='admin'value='admin' className=''>Admin</SelectItem>
                      
                      </SelectGroup>
                  </SelectContent>
                </Select>
              <Select 
                  onValueChange={(value) => {
                      setFilter((prevUser) => ({
                          ...prevUser,
                          school:value
                      }))
                  }}
                  className='my-4 text-slate-900'>
                  <SelectTrigger className="w-full ">
                      <SelectValue placeholder="Select school" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectGroup>
                      <SelectLabel>School</SelectLabel>
                          <SelectItem name='student'value='student' className=''>Student</SelectItem>
                          <SelectItem name='lecturer'value='lecturer' className=''>Lecturer</SelectItem>
                          <SelectItem name='admin'value='admin' className=''>Admin</SelectItem>
                      
                      </SelectGroup>
                  </SelectContent>
                </Select>
              <Select 
                  onValueChange={(value) => {
                      setFilter((prevUser) => ({
                          ...prevUser,
                          department:value
                      }))
                  }}
                  className='my-4 text-slate-900'>
                  <SelectTrigger className="w-full ">
                      <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectGroup>
                      <SelectLabel>Department</SelectLabel>
                          <SelectItem name='student'value='student' className=''>Student</SelectItem>
                          <SelectItem name='lecturer'value='lecturer' className=''>Lecturer</SelectItem>
                          <SelectItem name='admin'value='admin' className=''>Admin</SelectItem>
                      
                      </SelectGroup>
                  </SelectContent>
                </Select>
              <Select 
                  onValueChange={(value) => {
                      setFilter((prevUser) => ({
                          ...prevUser,
                          course:value
                      }))
                  }}
                  className='my-4 text-slate-900'>
                  <SelectTrigger className="w-full ">
                      <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectGroup>
                      <SelectLabel>Course</SelectLabel>
                          <SelectItem name='student'value='student' className=''>Student</SelectItem>
                          <SelectItem name='lecturer'value='lecturer' className=''>Lecturer</SelectItem>
                          <SelectItem name='admin'value='admin' className=''>Admin</SelectItem>
                      
                      </SelectGroup>
                  </SelectContent>
                </Select>
            </div>
            <button className="px-2 py-2 rounded-sm bg-blue-800 text-white w-full h-fit my-5">
                Filter
            </button>
            </div>

          </div>
        )
      }

      {createModal && (
        <div className='fixed bg-blue-800/80 top-0 bottom-0 left-0 right-0 flex items-center justify-center '>
          <div className='w-fit p-5 bg-white text-black rounded-sm font-semibold gap-5'>

          </div>
        </div>
      )}


    </div>
  )
}

export default page
