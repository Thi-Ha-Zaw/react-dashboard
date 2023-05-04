import React, { useState } from "react";
import avatar from "../images/avatar.jpg";
import Cookies from "js-cookie";
import { AiOutlineAlignRight } from 'react-icons/ai';
import { useLogoutUserMutation } from "../features/api/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RemoveUser } from "../features/services/authSlice";

const Navbar = ({setShwoSideBar,showSidebar}) => {

	const [show, setShow] = useState(true)

	const nav = useNavigate();

	const user = JSON.parse(Cookies.get('user'))
	const token = Cookies.get('token')

	const [logoutUser] = useLogoutUserMutation();

	const dispatch = useDispatch();

	const handleSignOut = async() => {
		const { data } = await logoutUser(token)
		dispatch(RemoveUser())
		if(data?.success) nav('/login')
    }
    
	
    return (
        <div className=" sticky top-0 left-0 z-30 bg-white w-full py-3 shadow-md flex justify-between items-center">
            <div className=" ps-5 flex items-center gap-1">
                <AiOutlineAlignRight onClick={()=>setShwoSideBar(!showSidebar)} className=" text-xl block lg:hidden" />
                <p className=" text-2xl  text-black font-title">Dashboard</p>
            </div>
			<div>
				<div className=" pr-5">
					<img onClick={()=>setShow(!show)} src={avatar} alt="" className=" rounded-full border-white shadow-lg border-4 cursor-pointer" />
				</div>
                <div
                    id="dropdownInformation"
                    className={`z-10 ${show && 'hidden'} bg-white divide-y fixed right-6 divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                >
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
						<p className=" pb-2">{user?.name}</p>
                        <div className="font-medium text-xs truncate">
                           {user?.email}
                        </div>
                    </div>
                    
                    <div className="py-2">
                        <button
                            onClick={handleSignOut}
                            className="block w-full py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                            Sign out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
