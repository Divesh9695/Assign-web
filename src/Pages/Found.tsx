import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mobial from "./Mobial"
const testimonials = [
  {
    id: 1,
    name: "Azizur Rahman",
    message:
      "Instant & Easy to build up my own business, It's a great way to start making the opportunity to us. Thanks and Pray for the opportunity 🙏",
  },
  {
    id: 2,
    name: "Priya Desai",
    message:
      "Websites.co.in helped me get online in minutes. It's so intuitive and effective! I love it 😍",
  },
  {
    id: 3,
    name: "John Doe",
    message:
      "Simple, fast, and reliable! Building my website was never this easy. Highly recommended!",
  },
];

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-700 hover:text-black md:block hidden"
  >
    <FaArrowLeft size={24} />
  </button>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-700 hover:text-black md:block hidden"
  >
    <FaArrowRight size={24} />
  </button>
);

const FoundCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
    <div className="bg-white text-center px-4 py-12">
      {/* Full-width background */}
      <div className="w-full bg-gray-100 py-10 mt-10 md:mt-20">
        {/* Centered content inside full-width bg */}
        <div className="px-4 sm:px-6 mx-auto relative rounded-xl shadow-md max-w-screen-lg">
          <Slider {...settings}>
            {testimonials.map((t) => (
              <div key={t.id} className="px-2">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold underline mb-4">
                  4 Million Happy Customers{" "}
                  <span className="font-normal">Throughout The World Use</span>
                  <br />
                  Websites.co.in <span className="text-xl">😍</span>
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
                  {t.message}
                </p>
                <div className="flex items-center justify-center gap-1 mt-4 text-yellow-500 text-lg">
                  {"★★★★★".split("").map((star, index) => (
                    <span key={index}>{star}</span>
                  ))}
                </div>
                <p className="mt-2 font-semibold text-sm sm:text-base">
                  {t.name}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    <Mobial />
    </>
  );
};

export default FoundCarousel;
