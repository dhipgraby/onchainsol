import ProjectsJson from "../../data/projects.json"
import ProjectSection from "./ProjectSection"

export default function Projects() {

    return (
        <div className="mt-10 pt-20">
            <h3 className="text-3xl uppercase">
                Our latest
                <br />
                <span className="text-main">Projects</span>
            </h3>

            <div className="mt-10">
                {
                    ProjectsJson.length &&
                    ProjectsJson.map((project: any) => {
                        return <div key={project.id}>
                            <ProjectSection
                                backgroundColor={project.backgroundColor}
                                palette={project.palette}
                                sizes={project.sizes}
                                title={project.title}
                                subtitle={project.subtitle}
                                content={project.content}
                                img={project.img}
                                logo={project.logo}
                                id={project.id}
                                button={project.button}
                                external_link={project.external_link}
                            />
                        </div>
                    })
                }
            </div>

        </div>
    )

}