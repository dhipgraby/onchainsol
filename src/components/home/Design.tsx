import { faFigma } from "@fortawesome/free-brands-svg-icons/faFigma";
import { renderIcon, renderTitle } from "./Render";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import PS from "../../../public/images/ps.png"
import Flexsor from "../Flexsor";
import Image from "next/image";

export default function Design() {

    return (
        <>
            <h3 className="text-3xl text-purple uppercase leading-normal mt-20">
                DESIGN
            </h3>
            <hr className="divider-left" />
            <Flexsor columns={5} forced={true}>
                <div className="ta-c mt-12">
                    {renderIcon(faFigma, "text-red-300")}
                    {renderTitle("FIGMA")}
                </div>
                <div className="ta-c mt-12">
                    <Image src={PS} height={40} width={40} alt="nest" />
                    {renderTitle("PHOTOSHOP")}
                </div>
                <div className="ta-c mt-12">
                    {renderIcon(faImages, "text-indigo-400")}
                    {renderTitle("STABLE DIfFUSION")}
                </div>
            </Flexsor >
        </>
    )
}