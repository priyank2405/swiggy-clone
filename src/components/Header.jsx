import { useState } from "react";
import { PiCaretDownLight } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosHelpBuoy } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BsCart } from "react-icons/bs";



export const Header = () => {
    const [toggle, setToggle] = useState(false)

    const showSideMenu = () =>{
        setToggle(true)
    }
    const hideSideMenu =() =>{
        setToggle(false);
    }
    const links = [
      {
        icon:<IoIosSearch />,
        name:"Search"
      },
      {
        icon:<CiDiscount1 />,
        name:"Discount"
      },
      {
        icon:<IoIosHelpBuoy />,
        name:"Help"
      },
      {
        icon:<MdOutlinePersonOutline />,
        name:"Sign In"
      },
      {
        icon:" ",
        name:"Cart"
      }
    ]

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
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img src="images/logo.png" alt="swiggy logo" className="w-full" />
          </div>
          <div> 
            <span className="font-bold border-b-[3px]">Rispana Pull</span> Dehradun, Uttarakhand, India  <PiCaretDownLight  fontSize={20} className="inline text-[#fc8019] cursor-pointer " onClick={showSideMenu}/> </div>
            <nav className="ml-auto flex list-none gap-10 font-semibold text-[18px]">
              {
                links.map((link, index) =>{
                 return <li  key={index} className="flex hover:text-[#fc8019] items-center gap-2">
                      {link.icon}
                      {link.name}
                    </li>
                })
              }
            </nav>
        </div>
      </header>
    </>
  );
};
