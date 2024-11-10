import { HiListBullet } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Student from "./Student";

const Students = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        Students: (dots) => (
            <div
                style={{
                    backgroundColor: "#ddd",
                    borderRadius: "10px",
                    padding: "10px",
                    marginRight: "5px",
                }}
            >
                <ul style={{ margin: "4px" }}> {dots} </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={{
                    width: "40px",
                    color: "blue",
                    hover: {
                        backgroundColor: "red",
                    },
                    marginRight: "10px",
                }}
            >
                <div
                    style={{
                        marginRight: "10px",
                        border: "1px gray solid",
                        padding: "5px",
                    }}
                >
                    {" "}
                    {i + 1}
                </div>
            </div>
        ),
    };
    return (
        <div className="bg-[#FAFAFA] ">
            <div className="max-w-screen-xl mx-auto px-4 xl:px-0">
                <div className="my-16">
                    <h1 className="text-4xl text-center font-bold text-blue-900 my-4 ">
                        Students
                    </h1>
                    <div className="flex justify-center items-center gap-2">
                        <Link
                            to="/"
                            className="text-xl px-3 text-blue-800 hover:text-orange-700"
                        >
                            Home
                        </Link>
                        <div className="h-2 w-6 bg-orange-700 rounded-md mt-1" />
                        <span className="text-gray-600 text-xl px-3">Students</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-16">
                    <Link to="/students" className="">
                        <img
                            className="w-9 hover:scale-105 duration-300"
                            src="studentsPageIcon.png"
                            alt="students page Icon"
                        />
                    </Link>
                    <Link
                        to="/students"
                        className="text-2xl p-1 border-[1px] border-gray-300 hover:text-red-600 hover:border-orange-700 transition-all duration-200"
                    >
                        <HiListBullet />
                    </Link>
                    <span className="text-lg text-gray-600">Showing 24 results</span>
                </div>

                {/* React slick */}
                <div className="slider-container ">
                    <Slider {...settings}>
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-4">
                                <Student
                                    imgLink="avatar-02.jpg"
                                    userName="Betty Richards"
                                    title="student"
                                    gmail="bettyrichards@example.com"
                                />
                                <Student
                                    imgLink="user2-3.jpg"
                                    userName="Brooke Hayes"
                                    title="student"
                                    gmail="brookehayes@example.com"
                                />
                                <Student
                                    imgLink="user6.jpg"
                                    userName="Komola Haris"
                                    title="student"
                                    gmail="letasoh607@storesr.com"
                                />
                                <Student
                                    imgLink="user4-1.jpg"
                                    userName="Betty Richards"
                                    title="student"
                                    gmail="bettyrichards@example.com"
                                />
                                <Student
                                    imgLink="user3-3.jpg"
                                    userName="Brooke Hayes"
                                    title="student"
                                    gmail="brookehayes@example.com"
                                />
                                <Student
                                    imgLink="user5.jpg"
                                    userName="Moris Liya"
                                    title="student"
                                    gmail="letasoh607@storesr.com"
                                />
                            </div>
                        </div>
                        <div>
                            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                <Student
                                    imgLink="user6.jpg"
                                    userName="Monia Moki"
                                    title="student"
                                    gmail="letasoh607@storesr.com"
                                />
                                <Student
                                    imgLink="user4-1.jpg"
                                    userName="Betty Richards"
                                    title="student"
                                    gmail="bettyrichards@example.com"
                                />
                                <Student
                                    imgLink="user3-3.jpg"
                                    userName="Brooke Hayes"
                                    title="student"
                                    gmail="brookehayes@example.com"
                                />
                                <Student
                                    imgLink="user5.jpg"
                                    userName="Mia Lily"
                                    title="student"
                                    gmail="letasoh607@storesr.com"
                                />
                                <Student
                                    imgLink="user14.jpg"
                                    userName="Betty Richards"
                                    title="student"
                                    gmail="bettyrichards@example.com"
                                />
                                <Student
                                    imgLink="user11.jpg"
                                    userName="Brooke Hayes"
                                    title="student"
                                    gmail="brookehayes@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <Student
                                    imgLink="user2-3.jpg"
                                    userName="Brooke Hayes"
                                    title="student"
                                    gmail="brookehayes@example.com"
                                />
                                <Student
                                    imgLink="user6.jpg"
                                    userName="Bringle Briz"
                                    title="student"
                                    gmail="letasoh607@storesr.com"
                                />
                                <Student
                                    imgLink="user4-1.jpg"
                                    userName="Betty Richards"
                                    title="student"
                                    gmail="bettyrichards@example.com"
                                />
                                <Student
                                    imgLink="user3-3.jpg"
                                    userName="Brooke Hayes"
                                    title="student"
                                    gmail="brookehayes@example.com"
                                />
                                <Student
                                    imgLink="user5.jpg"
                                    userName="Molishas "
                                    title="student"
                                    gmail="letasoh607@storesr.com"
                                />
                            </div>
                        </div>
                        <div>
                            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                <Student
                                    imgLink="user6.jpg"
                                    userName="Ema Mila"
                                    title="student"
                                    gmail="letasoh607@storesr.com"
                                />
                                <Student
                                    imgLink="user4-1.jpg"
                                    userName="Betty Richards"
                                    title="student"
                                    gmail="bettyrichards@example.com"
                                />
                                <Student
                                    imgLink="user3-3.jpg"
                                    userName="Brooke Hayes"
                                    title="student"
                                    gmail="brookehayes@example.com"
                                />
                                <Student
                                    imgLink="user3-3.jpg"
                                    userName="Brooke Hayes"
                                    title="student"
                                    gmail="brookehayes@example.com"
                                />
                                <Student
                                    imgLink="user5.jpg"
                                    userName="Molian Mimi"
                                    title="student"
                                    gmail="letasoh607@storesr.com"
                                />
                            </div>
                        </div>
                        <div>
                            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                <Student
                                    imgLink="user4-1.jpg"
                                    userName="Betty Richards"
                                    title="student"
                                    gmail="bettyrichards@example.com"
                                />
                                <Student
                                    imgLink="user3-3.jpg"
                                    userName="Brooke Hayes"
                                    title="student"
                                    gmail="brookehayes@example.com"
                                />
                                <Student
                                    imgLink="user3-3.jpg"
                                    userName="Brooke Hayes"
                                    title="student"
                                    gmail="brookehayes@example.com"
                                />

                                <Student
                                    imgLink="user3-3.jpg"
                                    userName="Brooke Hayes"
                                    title="student"
                                    gmail="brookehayes@example.com"
                                />
                                <Student
                                    imgLink="user5.jpg"
                                    userName="Ayesha Siddika"
                                    title="student"
                                    gmail="letasoh607@storesr.com"
                                />
                                <Student
                                    imgLink="user5.jpg"
                                    userName="Begum Rokeya"
                                    title="student"
                                    gmail="letasoh607@storesr.com"
                                />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Students;