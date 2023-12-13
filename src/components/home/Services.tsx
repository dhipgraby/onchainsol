'use client'
import { faCode, faCog, faLaptop, faShield, faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flexsor from "../Flexsor";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from 'next/navigation'

export default function Services() {

    const router = useRouter()

    function renderIcon(icon: any) {
        return <FontAwesomeIcon className="text-gray-400 text-6xl" icon={icon} />
    }

    function renderTitle(title: string) {
        return <h3 className="text-xl mt-5 p-2">
            {title}
        </h3>
    }

    return (
        <div className="ta-c max-w-4xl mx-auto">
            <Flexsor columns={3}>
                <div className="serviceCard gradient-clear valign-middle">
                    <div>
                        {renderIcon(faCode)}
                        {renderTitle("Software development")}
                    </div>
                </div>
                <div className="serviceCard gradient-clear valign-middle">
                    <div>
                        {renderIcon(faLaptop)}
                        {renderTitle("Website Development")}
                    </div>
                </div>
                <div onClick={() => router.push("/web3")} className="serviceCard gradient-clear valign-middle">
                    <div>
                        {renderIcon(faEthereum)}
                        {renderTitle("Web3 & Blockchain Development")}
                    </div>
                </div>
                <div className="serviceCard gradient-clear valign-middle">
                    <div>
                        {renderIcon(faShield)}
                        {renderTitle("Security Services")}
                    </div>
                </div>
                <div className="serviceCard gradient-clear valign-middle">
                    <div>
                        {renderIcon(faCog)}
                        {renderTitle("DevOps Services")}
                    </div>
                </div>
                <div className="serviceCard gradient-clear valign-middle">
                    <div>
                        {renderIcon(faWindowRestore)}
                        {renderTitle("UI/UX Services")}
                    </div>
                </div>
            </Flexsor>
        </div>
    )
}