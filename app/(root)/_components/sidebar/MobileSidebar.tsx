"use client";
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
  } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { useDirection } from '@/stroe/use-dirction';
import RoutesSidebarCont from './RoutesSidebarCont';
import { Routes } from './Routes';
  
const MobileSidebar = () => {
  const { isDirectionLtr } = useDirection();
  return (
    <Sheet>
      <SheetTrigger className='lg:hidden p-1 border-transparent'>
        <Menu className='h-5 w-5'/>
      </SheetTrigger>
      <SheetContent className='p-0' side={isDirectionLtr ? 'left' : 'right'}>
        <RoutesSidebarCont>
          <SheetClose>
            <Routes />
          </SheetClose>
        </RoutesSidebarCont>
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
