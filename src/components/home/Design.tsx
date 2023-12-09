import { faFigma } from "@fortawesome/free-brands-svg-icons/faFigma";
import { renderIcon, renderTitle } from "./Render";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import PS from "../../../public/images/ps.png"
import Flexsor from "../Flexsor";
import Image from "next/image";

export default function Design() {

    return (
        <>
            <h3 className="text-2xl text-main font-normal uppercase leading-normal mt-20">
                DESIGN
            </h3>
            <hr className="divider-left" />
            <Flexsor columns={5}>
                <div className="ta-c">
                    {renderIcon(faFigma, "text-red-300")}
                    {renderTitle("FIGMA")}
                </div>
                <div className="ta-c">
                    <Image src={PS} height={40} width={40} alt="nest" />
                    {renderTitle("PHOTOSHOP")}
                </div>
                <div className="ta-c">
                    {renderIcon(faImages, "text-indigo-400")}
                    {renderTitle("STABLE DIfFUSION")}
                </div>
            </Flexsor >
        </>
    )
}