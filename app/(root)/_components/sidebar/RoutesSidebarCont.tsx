"use client";
import React from 'react'
import { Logo } from './Logo'
import { Actions } from './Actions'
import { Separator } from '@/components/ui/separator';
const RoutesSidebarCont = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  return (
    <div className='bg-muted py-3 h-full'>
      <div className='flex flex-col items-center h-full w-full'>
        <div className=' w-fit h-fit my-2'>
            <Logo box/>
        </div>
        <Separator className='my-3 bg-muted-foreground/20'/>
        <div className='flex-1 w-full'>
          {children}
        </div>
        <div className='w-full'>
          <Actions />
        </div>
      </div>
    </div>
  )
}

export default RoutesSidebarCont
