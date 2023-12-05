import Services from "./home/Services";

export default function About() {

    return (
        <div className="ta-c px-5 mt-10">
            <h1 className="text-3xl">Software Development & Consulting Services</h1>
            <p className="text-lg text-gray-400 my-4 max-w-md	mb-10">
                Our expert team delivers innovative, high-quality solutions,
                empowering businesses and individuals to turn ideas into reality through cutting-edge technology.
            </p>

            <hr className="divider" />

            <Services />

        </div>
    )
}