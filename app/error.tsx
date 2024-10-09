"use client";
import { ServerCrash } from 'lucide-react'
import React from 'react'

const error = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col gap-2 items-center justify-center'>
      <ServerCrash className='w-8 h-8 text-muted-foreground mb-2'/>
      <h3 className='text-muted-foreground'>There is an error.</h3>
      <h3 className='text-muted-foreground'>Try agin.</h3>
    </div>
  )
}

export default error
