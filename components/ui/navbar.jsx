import React from 'react'
import { Button } from "@/components/ui/button";
import Link from 'next/link';

function Navbar() {
    
  return (
    <div className='bg-blue-100 sticky top-0 left-0 right-0 shadow z-10'>
      <div className='flex flex-wrap items-center justify-between mx-auto max-w-6xl px-4 py-3'>
        <div>
        <h1 className='text-2xl font-bold md:text-3xl'>S.Kreation</h1>
      </div>
      <div className='flex flex-wrap gap-3 mt-2 md:mt-0'>
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
