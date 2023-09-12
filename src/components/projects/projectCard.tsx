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

    return <article className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg shadow">
        <div
            onClick={() => setProjectSelected(project)}
            className="cursor-pointer hover:bg-gray-100 relative"
        >
            <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={project.img}
                alt="blog"
            />
            <div className="p-3">
                <ul
                    className="flex flex-wrap gap-1"
                >
                    {project.stack.split(",").map(item => <li
                        key={item}
                        className="w-fit px-1 text-[12px] bg-primary rounded-lg text-white"
                    >#{item}</li>)}
                </ul>
                <h1 className="title-font text-2xl font-bold text-gray-900 py-3">
                    {project.title}
                </h1>
                <p className="leading-relaxed mb-3 h-20 overflow-hidden">
                    {project.subtitle}
                </p>
            </div>
            <span className="absolute top-3 right-3 bg-white p-2 rounded-full">
                <utils.AiOutlineSearch />
            </span>
        </div>
        <div className="flex items-center justify-between">
            <a
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center gap-2 underline text-sky-600 p-3 hover:bg-gray-100"
                href={project.demo}
            >
                Link do Projeto
                <utils.BiLinkExternal />
            </a>
            {!project.production ? <span
                className="flex h-fit text-[11px] rounded-xl bg-blue-400 text-white uppercase px-1"
            >
                em_desenvolvimento
            </span> : null}
        </div>
    </article>
}
