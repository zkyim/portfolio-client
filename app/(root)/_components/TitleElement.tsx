import { cn } from '@/lib/utils';
import React from 'react'

interface TitleElementProps {
    title: string;
    className?: string;
}

const TitleElement = ({
    title,
    className,
}: TitleElementProps) => {
  return (
    <div className={cn('text-3xl mb-12 px-6 text-center md:text-start', className)}>
        <span className='relative inline-block py-3 text-slate-600 dark:text-slate-300 px-1'>
            {title}
            <div className='absolute bottom-0 left-1/2 -translate-x-[50%] w-full h-1 bg-slate-600 dark:bg-slate-300 rounded-3xl'/>
            <div className='absolute bottom-0 translate-y-[35%] left-1/2 -translate-x-[50%] w-3 h-3 bg-slate-600 dark:bg-slate-300 rounded-full ring-4 ring-background'/>
        </span>
    </div>
  )
}

export default TitleElement
