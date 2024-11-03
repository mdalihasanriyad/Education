import { Link } from "react-router-dom"
import logo from "./assets/MainLogo.svg"


function App() {
  const navigation = [
    { title: "Home", link: "/" },
    { title: "About us", link: "/about-us" },
    { title: "Instructors", link: "/instructors" },
    { title: "Students", link: "/students" },
    { title: "Pages", link: "/pages" },
    { title: "Blog", link: "/blog" },
    { title: "Contact Us", link: "/contact Us" },
  ]


  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-between my-6">
      <Link to="/">

        <img src={logo} alt="logo" className="w-32" />
      </Link>
      <div className="">
        <ul className="flex gap-10">{navigation?.map((item) => (
          <Link key={item.title} to={item?.link}>{item?.title}</Link>
        ))}</ul>
      </div>
    </div>
  )
}

export default App
