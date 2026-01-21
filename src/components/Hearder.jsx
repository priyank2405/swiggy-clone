import { PiCaretDownLight } from "react-icons/pi";
import { useState } from "react";

export const Header = () => {
    const [toggle, setToggle] = useState(false)

    const showSideMenu = () =>{
        setToggle(true)
    }
    const hideSideMenu =() =>{
        setToggle(false);
    }

  return (
    <>
    <div className="black-overlay h-full w-full fixed duration-500" onClick={hideSideMenu} style={{
        opacity: toggle? 1 : 0,
        visibility: toggle ? "visible" : "hidden"
    }}>
        <div onClick={(e) => e.stopPropagation()} className="w-[600px] bg-white h-full absolute duration-[400ms]" style={{
            left: toggle ? "0%" : "-100%"
        }}></div>
    </div>
      <header className="p-[15px] shadow-xl text-[#686b78]">
        <div className="max-w-[1200px] mx-auto border border-red-500 flex items-center">
          <div className="w-[100px]">
            <img src="images/logo.png" alt="swiggy logo" className="w-full" />
          </div>
          <div> 
            <span className="font-bold border-b-[3px]">Rispana Pull</span> Dehradun, Uttarakhand, India  <PiCaretDownLight  fontSize={20} className="inline text-[#fc8019] cursor-pointer " onClick={showSideMenu}/> </div>
            <nav className="ml-auto">
                <ul className="flex gap-5 font-semibold text-[18px]">
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </div>
      </header>
    </>
  );
};
