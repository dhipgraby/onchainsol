import Flexsor from "@/components/Flexsor"
import TeamMembers from "../../data/team.json"
import TeamMember from "@/components/team/TeamMember"
import Contact from "@/components/Contact"

export default function Team() {
    return (
        <>
            <div className="ta-c max-w-2xl mx-auto">
                <div className="pt-20 pb-20">
                    <h1 className="text-4xl">
                        About <span className="text-main">Us</span>
                    </h1>
                    <hr className="divider" />
                    <p className="text-gray-300">
                        We're a group of software and web development enthusiasts who share the same values and a vision for the future of decentralized solutions.
                    </p>

                    <h3 className="font-normal text-lg mt-10">
                        Our team, born from a group of long-time friends and collaborators, started with a common goal: recognizing the untapped potential of software and web development. What sets us apart is our close-knit bond and understanding of each other's strengths.
                    </h3>

                </div>
            </div>

            <div className="ta-l">
                <h1 className="text-4xl font-medium">
                    Our <span className="text-main">Team</span>
                </h1>

                <Flexsor columns={4}>
                    {
                        TeamMembers.map((member, key) => {
                            return <div key={key}>
                                <TeamMember
                                    name={member.name}
                                    linekdin={member.linekdin}
                                    jobs={member.jobs}
                                    content={member.content}
                                    img={member.img}
                                /></div>
                        })
                    }
                </Flexsor>
            </div>
            <Contact />
        </>
    )
}