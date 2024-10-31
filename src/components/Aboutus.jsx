import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <Container>
            <div className="text-center my-20">
                <h2 className='text-5xl font-bold'>Abut Us</h2>
                <div className='flex justify-center items-center gap-4 my-8'> <Link to="/" className='font-semibold'>Home</Link> <span className='bg-orange-500 w-2 h-1 rounded-xl'> {""}</span> <h3 className='font-semibold'>About Us</h3> </div>
            </div>
        </Container>
    );
};

export default AboutUs;