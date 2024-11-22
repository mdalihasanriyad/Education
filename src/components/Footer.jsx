import React from 'react';
import logo from './../assets/logo.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=" container mx-auto py-8 mt-20">
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-8 px-4 ">
                {/* Logo and Description */}
                <div>
                    <img src={logo} className='w-52' alt="" />
                    <p className="text-gray-600 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris.
                    </p>
                </div>

                {/* Links for Instructor */}
                <div>
                    <h3 className="text-lg font-bold text-blue-950">For Instructor</h3>
                    <ul className="mt-4 space-y-4 text-gray-600 ">

                        <li className='hover:text-red-500'>Profile</li>
                        <li className='hover:text-red-500'>Login</li>
                        <li className='hover:text-red-500'>Register</li>
                        <li className='hover:text-red-500'>Student</li>
                        <li className='hover:text-red-500'>Dashboard</li>
                    </ul>
                </div>

                {/* Links for Student */}
                <div>
                    <h3 className="text-lg font-bold text-blue-950">For Student</h3>
                    <ul className="mt-4 space-y-4 text-gray-600">
                        <li className='hover:text-red-500'>Profile</li>
                        <li className='hover:text-red-500'>Login</li>
                        <li className='hover:text-red-500'>Register</li>
                        <li className='hover:text-red-500'>Student</li>
                        <li className='hover:text-red-500'>Dashboard</li>
                    </ul>
                </div>

                {/* Address Section */}
                <div>
                    <h3 className="text-lg font-bold text-blue-950">Address</h3>
                    <form className="mt-4 flex items-center">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500 outline-none"
                        />
                        <button className="bg-red-500 text-white px-4 py-2 rounded-r-md">Submit</button>
                    </form>
                    <div className="mt-4 space-y-4 text-gray-600">
                        <p><span role="img" aria-label="location">📍</span> 3556 Beech Street, CA 94108</p>
                        <p><span role="img" aria-label="email">💬</span> dreamslms@example.com</p>
                        <p><span role="img" aria-label="phone">📞</span> +19 123-456-7890</p>
                    </div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="border-t  border-gray-300 mt-8 pt-4 text-center text-gray-600 flex justify-between items-center p-4">
                <div className="flex justify-between items-center space-x-1">
                    <span>Categories</span> {""}|
                    <span>Policy</span>
                </div>
                <p className="mt-2">© 2024 Dreams LMS. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
