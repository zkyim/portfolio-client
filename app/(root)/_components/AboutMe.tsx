"use client";
import React from 'react'
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { BriefcaseBusiness, Dumbbell, Headphones, Medal } from 'lucide-react';
import { Statistics } from "@/types"
import TitleElement from './TitleElement';

const AboutMe = ({
    projectCount,
}: {
    projectCount: number,
}) => {
    const statistics: Statistics[] = [
        {
            title: "Experience",
            label: "Years",
            value: new Date().getFullYear() - 2023,
            icon: BriefcaseBusiness,
        },
        {
            title: "Completed",
            label: "Projects",
            value: projectCount,
            icon: Medal,
        },
        {
            title: "Support",
            label: "Online",
            value: "24/7",
            icon: Headphones,
        },
    ];
  return (
    <section className="relative">
    <TitleElement
      title="About me"
    />
    <article className='relative mx-auto p-6 md:grid md:grid-cols-9 gap-4 min-h-[300px] parent-observe'>
      <div className='col-span-3 mb-5 md:mb-0 relative show-observe'>
        <div className='w-fit h-fit m-auto cover-image relative shadow-xl shadow-primary/10'>
          <Image src={"/avatar.png"} alt='image' width={250} height={300} className='z-[2]'/>
        </div>
      </div>
      <div className='col-span-6 ml-3 md:flex md:justify-between md:flex-col show-observe'>
        <div>
          <div>
            <h3 className="text-primary font-bold tracking-wide text-xl md:text-3xl -ml-2">About</h3>
          </div>
          <p className="text-muted-foreground">I am currently studying at the Faculty of Computer Science. I learned programming through some websites and programs approved on the Internet before entering college.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center md:items-end mt-5'>
          {statistics.map((statistic, index)=> {
            const {title, value, label, icon:Icon} = statistic;
            return (
              <div key={index} className='flex flex-col items-center border border-muted-foreground/20 p-3 rounded-xl shadow-md shadow-primary/10 mb-2 hover:mb-0 transition-all duration-500 show-observe'>
                <Icon className='size-7 font-normal text-primary/85 ' />
                <p className='font-semibold mt-1'>{title}</p>
                <p className=''>{value + " + " + label}</p>
              </div>
            );
          })}
          <a href="#skills" className={cn(buttonVariants({size: "lg"}), "shadow-xl shadow-primary/15 space-x-2 show-observe")}>
            <span>discover skills</span>
            <Dumbbell className='size-4'/>
          </a>
        </div>
      </div>
    </article>
  </section>
  )
}

export default AboutMe
