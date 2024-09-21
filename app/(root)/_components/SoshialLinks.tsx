"use client"
import React from 'react'
import { socialLinks } from '../_constant/sochial-links';
import { cn } from '@/lib/utils';
import { SendHorizonal } from 'lucide-react';

const SoshialLinks = ({
    isHorizonal,
}: {
    isHorizonal?: boolean;
}) => {
  return (
    <ul className={cn("flex  gap-4 items-center size-fit rounded-lg mx-auto py-2 px-8 border border-muted-foreground/20 rounded-3x show-observe",
        isHorizonal && "flex-row",
        !isHorizonal && "md:flex-col md:py-6 md:px-2"
    )}>
        {socialLinks.map((link, index)=> {
        const {href, icon:Icon, color} = link;
        return (
            <li key={index} className={cn("hover:opacity-80 transition-opacity", color)}>
            <a href={href} target="_blank">
                <Icon className="size-4"/>
            </a>
            </li>
        )
        })}
    </ul>
  )
}

export default SoshialLinks
