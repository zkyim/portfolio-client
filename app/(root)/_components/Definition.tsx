"use client";
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BriefcaseBusiness, Download } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { socialLinks } from '../_constant/sochial-links';
import SoshialLinks from './SoshialLinks';
const Definition = () => {
  return (
    <section className="relative px-2 parent-observe">

      <div className="grid md:grid-cols-12 items-center gap-6">
        <SoshialLinks />

        <div className="md:col-span-6 flex flex-col items-center md:items-start gap-y-4 show-observe">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground capitalize">
            hi, i&apos;m <span className="typewriter-effect bg-background text-primary relative inline-block">MOHAMMED</span>
          </h2>
          <h5 className="text-xl md:text-2xl font-semibold capitalize">
            frontend developer
          </h5>
          <p className="leading-7 md:text-lg md:max-w-[85%] text-center md:text-start text-muted-foreground">
          Beginner in frontend developer web site and development knowledge,but producing quality work.
          </p>
          <div className="flex items-center gap-2 py-2">
            <a href="#projects" className={cn(buttonVariants({size: "lg"}), "shadow-xl shadow-primary/15 space-x-2")}>
              <span>my works</span>
              <BriefcaseBusiness className="size-4" />
            </a>
            <a href="/Blue Modern CV Resume.pdf" className={cn(buttonVariants({variant: "outline",size: "lg"}), "space-x-2")} target="_blank" download={true}>
              <span>download CV</span>
              <Download className="size-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-4 grid place-content-center show-observe">
          <div className="relative flex items-center justify-center size-80 md:size-96 rotate-ring">
            <Image width={290} height={290} alt="prfile" src={"/avatar-spiks.png"}  
              className="object-cover size-[80%] border-2 rounded-full ring-4 ring-primary ring-offset-4 ring-offset-background shadow-xl shadow-primary/10"
            />
          </div>
        </div>
      </div>
  </section>
  )
}

export default Definition
