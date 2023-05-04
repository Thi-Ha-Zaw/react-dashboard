import React from "react";
import ContactTable from "../components/ContactTable";
import Profile from "../components/Profile";

const One = () => {
	
    return (
        <div>
            <div className=" px-3 lg:px-10 mt-10 grid grid-cols-12 gap-5">
                <div className=" col-span-12 md:col-span-8 lg:col-span-9">
                    <ContactTable />
                </div>
                <div className=" col-span-12 md:col-span-4 lg:col-span-3">
                    <Profile />
                </div>
            </div>
        </div>
    );
};

export default One;
