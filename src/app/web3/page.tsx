import Flexsor from "@/components/Flexsor"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Web3() {

    function renderIcon(icon: any) {
        return <FontAwesomeIcon className="text-main text-6xl" icon={icon} />
    }

    function renderTitle(title: string) {
        return <h3 className="text-xl mt-10 p-2">
            {title}
        </h3>
    }

    return (
        <>
            <div className="ta-c max-w-2xl mx-auto">
                <div className="pt-20 pb-20 blue-gradient-center">
                    <h1 className="text-5xl">
                        Blockchain <span className="text-main"> Development</span>
                    </h1>
                    <hr className="divider" />
                    <p className="text-gray-200 text-xl">
                        Empowering businesses and individuals to turn ideas into reality through cutting-edge blockchain technology.
                    </p>
                </div>
            </div>

            <div>
                <h1 className="text-4xl">
                    Browse Through Our Services
                </h1>
                <Flexsor columns={4}>

                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>

                </Flexsor>
            </div>

        </>
    )
}