import React, { useState } from "react";
import { useUpdateContactMutation } from "../features/api/contactApi";
import Cookies from "js-cookie";

const EditModal = ({ contact, show, setShow }) => {

	const token = Cookies.get('token')
	
	const [UpdateContact] = useUpdateContactMutation();

	const [name, setName] = useState(contact?.name);
    const [address, setAddress] = useState(contact?.address);
    const [email, setEmail] = useState(contact?.email);
	const [phone, setPhone] = useState(contact?.phone);
	
	const handleEdit = async(e) => {
		e.preventDefault();
		const Contact = {name, email, phone, address}
		const {data} = await UpdateContact({ id:contact?.id,Contact, token })
		if(data?.success) setShow(!show)
    }

    return (
        <>
            <div
                id="authentication-modal"
                tabIndex="-1"
                aria-hidden="true"
                className={`fixed top-0 left-0 right-0 z-50 ${
                    show && "hidden"
                }  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
            >
                <div className="relative top-0 left-[35%] w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                            onClick={() => setShow(!show)}
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-hide="authentication-modal"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                Edit Your Contact App
                            </h3>
                            <form onSubmit={handleEdit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Jack"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="address"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your Address
                                    </label>
                                    <input
                                        value={address}
                                        onChange={e =>
                                            setAddress(e.target.value)
                                        }
                                        type="text"
                                        name="address"
                                        id="address"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Mandalay"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="PhoneNumber"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your PhoneNumber
                                    </label>
                                    <input
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        type="number"
                                        name="PhoneNumber"
                                        id="PhoneNumber"
                                        placeholder="09xxxxxxx"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Edit Your Contact
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditModal;
