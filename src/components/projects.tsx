import * as utils from "../utils"

import supabase from "../../supabase"

import {
    useState,
    useEffect
} from 'react'

type project = {
    id: string
    title: string
    subtitle: string
    stack: string
    description: string
    repository: string
    demo: string
    public: boolean
    img: string
    created_at: string
}

export const Projects = () => {
    const [listProjects, setListProjects] = useState<project[]>([])
    const initStateProject = {
        id: "",
        title: "",
        created_at: "",
        subtitle: "",
        stack: "",
        description: "",
        repository: "",
        demo: "",
        public: false,
        img: "",
    }
    const [projectSelected, setProjectSelected] = useState<project>(initStateProject)

    const getProjects = async () => {
        const { data, error } = await supabase()
            .from("projects")
            .select()
        if (error) console.log(error)
        if (data) setListProjects(data || [])
    }
    useEffect(() => { getProjects() }, [])

    return listProjects.length ?
        <section
            className="projects mb-32"
            id="projetos"
        >
            <h3 className="title-section">Projetos</h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-1 w-full">
                {
                    listProjects.map((project) =>
                        project.public ?
                            <li
                                className="flex flex-col gap-1 justify-center items-center p-1 rounted border-2 border-gray-300 w-full md:w-52 cursor-pointer hover:bg-gray-200"
                                onClick={() => setProjectSelected(project)}
                                key={project.title}
                            >
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
                                            className="w-fit px-1 text-sm bg-primary rounded-lg text-white"
                                        >{item}</li>)}
                                    </ul>
                                </div>
                            </li>
                            : null
                    )
                }
            </ul>
            {/* MODAL PROJETO */}
            {
                projectSelected.title ?
                    <div>
                        <div className="fixed bgopder z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="flex h-full w-full items-center justify-center">
                                <div
                                    className="absolute z-20 mx-auto my-0 flex h-fit w-[230px] md:w-[430px] flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
                                    <header
                                        className="flex w-full items-center justify-between p-2 bg-slate-200 font-bold capitalize">
                                        <h2 className="text-2xl font-bold">
                                            {projectSelected.title}
                                        </h2>
                                        <div
                                            className="text-red-400 cursor-pointer"
                                            onClick={() => setProjectSelected(initStateProject)}
                                        >X</div>
                                    </header>

                                    <div className="flex flex-col gap-4 justify-between p-2">
                                        <main>
                                            <div className="flex w-full justify-center">
                                                <img
                                                    src={projectSelected.img}
                                                    alt={projectSelected.title}
                                                    className="w-1/2"
                                                />
                                            </div>
                                            <p className="border-b-2 font-bold">
                                                {projectSelected.subtitle}
                                            </p>
                                            <p>
                                                {projectSelected.description}
                                            </p>
                                        </main>
                                        <footer className="flex w-full justify-end gap-2">
                                            {projectSelected.repository
                                                ? <a
                                                    className="underline flex gap-1 items-center border-2 p-1"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    href={projectSelected.repository}
                                                >
                                                    Código <utils.BiLinkExternal />
                                                </a>
                                                : null
                                            }
                                            {projectSelected.demo
                                                ? <a
                                                    className="underline flex gap-1 items-center border-2 p-1"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    href={projectSelected.demo}
                                                >
                                                    Demonstração <utils.BiLinkExternal />
                                                </a>
                                                : null
                                            }
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => setProjectSelected(initStateProject)}
                            className="fixed inset-0 z-30 bg-black bg-opacity-50 cursor-pointer">
                        </div>
                    </div>
                    : null
            }
        </section>
        : null
}

