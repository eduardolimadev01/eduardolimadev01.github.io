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

    //     <section
    //     className="flex flex-col gap-1 p-1 rounted border-2 border-gray-300 w-full md:w-64"
    // >
    //     <div
    //         className="cursor-pointer hover:bg-gray-100 relative">
    //         <div className="flex justify-center mb-4">
    //             <img
    //                 src={project.img || "/vite.svg"}
    //                 className="w-48 h-48"
    //             />
    //         </div>
    //         <div className="flex flex-col gap-2 p-1 w-full">
    //             <h2 className="text-2xl font-bold w-full border-b-2">  </h2>
    //         </div>
    //         <span className="absolute p-2 top-2 right-2 bg-white border-2 rounded-lg">
    //             <utils.AiOutlineSearch />
    //         </span>
    //     </div>
    // </section>
    return <article className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg shadow">
        <div
            onClick={() => setProjectSelected(project)}
            className="cursor-pointer hover:bg-gray-100"
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
        </div>
        <a
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center gap-2 underline text-sky-600 p-3 hover:bg-gray-100" 
            href={project.demo}
        >
            Link do Projeto
            <utils.BiLinkExternal />
        </a>
    </article>
}
