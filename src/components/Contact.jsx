import React, { useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import Cookies from "js-cookie";
import { useRemoveContactMutation, useUpdateContactMutation } from "../features/api/contactApi";
import EditModal from "./EditModal";

const Contact = ({ contact }) => {

	const token = Cookies.get("token")

	const [RemoveContact] = useRemoveContactMutation();
	

    const [show, setShow] = useState(true);


	const handleDelete = async (id) => {
        const data = await RemoveContact({ id, token })
	}
	
	const handleUpdate = () => {
        setShow(false)
    }

    return (
        <>
            <tr
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    {contact?.name}
                </th>
                <td className="px-6 py-4">{contact?.email}</td>
                <td className="px-6 py-4">{contact?.phone}</td>
                <td className="px-6 py-4">{contact?.address}</td>
                <td className="px-6 py-4">
                    <div className=" flex items-center gap-3">
                        <AiFillEdit
                            onClick={() => handleUpdate(contact)}
                            className=" text-blue-600 text-xl cursor-pointer"
                        />
                        <BsTrashFill
                            onClick={() => handleDelete(contact?.id)}
                            className=" text-red-600 text-lg cursor-pointer"
                        />
                    </div>
                </td>
			</tr>
			<EditModal  contact={contact} show={show} setShow={setShow} />
        </>
    );
};

export default Contact;
