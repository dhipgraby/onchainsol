import Services from "./home/Services";

export default function About() {

    return (
        <>
            <div className="ta-c px-5 mt-20 pt-10 pb-10">
                <h1 className="text-4xl">Software Development & Consulting Services</h1>
                <p className="text-xl text-gray-400 my-4 max-w-md	mb-10">
                    Our expert team delivers innovative, high-quality solutions,
                </p>
                <hr className="divider" />
            </div>
            <Services />
        </>
    )
}