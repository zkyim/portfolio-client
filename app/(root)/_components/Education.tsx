"use client";
import { Preview } from '@/components/Preview';
import { Education as EducationType } from '@/types';
import { ChevronsUp } from 'lucide-react';
import React, { useRef, useState } from 'react'
import { format } from "date-fns"
import TitleElement from './TitleElement';

interface EducationProps {
    education: EducationType[];
}

const Education = ({
    education
}: EducationProps) => {
    const ulRef = useRef<any>(null);
    const [progress, setProgress] = useState<number | string>(100);
    const startSection = 370;
    window.onscroll = () => {
      if (window.scrollY >= (ulRef.current?.offsetTop - startSection) ) {
        ulRef.current?.children[0]
        let heightValue: number | string = 100 - Number(((window.scrollY - (ulRef.current?.offsetTop - startSection)) / ulRef.current?.scrollHeight * 100).toFixed(1));
        setProgress(heightValue);
      }
      for (let i = 1; i < ulRef.current?.children.length; i++) {
        if (ulRef.current?.children[i].getBoundingClientRect().top - startSection <= 0) {
            ulRef.current?.children[i].classList.add("active");
        }else {
            ulRef.current?.children[i].classList.remove("active");
        }
      }
      return () => (window.onscroll = null);
    };
  return (
    <section id="education">
      <TitleElement 
        title='Education'
      />
      <div className="flex justify-start lg:justify-center parent-observe">
        <ul className="time-line relative" ref={ulRef}>
            <span className="muted-line bg-background/80" style={{height: `${progress}%`}}/>
            {education.map( (education: EducationType, index: number) => {
              return (
                <li className="relative w-1 py-2" key={index}>
                  <span className="the-line"></span>
                  <div className="relative w-[300px] md:w-[400px] bg-muted border border-muted-foreground/10 top-0 shadow-xl shadow-primary/10 rounded-md py-3 pt-4 px-6 mt-2 show-observe">
                      <span className="date absolute top-0 -translate-y-[50%] py-1 px-3 bg-green-400 rounded-md text-white text-sm shadow-lg shadow-green-400/15">{format(education.year, "yyyy")}</span>
                      <h3 className="text-foreground text-xl"> {education?.title} </h3>
                      <p className="text-[15px] mt-1">
                        <Preview 
                            value={education.description}
                        />
                      </p>
                  </div>
                  <span className="circle-eduction text-black dark:text-white border-2 border-[#cde5f8] dark:border-background"></span>
              </li>
              );
            })}
            <a className="last-circle flex items-center justify-center text-black dark:text-white border-2 border-[#cde5f8] dark:border-background" href="#education">
                <ChevronsUp className=""/>
            </a>
        </ul>
      </div>
    </section>
  )
}

export default Education
