import React from 'react'
import HeroSlider from "@/components/HeroSlider";   
import HeroSliderItem from "@/components/HeroSliderItem";
import {items} from "@/data/SliderItems";
import type { SliderItem } from "@/data/SliderItems";

export default function HeroSection() {
  return (
    <section className="min-h-1/2" >
      <HeroSlider>
        {items.map((item: SliderItem) => (
          <HeroSliderItem
            key={item.title}
            title={item.title}
            description={item.description}
            images={item.images}
          />
        ))}
      </HeroSlider>
    </section>
  )
}

