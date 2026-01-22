import { useState, useEffect } from "react";
import { Card } from "./Card";
import { FaArrowRight, FaArrowLeft  } from "react-icons/fa";

export const TopRestaurants = () => {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const fetchTopRestaurant = async () => {
      const response = await fetch("http://localhost:5173/data/TopRestaurents.json");
      const apiData = await response.json();
      setData(apiData);
    };
    fetchTopRestaurant();
  }, []);

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
    <div className="max-w-[1200px] mx-auto text-[#686b78] mb-[100px]">
      <div className="flex items-center justify-between my-3">
        <div className="text-[25px] font-bold text-black">
          Top restaurants in Dehradun
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

      {/* Outer viewport */}
      <div className="overflow-hidden">
        {/* Sliding track */}
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
       <hr className="my-7 border=[2px]" />
    </div>
  );
};
