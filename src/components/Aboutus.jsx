import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import share from './../assets/share.png'
import join from './../assets/join.png'
import become1 from './../assets/become-01.png'
import become2 from './../assets/become-02.png'
import { AiFillCheckCircle } from 'react-icons/ai';


const AboutUs = () => {
    return (
        <div className="">
            <div className="text-center my-20 bg-about-bg1 bg-inherit h-28 justify-center items-center">
                <h2 className='text-5xl font-bold'>Abut Us</h2>
                <div className='flex justify-center items-center gap-4 my-8'> <Link to="/" className='font-semibold'>Home</Link> <span className='h-2 w-6 bg-orange-700 rounded-md mt-1" '> {""}</span> <h3 className='font-semibold'>About Us</h3> </div>
            </div>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-between mt-10">
                    <div className="">
                        <p className='text-orange-500 text-lg font-bold'>About Our Company</p>
                        <h2 className='text-5xl font-bold my-4'>Master the skills to drive your career</h2>
                        <p className='text-base opacity-50 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                        <p className='text-base opacity-50 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                        <p className='text-base opacity-50 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                    </div>
                    <div className="">
                        <img src={join} alt="" />
                    </div>
                </div>
            </Container>
            <div className="bg-about-bg2  h-full mb-10">
                <div className="max-w-screen-xl mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
                    <div className="bg-white shadow-lg rounded-2xl hover:-translate-y-2 duration-300 p-10">
                        <h3 className='font-bold text-3xl'>10K</h3>
                        <p className='font-semibold'>Online Courses</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-2xl hover:-translate-y-2 duration-300 p-10">
                        <h3 className='font-bold text-3xl'>186+</h3>
                        <p className='font-semibold'>Expert Tutors</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-2xl hover:-translate-y-2 duration-300 p-10">
                        <h3 className='font-bold text-3xl'>5K+</h3>
                        <p className='font-semibold'>Ceritified Courses</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-2xl hover:-translate-y-2 duration-300 p-10 ">
                        <h3 className='font-bold text-3xl'>55K+</h3>
                        <p className='font-semibold'>Online Students</p>
                    </div>

                </div>
            </div>
            <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className="">
                    <img src={share} alt="" />
                </div>
                <div className="mt-14">
                    <h2 className='text-4xl font-bold opacity-80'>Want to share your knowledge? Join us a Mentor</h2>
                    <h4 className='text-xl font-medium opacity-50 my-8' >High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</h4>
                    <div className='flex gap-3 items-center mb-3' > <AiFillCheckCircle className='text-red-500 text-2xl' />
                        <p className='text-xl font-semibold opacity-55'>Best Courses</p></div>
                    <div className='flex gap-3' > <AiFillCheckCircle className='text-red-500 text-2xl' /> <p className='text-xl font-semibold opacity-55 mb-8' >Top rated Instructors</p></div>
                    <button className='border-[2px] border-blue-500 py-2 px-8 rounded-full bg-transparent hover:bg-blue-500 hover:text-white duration-300'>Read More</button>
                </div>
            </Container>
            <div className="bg-about-bg3 h-full my-10">
                <Container className='text-center text-white items-center justify-center py-20'>
                    <h4 className='text-2xl font-bold'>Check out these real reviews</h4>
                    <h2 className='text-4xl font-bold'>Users-love-us Don't take it from us.</h2>
                </Container>
            </div>
            <Container className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-8">
                <div className="bg-pink-300 h-60  rounded-3xl p-6 flex ">
                    <div className="">
                        <h3 className='text-2xl font-bold'>Become An Instructor</h3>
                        <p className='text-base font-semibold opacity-55 mt-4'>Top instructors from around the world teach millions of students on Mentoring.</p>
                    </div>
                    <img src={become2} alt="" className='w-60' />
                </div>
                <div className="bg-pink-300 h-60  rounded-3xl p-6 flex ">
                    <div className="">
                        <h3 className='text-2xl font-bold'>Become An Instructor</h3>
                        <p className='text-base font-semibold opacity-55 mt-4'>Top instructors from around the world teach millions of students on Mentoring.</p>
                    </div>
                    <img src={become1} alt="" className='w-60' />
                </div>

            </Container>
        </div>


    );
};

export default AboutUs;