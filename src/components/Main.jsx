import NavBar from "./NavBar"
import Hero from './Hero';
import Project from './Project';
import Testimonial from './Testimonial';
import Education from './Education';
import Footer from './Footer';
import Skills from "./Skills";
import Behind from "./Behind";
import FeatureProject from "./FeatureProject";
import Ending from "./Ending";



export default function Main() {
  return (
    <div className="min-h-screen">

      <Hero></Hero>

      <Skills></Skills>

      <Behind />
      <FeatureProject></FeatureProject>
      <Ending></Ending>
      


    </div>
  )
}
