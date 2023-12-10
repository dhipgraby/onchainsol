import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

interface TeamMemberProps {
    name: string;
    linekdin: string;
    jobs: any[],
    content: string;
    img: string;
}

export default function TeamMember(
    {
        name,
        linekdin,
        jobs,
        content,
        img }: TeamMemberProps
) {

    const picture = "/images/" + img

    return (
        <>
            <div className="mx-4 teamCard">
                <div className="teammember" style={{
                    backgroundImage: `url('${picture}')`
                }}>

                </div>

                <h3 className="text-lg text-main my-5 ta-c">
                    {name}
                </h3>
                {jobs.map((job: any, i) => {
                    return <div className="inline-flex">
                        <span className="bg-main-300 text-white rounded-full px-2 mx-2 text-sm" key={i}>
                            {job}
                        </span>
                    </div>
                })}

                <p className="text-md mt-2 text-gray-200">
                    {content}
                </p>
                <div className="absolute top-3 right-4">
                    <Link href={linekdin} className="text-xl text-blue-300" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                </div>
            </div>

        </>
    )
}