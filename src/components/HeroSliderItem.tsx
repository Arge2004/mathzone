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
    <article className='keen-slider__slide flex flex-col gap-6 min-w-full min-h-1/2 px-6 py-12 '>
      <h2 className='text-center font-bold text-4xl'>{title}</h2>
      <p className='text-center text-xl'>{description}</p>
      <div className="flex justify-center items-center gap-4">
        {images.map((image, index) => (
            <div key={index} className="relative w-48 h-48">
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
