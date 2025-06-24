import React from 'react'
import { Button } from "@/components/ui/button";
import Link from 'next/link';

function Navbar() {
    
  return (
    <div className='m-2 p-2 w-[90%] md:w-[full] md-m-auto lg:w-full flex flex-wrap bg-blue-100 sticky top-0 right-0 left-0 mx-5 md:mx-0 lg:mx-0 flex justify-between items-center'>
      <div className='m-auto w-full border flex justify-between items-center'>
        <div>
        <h1 className='text-2xl font-bold md:text-3xl lg:text-3xl'>S.Kreation</h1>
      </div>
      <div className='m-2 p-2 flex gap-6 invisible md:visible lg:visible'>
        <Link href="/"><Button className="cursor-pointer" variant="outline">Home</Button></Link>
        <Link href="/About"><Button className="cursor-pointer" variant="outline">About</Button></Link>
        <Link href="/Contact"><Button className="cursor-pointer" variant="outline">Contact</Button></Link>
        <Link href="/Service"><Button className="cursor-pointer" variant="outline">Service</Button></Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar
