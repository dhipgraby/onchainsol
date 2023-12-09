import { faCloud, faCode, faCog, faDatabase, faLaptop, faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flexsor from "../Flexsor";

export default function Services() {

    function renderIcon(icon: any) {
        return <FontAwesomeIcon className="text-main text-6xl" icon={icon} />
    }

    function renderTitle(title: string) {
        return <h3 className="text-xl mt-10 p-2">
            {title}
        </h3>
    }

    return (
        <div className="ta-c">
            <Flexsor columns={3}>
                <div className="mt-8">
                    {renderIcon(faCode)}
                    {renderTitle("Custom Software development")}
                </div>
                <div className="mt-8">
                    {renderIcon(faLaptop)}
                    {renderTitle("Website Development Services")}
                </div>
                <div className="mt-8">
                    {renderIcon(faDatabase)}
                    {renderTitle("Databases & Analitics Services")}
                </div>
                <div className="mt-8">
                    {renderIcon(faCloud)}
                    {renderTitle("Cloud Services")}
                </div>
                <div className="mt-8">
                    {renderIcon(faCog)}
                    {renderTitle("DevOps Services")}
                </div>
                <div className="mt-8">
                    {renderIcon(faWindowRestore)}
                    {renderTitle("UI/UX Services")}
                </div>
            </Flexsor>
        </div>
    )
}