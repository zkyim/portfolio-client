"use client"
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useTranslation } from 'react-i18next'

interface RouteProps {
    label: string;
    href: string;
    icon: LucideIcon;
    isActive: boolean;
    className?: string;
}

const Route = ({ label, href, icon: Icon, isActive, className }: RouteProps) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const onClick = () => {
    router.push(href);
  }
  return (
    <>
      <div onClick={onClick}>
        <div 
          className={cn('relative group w-full flex items-center py-3 px-2 cursor-pointer text-muted-foreground transition-all',
            className,
          )}
        >
          <span className='px-3'>
            <Icon strokeWidth={1.6} className={cn('w-6 h-6 group-hover:text-primary/40', isActive && "text-primary/90")}/>
          </span>
          <span className={cn('leading-7 tracking-wide group-hover:text-primary/60 font-medium', isActive && "text-primary/90")}>{t(label)}</span>
          <div className={cn("absolute inset-0 w-1 bg-muted-foreground/25 h-full", isActive && "bg-primary/95 group-hover:bg-primary")}/>
          <div className={cn("absolute inset-0 w-1 h-0 group-hover:bg-muted-foreground/60 group-hover:h-full transition-all", isActive && "bg-primary/95 group-hover:bg-primary")}/>
        </div>
      </div>
    </>
  )
}

export default Route
