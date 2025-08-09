import React from 'react'
import Image from 'next/image';
import type { SliderItem } from '@/data/SliderItems';

type HeroSliderItemProps = {    
    title: string;
    description: string;
    images: SliderItem['images'];
}

export default function HeroSliderItem({ title, description, images }: HeroSliderItemProps) {
  return (
    <article className='keen-slider__slide flex flex-col lg:grid lg:grid-cols-2  gap-6 min-w-full min-h-1/2 px-6 lg:px-24 py-12 '>
      <h2 className='text-center font-bold text-4xl lg:self-end '>{title}</h2>
      <p className='text-center text-xl lg:row-start-2'>{description}</p>
      <div className="flex lg:row-span-2 justify-center items-center gap-4">
        {images.map((image, index) => (
            <div key={index} className="relative w-48 h-48 lg:w-104 lg:h-104">
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={`absolute inset-0 w-48 mx-auto animate-float drop-shadow-xl ${index===1 ? 'translate-y-10' : ''}`}
                />
            </div>    
        ))}
      </div>    
    </article>
  )
}
