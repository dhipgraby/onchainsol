import Flexsor from "../Flexsor";

export default function ProductDevelopment() {

    return (
        <div className="bg-slate-700 p-5 rounded-xl mt-10">
            <div className="mt-5">
                <h1 className="text-2xl">PRODUCT DEVELOPMENT</h1>
            </div>
            <Flexsor columns={3}>

                <div className="p-2">
                    <h3 className="text-purple font-medium text-xl">SOFTWARE DEVELOPMENT</h3>
                    <p className="font-normal text-lg text-gray-200">
                        Create software of superior quality without technical debt by adhering to the Agile Development Process.
                    </p>
                </div>
                <div className="p-2">
                    <h3 className="text-purple font-medium text-xl">WEB DEVELOPMENT</h3>
                    <p className="font-normal text-lg text-gray-200">
                        Craft websites, web solutions, and customized web applications with a focus on the user experience, and enhance your online presence through scalability.
                    </p>
                </div>
                <div className="p-2">
                    <h3 className="text-purple font-medium text-xl">UI UX DESIGN</h3>
                    <p className="font-normal text-lg text-gray-200">
                        From inception to completion, meticulously design your product to optimize usability, efficiency, and responsiveness to users' needs, propelling it to new levels of success.
                    </p>
                </div>

            </Flexsor>
        </div>
    )
}