import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

interface ImageContainerProps {
    selectedImage: string;
    source: string;
    handleSelectedImage: () => void;
    isCarousel?: boolean;
}

const ImageContainer = ({
    selectedImage,
    source,
    handleSelectedImage,
    isCarousel
}: ImageContainerProps) => {
  return (
    <div 
        className={cn('relative aspect-video overflow-hidden',
            !isCarousel && "opacity-75 hover:opacity-100 rounded-md border border-muted-foreground/20",
            selectedImage === source && "opacity-100 border-black"
        )}
        onClick={handleSelectedImage}
    >
        <Image
            src={source}
            alt='Image'
            fill
            className={cn('object-fill', 
                !isCarousel && "hover:scale-110 transition-all cursor-pointer"
            )}
        />
    </div>
  )
}

export default ImageContainer
