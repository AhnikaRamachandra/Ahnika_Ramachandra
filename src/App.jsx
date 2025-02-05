import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Project from "./components/Project"


function App() {
 

  return (
    <>
   <div className="flex justify-center items-center h-screen">
  <div className=" w-[50%] h-full">
   <Navbar/>
   <Project/>
   <Experience/>
   <Contact/>
   <Footer/>
  </div>
</div>

    </>
  )
}

export default App
