import Image from "next/image";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons/faNodeJs";
import { faPython } from "@fortawesome/free-brands-svg-icons/faPython";
import { faEthereum } from "@fortawesome/free-brands-svg-icons/faEthereum";
import { faPhp } from "@fortawesome/free-brands-svg-icons/faPhp";
import NestIcon from "../../../public/images/nest.svg"
import Flexsor from "../Flexsor";
import { renderIcon, renderTitle } from "./Render";

export default function Backend() {

    return (
        <>
            <h3 className="text-2xl text-main font-normal uppercase leading-normal mt-10">
                BACK-END
            </h3>
            <hr className="divider-left" />
            <Flexsor columns={5} forced={true}>
                <div className="ta-c my-4">
                    {renderIcon(faNodeJs, "text-green-500")}
                    {renderTitle("NODE")}
                </div>
                <div className="ta-c my-4">
                    <Image src={NestIcon} height={40} width={40} alt="nest" />
                    {renderTitle("NEST JS")}
                </div>
                <div className="ta-c my-4">
                    {renderIcon(faPython, "text-yellow-400")}
                    {renderTitle("PYTHON")}
                </div>
                <div className="ta-c my-4">
                    {renderIcon(faPhp, "text-blue-400")}
                    {renderTitle("PHP")}
                </div>
                <div className="ta-c my-4">
                    {renderIcon(faEthereum, "text-indigo-400")}
                    {renderTitle("SOLIDITY")}
                </div>
            </Flexsor >
        </>
    )
}