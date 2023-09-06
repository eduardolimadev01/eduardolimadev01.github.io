import * as utils from "../utils"

import {
    useState,
    useEffect
} from 'react'

type project = {
    title: string
    subtitle: string
    stack: Array<string>
    description: string
    repository: string
    demo: string
    img: string
    created_at: string
}

export const Projects = () => {
    const [listProjects, setListProjects] = useState<project[]>([])

    const initStateProject = {
        title: "",
        subtitle: "",
        stack: [],
        description: "",
        repository: "",
        demo: "",
        img: "",
        created_at: "",
    }
    const [projectSelected, setProjectSelected] = useState<project>(initStateProject)

    useEffect(() => {
        const l = [
            {
                repository: "https://github.com/eduardolimadev01/eduardolimadev01.github.io",
                subtitle: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit.",
                stack: ["foobar", "barfoo"],
                demo: "https://github.com/eduardolimadev01/eduardolimadev01.github.io",
                title: "test",
                description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
                img: "/vite.svg",
                created_at: "2023-09-06T15:36:46.003Z",
            },
        ]
        setListProjects(l)
    }, [])

    return listProjects.length ?
        <section
            className="projects mb-32"
            id="projetos"
        >
            <h3 className="title-section">Projetos</h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-1 w-full">
                {
                    listProjects.map((project) =>
                        <li
                            className="flex flex-col gap-1 justify-center items-center p-1 rounted border-2 border-gray-300 w-52 cursor-pointer hover:bg-gray-200"
                            onClick={() => setProjectSelected(project)}
                            key={project.title}
                        >
                            <img
                                src="/vite.svg"
                                className="w-48 h-48"
                            />
                            <div className="flex flex-col gap-2 p-1">
                                <h3>
                                    {project.subtitle}
                                </h3>
                                <ul className="flex gap-1">
                                    {project.stack.map(item => <li key={item}>{item}</li>)}
                                </ul>
                            </div>
                        </li>
                    )
                }
            </ul>
            {
                projectSelected.title ?
                    <div className="">
                        <div className="fixed bgopder z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="flex h-full w-full items-center justify-center">
                                <div
                                    className="absolute z-20 mx-auto my-0 flex h-fit w-[230px] md:w-[430px] flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
                                    <div
                                        className="flex w-full items-center justify-between p-2 bg-slate-200 font-bold capitalize">
                                        {projectSelected.title}
                                        <div
                                            className="text-red-400 cursor-pointer"
                                            onClick={() => setProjectSelected(initStateProject)}
                                        >X</div>
                                    </div>

                                    <div className="flex flex-col gap-4 justify-between p-2">
                                        <main>
                                            <div className="">
                                                <img src={projectSelected.img} alt={projectSelected.title} />
                                            </div>
                                            {projectSelected.description}
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

