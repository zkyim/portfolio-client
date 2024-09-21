import { getProjects } from '@/actions/get-projects';
import React from 'react'
import Search from './_components/Search';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarClock, CalendarIcon, Github, Paperclip } from 'lucide-react';
import TitleElement from '../_components/TitleElement';



const page = async ({searchParams} : {searchParams: {title: string; description: string}}) => {

  const projects = await getProjects({...searchParams});

  return (
    <>
      <TitleElement 
        title='Projects'
        className="px-1 mb-6"
      />
      <div className='px-3'>
        <Search />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-6'>
          {projects.map(project => {
            const mainImage = project.images.filter(image => image.isMain === true);
            return(
              <Link 
                href={`/projects/${project.id}`} 
                key={project.id}
                className='group border border-muted-foreground/20 rounded-md p-3'
              >
                <div className='relative aspect-video group-hover:opacity-75 border border-muted-foreground/20 rounded-md overflow-hidden'>
                  <Image 
                    src={mainImage[0].source}
                    alt='Image'
                    fill
                  />
                </div>
                <div className='mt-2'>
                  <h3 className='text-muted-foreground text-md font-medium truncate px-2'>{project.title}</h3>
                  <div className='px-3 text-sm mt-1 space-x-1'>
                    <span>{project.tools.split(",").length}</span>
                    <span className='text-muted-foreground'>Tools</span>
                  </div>
                  <div className='flex items-center gap-1 px-1.5 mt-1'>
                    <CalendarIcon className='w-4 h-4'/>
                    <span className='text-sm text-muted-foreground'>{project.published_At}</span>
                  </div>
                  <div className='flex items-center justify-start gap-4 mt-3 px-2'>
                    <Link 
                      href={project.demo} 
                      className='flex items-center gap-1 text-sm bg-primary/90 hover:opacity-75 transition-opacity w-fit px-2.5 py-1 rounded-md text-white'
                      
                    >
                      Demo 
                      <Paperclip className='w-2.5 h-2.5'/>
                    </Link>
                    <Link 
                      href={project.githubUrl} 
                      className='flex items-center gap-1 text-sm bg-zinc-500 hover:opacity-75 transition-opacity w-fit px-2.5 py-1 rounded-md text-white'
                      
                    >
                      GitHub 
                      <Github className='w-2.5 h-2.5'/>
                    </Link>
                  </div>
                </div>
              </Link>
          )})}
        </div>
      </div>
    </>
  )
}

export default page
