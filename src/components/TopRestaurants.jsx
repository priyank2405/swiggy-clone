import { useState } from "react";
import { Card } from "./Card";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import topRestaurants from "../data/TopRestaurents.json";

export const TopRestaurants = () => {
  const [data] = useState(topRestaurants);
  const [slide, setSlide] = useState(0);

  const visibleItems = 4;
  const cardWidth = 320;

  const prevSlide = () => {
    if (slide === 0) return;
    setSlide(slide - 1);
  };

  const nextSlide = () => {
    if (slide >= data.length - visibleItems) return;
    setSlide(slide + 1);
  };

  return (
    <div className="max-w-[1270px] mx-auto text-[#686b78] mb-[100px]">
      <div className="flex items-center justify-between my-3">
        <div className="text-[25px] font-bold text-black">
          Top restaurants chains in Dehradun
        </div>

        <div className="flex">
          <div
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full m-1 cursor-pointer"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>

          <div
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full m-1 cursor-pointer"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-300"
          style={{
            transform: `translateX(-${slide * cardWidth}px)`,
          }}
        >
          {data.map((d, i) => (
            <Card {...d} key={i} />
          ))}
        </div>
      </div>

      <hr className="my-7 border-[0.px]" />
    </div>
  );
};
