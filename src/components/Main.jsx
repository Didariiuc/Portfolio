import NavBar from "./NavBar"
import Hero from './Hero';
import Project from './Project';
import Testimonial from './Testimonial';
import Education from './Education';
import Footer from './Footer';
import Skills from "./Skills";



export default function Main() {
  return (
    <div className="bg-linear-to-r from-black via-amber-600 to-black">
        <NavBar></NavBar>
        <Hero></Hero>
        <Project></Project>
        <Skills></Skills>
        <Testimonial></Testimonial>
        <Education></Education>
        <Footer></Footer>
        
    </div>
  )
}
