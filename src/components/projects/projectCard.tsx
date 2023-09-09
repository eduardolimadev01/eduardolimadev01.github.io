import * as utils from "../../utils"

import { projectType } from "./projectType"

export const ProjectCard = ({
    project,
    setProjectSelected
}:
    {
        project: projectType
        setProjectSelected: (project: projectType) => void
    }
) => {
    return <section
        className="flex flex-col gap-1 justify-center items-center p-1 rounted border-2 border-gray-300 w-full md:w-52"
    >
        <div
            onClick={() => setProjectSelected(project)}
            className="cursor-pointer hover:bg-gray-100 relative">
            <img
                src={project.img || "/vite.svg"}
                className="w-48 h-48"
            />
            <div className="flex flex-col gap-2 p-1 w-full">
                <h2 className="text-2xl font-bold w-full border-b-2"> {project.title} </h2>
                <h3> {project.subtitle} </h3>
                <ul
                    className="flex flex-wrap gap-1"
                >
                    {project.stack.split(",").map(item => <li
                        key={item}
                        className="w-fit px-1 text-[12px] bg-primary rounded-lg text-white"
                    >#{item}</li>)}
                </ul>
            </div>
            <span className="absolute p-2 top-2 right-2 bg-white border-2 rounded-lg">
                <utils.AiOutlineSearch />
            </span>
        </div>
        <a
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-start underline text-sky-600"
            href={project.demo}
        >Link do Projeto</a>
    </section>
}
