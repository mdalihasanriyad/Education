

function App() {
  const navigation = [
    { title: "Home", link: "/" },
    { title: "About us", link: "/aboutus" },
    { title: "Instructors", link: "/instructors" },
    { title: "Students", link: "/students" },
    { title: "Pages", link: "/pages" },
    { title: "Blog", link: "/blog" },
    { title: "Contact Us", link: "/contact Us" },
  ]


  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-between">
      <div className="">logo</div>
      <div className="">
        <ul className="flex gap-10">{navigation?.map((item) => (
          <li>{item?.title}</li>
        ))}</ul>
      </div>
    </div>
  )
}

export default App
