import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function SideNav(props:any) {
    const menus = [
        { name: "dashboard", link: "/", icon: MdOutlineDashboard },
        { name: "user", link: "/user", icon: AiOutlineUser },
        { name: "messages", link: "/message", icon: FiMessageSquare, margin: true },
        { name: "Setting", link: "/setting", icon: RiSettings4Line },
      ];
  return (
    <section className={`flex gap-6 fixed shadow  `}>
      <div
        className={`   bg-gradient-to-r from-primary to-secondary min-h-screen ${
          props.sideopen ? "w-[50vw] sm:w-[50vw] md:w-[20vw] lg:w-[15vw]  lg:block md:block   " : "w-[4vw]  hidden lg:block md:block  "
        } duration-500 text-gray-100 px-4  `}
      >
        <div className={`  mt-3 ml-[5rem]  hidden sm:hidden md:block` }>
            <img
              className="block h-8 w-auto lg:hidden"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <img
              className="hidden h-8 w-auto lg:block"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
        <div className={`top-[5rem] sm:top-[5rem] absolute  md:top-[6rem] flex flex-col gap-4 ${
          props.sideopen ? "w-[11rem] sm:w-[11rem] md:w-[16rem] lg:w-[16rem]    " : "w-[3rem]   "
        } `}>
          {menus?.map((menu, i) => (
            <NavLink
              key={i}
              to={menu.link} 
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-lg  gap-3.5 font-sm p-2 hover:bg-gray-800 rounded-md`}
            >
              <div className="p-1" >{React.createElement(menu?.icon, { size: "23" })}</div>
              <h2
                style={{
                  transitionDelay: `50ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !props.sideopen && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  props.sideopen && "hidden"
                } absolute left-48 bg-gradient-to-r from-primary to-secondary  font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </NavLink>
          ))}
        </div>
      </div>
    
    </section>
  )
}

export default SideNav