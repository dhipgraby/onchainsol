import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "@/components/About";
import Workflow from "@/components/home/Workflow";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between p-24">
        <div className="relative flex place-items-center after:absolute after:-z-10 after:h-[180px] after:w-[240px] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl
        before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]  w-full">
          <div className='w-1/2 ta-l'>
            <h1 className='text-4xl leading-normal'>
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
          <div className='w-1/2 ta-c'>
            <FontAwesomeIcon className="headerLogo" icon={faCodeBranch} />
          </div>
        </div>
      </main>
      <About />
      <Workflow />
    </>
  )
}