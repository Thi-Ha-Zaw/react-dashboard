import React, { useState } from "react";
import Cookies from "js-cookie";
import { useGetContactsQuery, useRemoveContactMutation } from "../features/api/contactApi";
import Contact from "./Contact";

const ContactTable = () => {
    const token = Cookies.get("token")

    const { data } = useGetContactsQuery(token);


    let NPage;
    let numbers;

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerpage = 7;
    const lastIndex = currentPage * recordsPerpage;
    const firstIndex = lastIndex - recordsPerpage;
    const records = data?.contacts?.data?.slice(firstIndex, lastIndex);

    if (data?.contacts?.data?.length > 0) {
        NPage = Math.ceil(data?.contacts?.data?.length / recordsPerpage);
        numbers = [...Array(NPage + 1).keys()].slice(1);
    }

    const CurrentNpage = (id) => {
       setCurrentPage(id)
    }

    const PrePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const NextPage = () => {
        if (currentPage !== NPage) {
            setCurrentPage(currentPage + 1)
        }
    }




    return (
        <div className="">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {records?.map(contact => (
                            <Contact key={contact?.id} contact={contact} />
                        ))}
                    </tbody>
                </table>
            </div>
            <nav aria-label="Page navigation example" className=" mt-5">
                <ul className="inline-flex -space-x-px">
                    <li>
                        <button
                            onClick={PrePage}
                            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Previous
                        </button>
                    </li>
                    {
                        numbers?.map((n, i) => (
                            <li key={i}>
                            <button
                                onClick={()=>CurrentNpage(n)}
                                className={`px-3 ${currentPage === n && 'active'} py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                            >
                               {n}
                            </button>
                            </li>
                        ))
                    }
                    <li>
                        <button
                            onClick={NextPage}
                            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
           
        </div>
    );
};

export default ContactTable;
