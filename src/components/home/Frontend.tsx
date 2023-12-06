import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStripeS } from "@fortawesome/free-brands-svg-icons/faStripeS";
import { faReact, faVuejs, faJsSquare } from "@fortawesome/free-brands-svg-icons";
import Flexsor from "../Flexsor";
import { renderIcon, renderTitle } from "./Render";

export default function Frontend() {

    return (
        <>
            <h3 className="text-2xl text-main font-normal uppercase leading-normal mt-10">
                FRONT-END
            </h3>
            <hr className="divider-left" />
            <Flexsor columns={5}>
                <div className="ta-c">
                    {renderIcon(faReact, "text-blue-300")}
                    {renderTitle("REACT")}
                </div>
                <div className="ta-c">
                    {renderIcon(faJsSquare, "text-white")}
                    {renderTitle("NEXT JS")}
                </div>
                <div className="ta-c">
                    {renderIcon(faVuejs, "text-green-400")}
                    {renderTitle("VUE")}
                </div>
                <div className="ta-c">
                    {renderIcon(faStripeS, "text-red-500")}
                    {renderTitle("SVELTE")}
                </div>
            </Flexsor >
        </>
    )
}