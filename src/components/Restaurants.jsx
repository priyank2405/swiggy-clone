import { useState } from "react";
import restaurants from "../data/Restaurants.json";
import { Card } from "./Card";

export const Restaurants = () => {
  const [data] = useState(restaurants);

  return (
    <div className="max-w-[1270px] mx-auto text-[#686b78] mb-[100px]">
      <div className="flex items-center justify-between my-8">
        <div className="text-[25px] font-bold text-black">
          Restaurants with online food delivery in Dehradun
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {data.map((d, i) => (
          <Card key={i} {...d} image={d.image} variant="grid" />
        ))}
      </div>
    </div>
  );
};
