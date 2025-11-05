'use client'

import HeroSection from '@/components/HeroSection'
import BrandSlider from '@/components/BrandSlider'
import ProductSection from '@/components/ProductSection'
import AlwaysOnTrend from '@/components/AlwaysOnTrend'
import WhyChooseUs from '@/components/WhyChooseUs'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandSlider />
      <ProductSection title="Trending Now" />
      <ProductSection title="Best Selling" />
      <AlwaysOnTrend />
      <WhyChooseUs />
    </>
  )
}

