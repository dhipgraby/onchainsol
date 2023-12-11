import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "@/components/About";
import Workflow from "@/components/home/Workflow";
import TechStack from "@/components/home/TechStack";
import Flexsor from "@/components/Flexsor";
import Projects from "@/components/home/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div className="max-w-6xl mx-auto pt-40 pb-40 blue-gradient">
        <Flexsor columns={2}>
          <div className='ta-l headerTitle'>
            <h1 className='text-5xl leading-normal'>
              Software ,
              <br />
              Web & Web3
              <br />
              Development Company
            </h1>
            <p className="text-purple text-xl">
              Unlock the Potential of your business with  cutting-edge technology
            </p>
          </div>
          <div className='ta-c mt-10'>
            <FontAwesomeIcon className="headerLogo" icon={faCodeBranch} />
          </div>
        </Flexsor>
      </div>
      <About />
      <Workflow />
      <TechStack />
      <Projects />
      <Contact />

    </>
  )
}