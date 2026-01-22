import { useState, useEffect } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

export const Category = () => {
  const [category, setCategory] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch("http://localhost:5173/data/category.json");
      const data = await response.json();
      setCategory(data);
    };
    fetchCategory();
  }, []);

  const visibleItems = 8;

  const prevSlide = () => {
    if (slide === 0) return;
    setSlide(slide - 1);
  };
  const nextSlide = () => {
    if (slide >= category.length - visibleItems) return;
    setSlide(slide + 1);
  };

  return (
    <div className="max-w-[1200px] mx-auto text-[#686b78]">
      <div className="flex items-center justify-between my-3">
        <div className="text-[25px] font-bold text-black">What's on your mind?</div>
        <div className="flex">
          <div
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full m-1 cursor-pointer"
            onClick={prevSlide}
          >
            <FaArrowCircleLeft />
          </div>
          <div
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full m-1 cursor-pointer"
            onClick={nextSlide}
          >
            <FaArrowCircleRight />
          </div>
        </div>
      </div>

      {/* Show data from JSON */}
      <div className="flex gap-4 overflow-hidden transition-transform duration-300">
        {category.map((item) => (
          <div
            key={item.id}
            style={{
              transform: `translateX(-${slide * 150}px)`,
            }}
            className="flex-grow shrink-0 min-w-[120px] text-center"
          >
            <img
              src={`/api-images/${item.image}`}
              alt={item.name}
              className="w-[135px] h-[135px] object-cover mx-auto rounded-full"
            />
            <p className="mt-2 font-medium">{item.name}</p>
          </div>
        ))}
      </div>
      <hr className="my-6 border=[2px]" />
    </div>
  );
};
