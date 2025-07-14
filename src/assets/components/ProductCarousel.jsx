import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProductCarousel({ images }) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        className="w-full h-[250px] sm:h-[350px] md:h-[450px]
          [&_.swiper-button-prev]:text-gray-600 sm:[&_.swiper-button-prev]:block [&_.swiper-button-prev]:hidden
          [&_.swiper-button-next]:text-gray-600 sm:[&_.swiper-button-next]:block [&_.swiper-button-next]:hidden
        "
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Product ${index}`}
              className="w-full h-full object-contain rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductCarousel;
