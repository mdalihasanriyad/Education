import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import join from './../assets/join.png'

const AboutUs = () => {
    return (
        <div className="">
            <div className="text-center my-20 bg-about-bg1 bg-inherit h-28 justify-center items-center">
                <h2 className='text-5xl font-bold'>Abut Us</h2>
                <div className='flex justify-center items-center gap-4 my-8'> <Link to="/" className='font-semibold'>Home</Link> <span className='bg-orange-500 w-2 h-1 rounded-xl'> {""}</span> <h3 className='font-semibold'>About Us</h3> </div>
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
        </div>


    );
};

export default AboutUs;