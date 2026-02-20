import NavBar from "./NavBar"
import Hero from './Hero';
import Project from './Project';
import Testimonial from './Testimonial';
import Education from './Education';
import Footer from './Footer';
import Skills from "./Skills";
import Achievement from "./Achievement";



export default function Main() {
  return (
    <div className="min-h-screen">
        
        <Hero></Hero>
        <Achievement/>
        <Project></Project>
        <Skills></Skills>
        <Testimonial></Testimonial>
        <Education></Education>
        
        
    </div>
  )
}
