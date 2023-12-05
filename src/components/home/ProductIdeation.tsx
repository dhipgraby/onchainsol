import Flexsor from "../Flexsor";

export default function ProductIdeation() {

    return (
        <div className="bg-slate-700 p-5 rounded-xl mt-10">
            <div className="mt-5">
                <h1 className="text-2xl">PRODUCT IDEATION</h1>
            </div>
            <Flexsor columns={3}>

                <div className="p-2">
                    <h3 className="text-purple font-medium text-xl">SCOPING SESSION</h3>
                    <p className="font-normal text-lg text-gray-200">
                        Develop a robust plan to bring your vision to fruition and strategically prepare for the progression of your product development.
                    </p>
                </div>
                <div className="p-2">
                    <h3 className="text-purple font-medium text-xl">PRODUCT DESIGN PROCESS</h3>
                    <p className="font-normal text-lg text-gray-200">
                        An assemblage of refined methods for constructing interfaces that are both meaningful and user-centric.
                    </p>
                </div>
                <div className="p-2">
                    <h3 className="text-purple font-medium text-xl">MINIMUM VIABLE PRODUCT</h3>
                    <p className="font-normal text-lg text-gray-200">
                        Determine the fundamental features of your business concept and develop an MVP to validate its viability.
                    </p>
                </div>

            </Flexsor>
        </div>
    )
}