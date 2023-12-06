import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "@/components/About";
import Workflow from "@/components/home/Workflow";
import TechStack from "@/components/home/TechStack";
import Flexsor from "@/components/Flexsor";

export default function Home() {
  return (
    <>
      <main className="max-w-5xl mx-auto pt-60 pb-24 mb-40">

        <Flexsor columns={2}>
          <div className='ta-l'>
            <h1 className='text-4xl leading-normal blue-gradient'>
              Software &
              <br />
              Web Development
              <br />
              Company
            </h1>
            <p className="text-gray-300">
              Unlock the Potential of your business with  cutting-edge technology
            </p>
          </div>
          <div className='ta-c'>
            <FontAwesomeIcon className="headerLogo" icon={faCodeBranch} />
          </div>
        </Flexsor>

      </main>
      <About />
      <Workflow />
      <TechStack />
    </>
  )
}