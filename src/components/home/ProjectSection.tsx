import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flexsor from "../Flexsor";
import Image from "next/image";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface ProjectProps {
    backgroundColor: string;
    sizes: any[],
    palette: string,
    title: string;
    subtitle: string;
    content: string;
    img: string;
    logo: string;
    id: number;
    button: string,
    external_link: string;
}

export default function ProjectSection({
    backgroundColor,
    sizes,
    palette,
    title,
    subtitle,
    content,
    img,
    logo,
    id,
    button,
    external_link
}: ProjectProps) {

    const imgRoute = "/images/"
    logo = imgRoute + logo
    img = imgRoute + img

    return (
        <div className={`${backgroundColor} rounded-lg my-4 shadow-lg overflow-hidden projectBox`}>
            <Flexsor columns={2} >
                <div className="ta-l relative p-6">
                    <Image className="rounded-lg" src={logo} height={sizes[0]} width={sizes[1]} sizes={"100%"} alt={title} />
                    <div className="mt-4">
                        <h1 className={`text-2xl font-normal ${(palette === "dark") ? 'text-black' : 'text-main'}`}>
                            {title}
                        </h1>
                        <h2 className={`text-lg my-3 uppercase ${(palette === "dark") ? 'text-black' : 'text-white'}`}>
                            {subtitle}
                        </h2>
                        <p className={`text-md ${(palette === "dark") ? 'text-black' : 'text-gray-300'}`}>
                            {content}
                        </p>
                        <div className="mt-10">
                            <Link href={external_link} className={`${button}`} target="_blank">
                                Read Study Case
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="ta-c p-4 relative h-full">

                    <div className="projectImg" style={{
                        maxWidth: "300px",
                        minHeight: "250px",
                        height: "100%",
                        top: 0,
                        backgroundImage: `url('${img}')`,
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "20px",
                        marginTop: "45px",
                        border: "solid 6px black",
                        transition: "1s"
                    }}>

                    </div>
                </div>
            </Flexsor>
        </div>
    )
}