import Cookies from "js-cookie";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { SetShow } from "../features/services/contactSlice";
import { AiFillEdit } from "react-icons/ai";
import { useChangePasswordMutation } from "../features/api/authApi";

const Profile = () => {

	const [show, setShow] = useState(true);
	const [image, setImage] = useState(null);
	const fileInputRef = useRef(null);
	const formRef = useRef(null);

	const dispath = useDispatch();

	const [ChangePassword] = useChangePasswordMutation();

	const user = JSON.parse(Cookies.get("user"));
	const token = Cookies.get('token')

	const handleChooseImage = () => {
		fileInputRef.current.click();
	};

	const handleImageChange = event => {
		event.preventDefault();
		console.log("handleImageChange called");
		setImage(event.target.files[0]);
	};

	const handleSubmit = event => {
		event.preventDefault();
	};

	const [current_password, setPassword] = useState("");
	const [password, setNpassword] = useState("");
	const [password_confirmation, setConfirmPassword] = useState("");

	const handleEditPassword = async(e) => {
		e.preventDefault();
		const data = { current_password, password, password_confirmation }
		const user = await ChangePassword({data,token})
		if(user?.data?.success) setShow(!show)
	};

	return (
		<>
			<div className=" bg-white rounded-lg shadow-md">
				<div className=" text-center py-5 border-b">
					<button
						onClick={() => dispath(SetShow(false))}
						className=" px-10 py-2 rounded-3xl shadow-md bg-blue-400 text-white"
					>
						Add Contact
					</button>
				</div>
				<div className=" border-b px-5 py-10 flex flex-col items-center justify-center">
					<div className=" relative mb-5">
						{image ? (
							<img
								src={URL.createObjectURL(image)}
								className=" rounded-full h-40 w-40 object-cover"
								alt=""
							/>
						) : (
							<div className=" bg-blue-400 shadow-md h-40 w-40 rounded-full"></div>
						)}
						<form ref={formRef} onSubmit={handleSubmit}>
							<button
								type="button"
								onClick={handleChooseImage}
								className=" top-0 absolute bg-gray-100 px-4 py-2 rounded-full"
							>
								+
							</button>
							<input
								ref={fileInputRef}
								onChange={handleImageChange}
								type="file"
								className=" hidden"
							/>
						</form>
					</div>
					<div className=" flex flex-col items-center justify-center gap-3">
						<p className=" text-lg">{user?.name}</p>
						<p className=" text-sm">I am a web developer</p>
						<button
							onClick={() => setShow(false)}
							className=" text-xs flex items-center gap-1"
						>
							<AiFillEdit className=" text-red-600" />
							<p className=" text-red-600">change password</p>
						</button>
					</div>
				</div>
			</div>

			<div
				id="authentication-modal"
				tabIndex="-1"
				aria-hidden="true"
				className={` fixed top-0 left-0 right-0 z-50 ${show && 'hidden'} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
			>
				<div className="relative left-[35%] w-full max-w-md max-h-full">
					<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
						<button
							onClick={()=>setShow(!show)}
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
						</button>
						<div className="px-6 py-6 lg:px-8">
							<h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
							   Edit your password
							</h3>
							<form onSubmit={handleEditPassword} className="space-y-6" action="#">
								<div>
									<label
										htmlFor="currentPassword"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Your Current Password
									</label>
									<input
										value={current_password}
										onChange={e=>setPassword(e.target.value)}
										type="password"
										name="currentPassword"
										id="currentPassword"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
										placeholder="••••••••"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										 Your New Password
									</label>
									<input
										value={password}
										onChange={e=>setNpassword(e.target.value)}
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="Confirmpassword"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Confirm password
									</label>
									<input
										value={password_confirmation}
										onChange={e=>setConfirmPassword(e.target.value)}
										type="password"
										name="Confirmpassword"
										id="Confirmpassword"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
										required
									/>
								</div>
								<button
									type="submit"
									className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Login to your account
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
