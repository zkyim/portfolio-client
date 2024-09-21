"use client"
import React, { useRef, useState } from 'react'
import SoshialLinks from '../_components/SoshialLinks'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useForm, ValidationError } from '@formspree/react';
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea';
import TitleElement from '../_components/TitleElement';

const ContactMe = () => {
    const [state, handleSubmit] = useForm("xkgwwdjp");
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [errorForm, setErrorForm] = useState('');
  
    const handleSubmiting = (e: any) => {
      if ((textareaRef.current && textareaRef.current.value.length === 0) || (inputRef.current && inputRef.current.value.length === 0)) {
        e.preventDefault();
        setErrorForm("All fields are required .")
      }else if ((textareaRef.current && textareaRef.current.value.length > 0) && (inputRef.current && inputRef.current.value.length > 0)) {
        setErrorForm("");
      }
    };
  return (
    <section>
        <TitleElement 
            title='Contact me'
        />
        <div className='mt-14 flex flex-col items-center justify-center gap-4'>
        <SoshialLinks isHorizonal />
        <div className='w-full parent-observe'>
            <div>
                <form onSubmit={handleSubmit} className='mx-auto max-w-[550px] '>
                <div className='p-2 text-red-600'>
                    {errorForm.length > 0 ? <div className='flex items-center -ml-5'> <Image src={"/x-mark.gif"} width={55} height={55} alt='image' /> {errorForm} </div> : ""}
                </div>
                <Input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder='Email Address ...'
                    className='outline-none border-[1.25px] border-muted-foreground/30 w-full px-4 py-2 rounded-md mb-3 shadow-xl shadow-primary/5 show-observe'
                    ref={inputRef}
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <Textarea
                    id="message"
                    name="message"
                    placeholder='Subject ...'
                    className='outline-none block border-[1.25px] border-muted-foreground/30 w-full px-4 py-2 rounded-md mb-3 min-h-[120px] shadow-xl shadow-primary/5 show-observe'
                    ref={textareaRef}
                />
                <ValidationError
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <div className='w-full flex justify-end items-center mt-3 gap-5'>
                    {state.succeeded ? <div className='flex items-center text-green-400'> <Image src={"/Animation - 1723161105485.gif"} alt={"image"} width={45} height={45} /> Thanks for joining!</div> : <div></div>}
                    <Button type="submit" className='shadow-xl shadow-primary/15 show-observe' disabled={state.submitting || state.succeeded} onClick={(e) => handleSubmiting(e)}>
                        {state.submitting ? "Submiting ..." : state.succeeded ? "Submited" : "Submit"}
                    </Button>
                </div>
                </form>
            </div>
            {/* <div className='hidden md:block '>
                <div className='w-full'>
                <div className='relative mx-auto max-w-[300px] max-h-[300px] show-observe'>
                    <Image
                    alt='image'
                    width={400}
                    height={400}
                    src="/email-marketing-7579810_1280.png"
                    className='object-cover rounded-full ring-2  shadow-2xl shadow-primary/25'
                    />
                </div>
                </div>
            </div> */}
        </div>
        </div>
    </section>
  )
}

export default ContactMe
