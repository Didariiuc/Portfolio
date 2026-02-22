import NavBar from "./NavBar"
import Hero from './Hero';
import Project from './Project';
import Education from './Education';
import Footer from './Footer';
import Skills from "./Skills";
import Behind from "./Behind";
import FeatureProject from "./FeatureProject";
import Ending from "./Ending";
import Certification from "./Certification";
import Publication from "./Publication";



export default function Main() {
  return (
    <div className="min-h-screen">

      <Hero></Hero>

      <Skills></Skills>

      <Behind />
      <FeatureProject></FeatureProject>
      <Publication/>
      <Certification/>
      <Ending></Ending>
      


    </div>
  )
}
