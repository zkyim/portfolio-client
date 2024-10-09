"use client";
import React from 'react'
import { usePathname } from 'next/navigation';
import Route from './Route';
import { routes } from "../constant/routes"

export const Routes = () => {
  const pathname = usePathname();
  return (
    <div className='w-full h-full py-2 '>
        {routes.map((route) => {
            return (
              <Route key={route.href} href={route.href} label={route.label} icon={route.icon} isActive={pathname === route.href || (route.href !== "/" && pathname.includes(route.href))} />
            )
        })}
    </div>
  )
}
