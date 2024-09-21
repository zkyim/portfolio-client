import { getProject } from '@/actions/get-project'
import Image from 'next/image';
import React from 'react'
import CarouselPage from './_components/Carousel';
import { Preview } from '@/components/Preview';
import { Calendar, Github, LayoutDashboard, Paperclip, Tags } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ProjectIdPage = async ({
    params
}: {
    params: {projectId: string}
}) => {
  const projectData = await getProject({...params});
  return (
    <div className='grid md:grid-cols-2 gap-8 md:gap-6'>
      <CarouselPage images={projectData.images}/>
      <div className='mt-3'>
        <div className='border-b-[1.5px] border-input'>
            <h3 className='text-xl text-muted-foreground'>{projectData.title}</h3>
            <p className='-mx-2'><Preview value={projectData.description}/></p>
        </div>
        <div className='border-b-[1.5px] border-input'>
            <div className='grid grid-cols-3 items-center mt-5'>
                <span className='flex items-center gap-1 text-muted-foreground'><Calendar className='w-4 h-4'/> Puplished at: </span>
                <span>{projectData.published_At}</span>
            </div>
            <div className='grid grid-cols-3 items-center mt-5'>
                <span className='flex items-center gap-1 text-muted-foreground'><LayoutDashboard className='w-4 h-4'/> Layout: </span>
                <span>{projectData.isResponsible ? "Resoposive" : "Not resoposive"}</span>
            </div>
            <div className='grid grid-cols-3 items-center mt-2.5 mb-3'>
                <span className='flex items-center gap-1 text-muted-foreground'><Tags className='w-4 h-4'/> Tags: </span>
                <ul className='flex flex-wrap items-center gap-2 p-2 rounded-md col-span-2'>
                    {projectData.tools.split(",").map((tool) => {
                        if (tool !== "") {
                        return (
                            <li key={tool} className='flex items-center border border-input rounded-md px-2.5 py-1.5 w-fit h-fit gap-1.5'> 
                            {tool}
                            </li>
                        )
                        }
                    })}
                </ul>
            </div>
        </div>
        <div className='flex items-center justify-end gap-4 mt-3 px-2'>
            <Link
                href={projectData.demo} 
                className='flex items-center gap-1 bg-primary/90 hover:opacity-75 transition-opacity w-fit px-4 py-1.5 rounded-md text-white'
            >
                Demo 
                <Paperclip className='w-3 h-3'/>
            </Link>
            <Link 
                href={projectData.githubUrl} 
                className='flex items-center gap-1 bg-zinc-500 hover:opacity-75 transition-opacity w-fit px-4 py-1.5 rounded-md text-white'
            >
                GitHub 
                <Github className='w-2.5 h-2.5'/>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectIdPage
