'use client'

import Slider from 'react-slick'

export default function BrandSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  const brands = ['Tiffany & Co', 'Cartier', 'Bulgari', 'Van Cleef', 'Chopard']

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className="px-4">
              <div className="text-center text-gray-600 font-serif text-xl">
                {brand}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
