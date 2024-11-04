import { Link } from "react-router-dom"
import logo from "./assets/MainLogo.svg"
import { useRef, useState } from "react";
import { MdOutlineClose } from 'react-icons/md';
import { GiHamburgerMenu } from "react-icons/gi";



function App() {
  const navigation = [
    { title: "Home", link: "/" },
    { title: "About us", link: "/about-us" },
    { title: "Instructors", link: "/instructors" },
    { title: "Students", link: "/students" },
    { title: "Pages", link: "/pages" },
    { title: "Blog", link: "/blog" },
    { title: "Contact Us", link: "/contactUs" },
  ]
  const [show, setShow] = useState(false);
  const ref = useRef();

  const handleClick = (e) => {
    if (e.target.contains(ref.current)) {
      setShow(false)
    }
  }


  return (
    <div className='h-20 shadow-lg shadow-red-500/10 px-4 lg:px-0 sticky top-0 z-50 bg-white'>
      <div className="max-w-[1440px] mx-auto flex items-center h-full justify-between">
        <Link to="/"><img src={logo} alt="logo" className='w-24 cursor-pointer ' /></Link>

        <div className="hidden md:hidden lg:inline-flex gap-7 items-center">

          <div className='flex gap-7 text-[13px] '>
            {navigation?.map((item) => (
              <Link key={item?.title} to={item?.link} smooth={true} duration={500} offset={-80} className='font-medium hover:text-red-500 cursor-pointer duration-200'>
                <p>

                  <span className='uppercase tracking-wide'>{item?.title}</span>
                </p >
              </Link>
            ))}
          </div>
          <Link to="/login" className='px-4 py-2 rounded-full font-medium border  bg-white hover:bg-red-500 hover:text-white text-[13px]  uppercase duration-200'>Login</Link>
          <Link to="/register" className='px-4 py-2 rounded-full font-medium border border-blue-500 hover:bg-red-500 hover:text-white hover:border-none text-[13px]  uppercase duration-200'>Register</Link>
        </div>
        <div onClick={() => setShow(true)} className=" lg:hidden w-5 h-6 flex flex-col justify-between items-center group cursor-pointer overflow-hidden">
          <GiHamburgerMenu className='text-3xl text-red-500  absolute top-4 right-4 duration-200 cursor-pointer' />

        </div>
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute md:hidden top-0 right-0 w-[50%] bg-red-500 flex flex-col h-screen items-end z-50">
            <div

              className='w-[80%] h-full overflow-y-scroll bg-textBg flex flex-col items-center py-10 relative '
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className='text-3xl text-white hover:text-red-700 absolute top-4 right-4 duration-200 cursor-pointer' />
              <div className="flex flex-col items-center gap-7">
                <ul className='flex flex-col text-base gap-4'>
                  {navigation?.map((item) => (
                    <Link
                      key={item?.title}
                      to={item?.link}
                      smooth={true}
                      duration={500} offset={-80}
                      className='font-medium text-white cursor-pointer duration-300'
                    >
                      <li
                        onClick={() => setShow(false)}
                      >

                        <span className='tracking-wide uppercase'>{item?.title}</span></li>
                    </Link>
                  ))}
                </ul>
                <a href={'/login'} className='px-4 py-2 rounded-md font-medium text-white border border-white  text-[13px] tracking-wider uppercase duration-200'>Login</a>
                <a href={'/register'} className='px-4 py-2 rounded-md font-medium text-white border border-white  text-[13px] tracking-wider uppercase duration-200'>Register</a>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
