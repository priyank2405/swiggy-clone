import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft  } from "react-icons/fa";

export const Category = () => {
  const [category, setCategory] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch("./data/category.json");
      const data = await response.json();
      setCategory(data);
    };
    fetchCategory();
  }, []);

  const visibleItems = 7;

  const prevSlide = () => {
    if (slide === 0) return;
    setSlide(slide - 4);
  };
  const nextSlide = () => {
    if (slide >= category.length - visibleItems) return;
    setSlide(slide + 4);
  };

  return (
    <div className="max-w-[1200px] mx-auto text-[#686b78]">
      <div className="flex items-center justify-between my-3">
        <div className="text-[21px] font-family-Gilroy font-bold text-[#02060C] mb-6">What's on your mind?</div>
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
              className="w-[155px] h-[150px] object-cover mx-auto"
            />
            <p className="mt-2 font-medium">{item.name}</p>
          </div>
        ))}
      </div>
      <hr className="my-7 border=[2px]" />
    </div>
  );
};
