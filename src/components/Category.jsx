import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import categoryData from "../data/category.json";

export const Category = () => {
  const [category] = useState(categoryData);
  const [slide, setSlide] = useState(0);

  const visibleItems = 7;
  const cardWidth = 150;

  const prevSlide = () => {
    if (slide === 0) return;
    setSlide(slide - 4);
  };

  const nextSlide = () => {
    if (slide >= category.length - visibleItems) return;
    setSlide(slide + 4);
  };

  return (
    <div className="max-w-[1300px] mx-auto text-[#686b78]">
      <div className="flex items-center justify-between my-3">
        <div className="text-[21px] font-family-Gilroy font-bold text-[#02060C] mb-6">
          What's on your mind?
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
          className="flex gap-4 transition-transform duration-300"
          style={{
            transform: `translateX(-${slide * cardWidth}px)`,
          }}
        >
          {category.map((item) => (
            <div
              key={item.id}
              className="shrink-0 w-[150px] text-center"
            >
              <img
                src={`/api-images/${item.image}`}
                alt={item.name}
                className="w-[155px] h-[150px] object-cover mx-auto"
              />
              <p className="mt-2 font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-7 border-[0.px]" />
    </div>
  );
};
