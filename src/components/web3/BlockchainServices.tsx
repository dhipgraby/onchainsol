'use client'
import { faEye, faGraduationCap, faHouseLaptop, faServer, faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import Flexsor from "../Flexsor";

export default function BlockchainServices() {

    function renderIcon(icon: any) {
        return <FontAwesomeIcon className="text-gray-400 text-6xl" icon={icon} />
    }

    function renderTitle(title: string) {
        return <h3 className="text-xl mt-5 p-2">
            {title}
        </h3>
    }


    const handleClick = (id: string) => {
        const targetElement = document.getElementById(id);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="ta-c max-w-5xl mx-auto blockchainServices">

            <Flexsor columns={3}>
                <div onClick={() => handleClick('service1')} className="serviceCard gradient-clear valign-middle">
                    <div>
                        {renderIcon(faEthereum)}
                        {renderTitle("Smart Contract development")}
                    </div>
                </div>
                <div onClick={() => handleClick('service2')} className="serviceCard gradient-clear valign-middle">
                    <div>
                        {renderIcon(faEye)}
                        {renderTitle("Smart Contract Audit")}
                    </div>
                </div>
                <div onClick={() => handleClick('service3')} className="serviceCard gradient-clear valign-middle">
                    <div>
                        {renderIcon(faHouseLaptop)}
                        {renderTitle("Dapps Development")}
                    </div>
                </div>
                <div onClick={() => handleClick('service4')} className="serviceCard gradient-clear valign-middle">
                    <div>
                        {renderIcon(faServer)}
                        {renderTitle("Nodes & Infrastructure")}
                    </div>
                </div>
                <div onClick={() => handleClick('service5')} className="serviceCard gradient-clear valign-middle">
                    <div>
                        {renderIcon(faTasks)}
                        {renderTitle("Web3 Integrations")}
                    </div>
                </div>
                <div onClick={() => handleClick('service6')} className="serviceCard gradient-clear valign-middle">
                    <div>
                        {renderIcon(faGraduationCap)}
                        {renderTitle("Blockchain Education")}
                    </div>
                </div>
            </Flexsor>
        </div>
    )
}