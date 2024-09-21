"use client";
import { Image as ImageType } from '@/types';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { cn } from '@/lib/utils';
import ImageContainer from './ImageContainer';

interface CarouselPageProps {
    images: ImageType[];
}

const CarouselPage = ({
    images
}: CarouselPageProps) => {
    const [selectedImage, setSelectedImage] = useState<string>("");
    const mainImage = images.filter(image => image.isMain === true);
    const ImgWitoutMain = images.filter(image => image.isMain === false);

    useEffect(() => {
        setSelectedImage(mainImage[0].source);
    }, [])

    const handleSelectedImage = (source: string) => {
        setSelectedImage(source)
    }

  return (
    <div>
        <div className='rounded-md border border-muted-foreground/20'>
            <Carousel className='md:hidden'>
                <CarouselContent>
                    <CarouselItem>
                        <ImageContainer
                            source={mainImage[0].source}
                            handleSelectedImage={() => handleSelectedImage(mainImage[0].source)}
                            selectedImage={selectedImage}
                            isCarousel
                        />
                    </CarouselItem>
                    {ImgWitoutMain.map((image) => (
                        <CarouselItem 
                            key={image.id} 
                        >
                            <ImageContainer
                                source={image.source}
                                handleSelectedImage={() => handleSelectedImage(image.source)}
                                selectedImage={selectedImage}
                                isCarousel
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className='relative hidden md:block aspect-video'>
                <Image
                    src={selectedImage}
                    alt='Image'
                    fill
                    className='object-fill rounded-md'
                />
            </div>
        </div>
        <div className='hidden md:grid grid-cols-4 gap-4 mt-5'>
            <ImageContainer
                source={mainImage[0].source}
                handleSelectedImage={() => handleSelectedImage(mainImage[0].source)}
                selectedImage={selectedImage}
            />
            {ImgWitoutMain.map((image: ImageType) => (
                <ImageContainer
                    key={image.id}
                    source={image.source}
                    handleSelectedImage={() => handleSelectedImage(image.source)}
                    selectedImage={selectedImage}
                />
            ))}
        </div>
    </div>
  )
}

export default CarouselPage
