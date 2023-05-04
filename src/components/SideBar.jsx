import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsChevronDown, BsFillLayersFill } from "react-icons/bs";
import { FiBookOpen, FiLayers } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <>
            <div className=" mt-10 ps-5">
                <p className=" text-lg uppercase  tracking-wider">Main</p>
            </div>
            <div className=" flex flex-col gap-1  mt-5">
                <Link to='/'>
                    <div className=" px-5 py-2 hover:bg-blue-500 transition duration-300 hover:text-white flex justify-between items-center">
                        <div className=" flex gap-3 items-end">
                            <AiOutlineHome className=" text-2xl" />
                            <span className="">Dashboard</span>
                        </div>
                        <BsChevronDown />
                    </div>
                </Link>
                <Link to='/two'>
                    <div className=" flex gap-3 items-end hover:bg-blue-500 transition duration-300 hover:text-white py-2 px-5">
                        <FiBookOpen className=" text-2xl" />
                        <span className="">CMS</span>
                    </div>
                </Link>
                <Link to='/three'>
                    <div className=" flex gap-3 items-end hover:bg-blue-500 transition duration-300 hover:text-white py-2 px-5">
                        <FiLayers className=" text-2xl" />
                        <span className="">Contact</span>
                    </div>
                </Link>
                <Link to='/four'>
                    <div className=" flex gap-3 items-end hover:bg-blue-500 transition duration-300 hover:text-white py-2 px-5">
                        <FaRegUser className=" text-2xl" />
                        <span className="">User</span>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default SideBar;
