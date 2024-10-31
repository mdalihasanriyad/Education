import { Link } from "react-router-dom"


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
      <div className="">logo</div>
      <div className="">
        <ul className="flex gap-10">{navigation?.map((item) => (
          <Link to={item?.link}>{item?.title}</Link>
        ))}</ul>
      </div>
    </div>
  )
}

export default App
