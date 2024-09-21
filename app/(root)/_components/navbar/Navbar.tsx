"use client"
import React from 'react'
import MobileSidebar from '../sidebar/MobileSidebar'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-muted w-full h-[70px] flex items-center border-b border-muted-foreground/20 shadow-md shadow-primary/5  justify-between py-3 px-6'>
      <div>
        <MobileSidebar />
      </div>  
      <Link href={'/'}>      
        <div className='relative rounded-full overflow-hidden w-10 h-10 ring-2 ring-offset-1 ring-primary hover:opacity-80'>
          <Image
            src={'/avatar.jpeg'}
            alt='Logo'
            fill
            className='object-cover '
          />
        </div>
      </Link>
    </div>
  )
}

export default Navbar
