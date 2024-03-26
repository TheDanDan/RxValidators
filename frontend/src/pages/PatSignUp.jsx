import React, { useContext, useState } from "react";
import image from "../assets/background-image-1.jpeg";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Spinner from "../components/Spinner";
import api from "../axiosConfig";

const PatCreateAccount = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [providerCode, setProviderCode] = useState("");
	const [license, setLicense] = useState("");
	const [profession, setProfession] = useState("");
	const [college, setCollege] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [province, setProvince] = useState("");
	const [language, setLanguage] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	function handleClick (e) {
		e.preventDefault();
		//logic htmlFor checking active parx codes
        // alert('Prescriber Account Created!');
		// Get all data
		const data = {
			firstName: firstName,
			lastName: lastName,
			providerCode: providerCode,
			license: license,
			profession: profession,
			college: college,
			email: email,
			password: password,
			address: address,
			city: city,
			province: province,
			language: language,
			role: "patient"
		};
		setLoading(true);
		api.post("/auth/register", data).then((res) => {
			setLoading(false);
			console.log(res.data);
		})
    }
	
	return (
		<div className="flex h-screen w-screen items-center justify-between bg-white" >
            <Link to="/login" className="absolute z-50 bg-white px-4 top-8 left-8 unselectable">
				<img src={logo} className="h-32 w-32 unselectable" />
			</Link>
            <img
				src={image}
				alt="logo"
				className="blur-[2px] opacity-70 z-10 h-screen object-cover  md:w-1/2 pointer-events-none"
			/>
            <div className="w-screen lg:w-1/2 h-screen bg-white z-20 flex items-center absolute lg:relative justify-center">
				<form onSubmit={handleClick} className=":w-1/2 mx-auto z-50 ">
					<div className="flex flex-col items-center [&>*]:text-gray-500 mb-12">
						<h1 className="text-3xl font-bold !text-gray-900  mb-5">Create a Prescriber Account</h1>
                        <p>Please fill out the htmlForm below with your inhtmlFormation and Provider code.</p>
                        <p>If the Provider code is active, an account will be created.</p>
                    </div>
					<div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
						<div className="w-full">
							<label htmlFor="pres_first_name" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
							<input value={firstName} onChange={(e) => setFirstName(e.target.value)} name="pres_first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="First Name"/>
						</div>
						<div className="w-full">
							<label htmlFor="pres_last_name" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
							<input value={lastName} onChange={(e) => setLastName(e.target.value)}  type="text" id="pres_last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Last Name"/>
						</div>
						<div className="w-full">
							<label className="block mb-2 text-sm font-medium text-gray-600 ">Provider Code</label>
							<input value={providerCode} onChange={(e) => setProviderCode(e.target.value)}  id="parx_code" type="text" maxLength={8} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="ie. BC-AA001" required/>
						</div>
					</div>
                    <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
						<div className="w-full">
							<label htmlFor="license" className="block mb-2 text-sm font-medium text-gray-900">License Number</label>
							<input value={license} onChange={(e) => setLicense(e.target.value)}  name="license" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="License Number"/>
						</div>
						<div className="w-full">
							<label htmlFor="profession" className="block mb-2 text-sm font-medium text-gray-900">Profession</label>
							<input value={profession} onChange={(e) => setProfession(e.target.value)}  type="text" id="profession" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Profession"/>
						</div>
						<div className="w-full">
						<label htmlFor="college" className="block mb-2 text-sm font-medium text-gray-900">Licensing College Province</label>
						<select required id="college" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
							onChange={(e) => setCollege(e.target.value)}>
							<option disabled selected value="" defaultValue="">College</option>
							<option value="College of Physicians and Surgeons of Alberta">Alberta</option>
							<option value="College of Physicians and Surgeons of British Columbia">British Columbia</option>
							<option value="College of Physicians and Surgeons of Manitoba">Manitoba</option>
							<option value="College of Physicians and Surgeons of New Brunswick">New Brunswick</option>
							<option value="College of Physicians and Surgeons of Newfoundland and Labrador">Newfoundland & Labrador</option>
							<option value="College of Physicians and Surgeons of Nova Scotia">Nova Scotia</option>
							<option value="College of Physicians and Surgeons of Ontario">Ontario</option>
							<option value="College of Physicians and Surgeons of Prince Edward Island">Prince Edward Island</option>
							<option value="Collège des médecins du Québec">Quebec</option>
							<option value="College of Physicians and Surgeons of Saskatchewan">Saskatchewan</option>
						</select>
					</div>
					</div>
					<div className="mb-5">
						<label className="block mb-2 text-sm font-medium text-gray-600 ">Email Address</label>
						<input value={email} onChange={(e) => setEmail(e.target.value)}  id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Email" required/>
					</div>
                    <div className="mb-5">
						<label className="block mb-2 text-sm font-medium text-gray-600 ">Create a Password</label>
						<input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Password" required/>
					</div>
                    <div className="mb-5">
						<label className="block mb-2 text-sm font-medium text-gray-600 ">Street Address</label>
						<input value={address} onChange={(e) => setAddress(e.target.value)}  id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Address" required/>
					</div>
					<div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
						<div className="w-full">
							<label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">City</label>
							<input value={city} onChange={(e) => setCity(e.target.value)}  type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"placeholder="City" required/>
						</div>
						<div className="w-full">
							<label htmlFor="province" className="block mb-2 text-sm font-medium text-gray-900">Province</label>
							<select value={province} onChange={(e) => setProvince(e.target.value)}  required id="province" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5">
								<option disabled selected value="" defaultValue="">Province</option>
								<option value="AB">Alberta</option>
								<option value="BC">British Columbia</option>
								<option value="MB">Manitoba</option>
								<option value="NB">New Brunswick</option>
								<option value="NL">Newfoundland & Labrador</option>
								<option value="NS">Nova Scotia</option>
								<option value="ON">Ontario</option>
								<option value="PEI">Prince Edward Island</option>
								<option value="QC">Quebec</option>
								<option value="SK">Saskatchewan</option>
							</select>
						</div>
						<div className="w-full">
							<label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900">Preferred Language</label>
							<select value={language} onChange={(e) => setLanguage(e.target.value)}  required id="language" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5">
								<option disabled selected value="" defaultValue="">Language</option>
								<option value="english">English</option>
								<option value="french">French</option>
							</select>
						</div>
					</div>
                    <div className="flex mr-36 justify-between mt-12">
						{loading ? <Spinner/> :
						<button className="text-white bg-[#5C6528] hover:bg-[#5C6528]/40 font-medium rounded-lg text-sm w-full sm:w-auto px-6 h-full py-2.5 text-center">Create Provider Account</button>
						}
						<div className="mt-4">
							<Link className="text-black underline" to="/login">
								Created an account? Login here.
							</Link>
                		</div>
					</div>
                </form>
            </div>
        </div>
	);
};

export default PatCreateAccount;