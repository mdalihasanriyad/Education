import React from "react";
import { FaCommentDots } from "react-icons/fa";

// Student Component

const Student = ({ imgLink, userName, title, gmail }) => {
    return (
        <div>
            <div className="max-w-sm flex flex-col justify-center items-center p-4 hover:shadow-lg border rounded-2xl">
                <img src={imgLink} alt="Img" className="w-32 rounded-full" />
                <h2 className="text-xl font-bold text-blue-700 hover:text-red-700 duration-200 cursor-pointer">
                    {userName}
                </h2>
                <h4 className="text-lg text-gray-700">{title}</h4>
                <a href={gmail} className="text-gray-700 flex items-center gap-2 hover:text-red-700 duration-200">
                    <FaCommentDots className="text-red-500 text-xl" />{gmail}
                </a>
            </div>
        </div>
    );
};

export default Student;