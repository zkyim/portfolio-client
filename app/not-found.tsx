import { ServerCrash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col gap-2 items-center justify-center'>
      <ServerCrash className='w-8 h-8 text-muted-foreground mb-2'/>
      <h3 className='text-muted-foreground'>This page not found.</h3>
      <Link href={'/'} className='text-muted-foreground underline'>Go to home.</Link>
    </div>
  )
}

export default NotFound