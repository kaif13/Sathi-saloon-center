import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageCarousel = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize("mobile");
      else if (width < 1024) setScreenSize("tablet");
      else setScreenSize("desktop");
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const images = {
    mobile: [
      { image: "/images/Carousel/phone/beard.jpg", productId: 1 },
      { image: "/images/Carousel/phone/skin.jpg", productId: 2 },
      { image: "/images/Carousel/phone/facial-kit.jpg", productId: 4 },
      { image: "/images/Carousel/phone/facewash.jpg", productId: 3 },
      { image: "/images/Carousel/phone/trimmer.jpg", productId: 6 },
    ],
    tablet: [
      { image: "/images/Carousel/phone/beard.jpg", productId: 1 },
      { image: "/images/Carousel/phone/skin.jpg", productId: 2 },
      { image: "/images/Carousel/phone/facial-kit.jpg", productId: 4 },
      { image: "/images/Carousel/phone/facewash.jpg", productId: 3 },
      { image: "/images/Carousel/phone/trimmer.jpg", productId: 6 },
    ],
    desktop: [
      { image: "/images/Carousel/beard.jpg", productId: 1 },
      { image: "/images/Carousel/skin.jpg", productId: 2 },
      { image: "/images/Carousel/Vlcc.jpg", productId: 4 },
      { image: "/images/Carousel/facewash.jpg", productId: 3 },
      { image: "/images/Carousel/trimmer.jpg", productId: 6 },
    ],
  };

  const activeImages = images[screenSize] || images.desktop;

  return (
    <div className="w-full h-[30vh] md:h-[30vh] sm:h-[60vh] lg:h-[70vh]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-full
          [&_.swiper-button-prev]:text-white
          [&_.swiper-button-prev]:font-bold
          [&_.swiper-button-prev]:text-xl
          [&_.swiper-button-next]:text-white
          [&_.swiper-button-next]:font-bold
          [&_.swiper-button-next]:text-xl
          [&_.swiper-button-prev]:hidden sm:[&_.swiper-button-prev]:block
    [&_.swiper-button-next]:hidden sm:[&_.swiper-button-next]:block"
      >
        {activeImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link to={`/product/${slide.productId}`}>
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-full h-[30vh] md:h-[30vh] sm:h-[60vh] lg:h-[70vh] object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
