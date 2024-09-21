"use client";
import { useEffect, useState } from 'react'
import { Progress } from '@/components/ui/progress';
import { Skill } from '@/types';

interface SkilItemProps {
    item: Skill;
}

const SkilItem: React.FC<SkilItemProps> = ({
    item,
}) => {
    const [progress, setProgress] = useState<number>(0)
    useEffect(() => {
      const number = Number(item.percentage);
      const timer = setTimeout(() => setProgress(number), 350)
      return () => clearTimeout(timer)
    }, [item.percentage])
  return (
    <article className='grid gap-2'>
        <div className='flex items-center justify-between gap-8 px-4'>
            <h4 className='capitalize text-foreground'>{item.tool}</h4>
            <h4 className='text-primary'>%{item.percentage}</h4>
        </div>
        <Progress value={progress} className='h-1.5 shadow-xl shadow-primary'/>
    </article>
  )
}

export default SkilItem
