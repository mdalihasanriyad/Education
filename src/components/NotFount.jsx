import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'

const NotFount = () => {
    return (
        <Container className="my-44 text-center ">
            <div className="text-4xl my-12">
                Not Found Page
            </div>

            <Link to={"/"}> <button className='p-4 bg-green-500 rounded-lg'>Go Back</button></Link>
        </Container>
    )
}

export default NotFount
