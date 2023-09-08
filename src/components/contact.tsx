import { useState } from "react"
import { Button } from "./Button"

import * as utils from "../utils"
export const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    return <div className="">
        <h3
            className="title-section mb-32"
            id="contato"
        >
            contato
        </h3>
        <section
            className="flex flex-col md:flex-row gap-10 grid-cols-1 justify-between mb-32 w-full"
        >
            <ul className="flex flex-col gap-2 w-full">
                <li
                    className="rounded flex flex-col gap-2 items-start bg-primary p-1 text-white group"
                >
                    <div className="flex gap-1 items-center">
                        <span className="p-2 bg-green-300 rounded-full">
                            <utils.AiOutlineWhatsApp />
                        </span>
                        <h2 className="text-2xl md:text-xl">
                            +55 (81) 99290-3150
                        </h2>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Button
                            onClick={() => {
                                navigator.clipboard.writeText("81992903150")
                            }}
                            style="bg-white text-primary rounded-lg text-sm hover:underline cursor-pointer"
                        >
                            copia número
                        </Button>
                        <Button
                            style="bg-white text-primary rounded-lg text-sm hover:underline cursor-pointer"
                        >
                            <a
                                target="_blank"
                                rel="noreferrer nofollow"
                                href="https://api.whatsapp.com/send?phone=5581992903150"
                            >
                                WhatsApp
                            </a>
                        </Button>
                    </div>
                </li>
                <li
                    className="rounded group flex flex-wrap gap-2 items-center bg-primary p-1 text-white">
                    <span className="p-2 bg-blue-300 rounded-full">
                        <utils.AiOutlineMail />
                    </span>
                    <h2 className="text-sm md:text-lg">
                        eduardolimadesenvolvedor@gmail.com
                    </h2>
                    <Button
                        onClick={() => {
                            navigator.clipboard.writeText("eduardolimadesenvolvedor@gmail.com")
                        }}
                        style="w-fit items-center bg-white text-primary rounded-lg text-sm hover:underline cursor-pointer"
                    >
                        copia email
                    </Button>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer nofollow"
                        className="rounded flex gap-2 items-center bg-primary p-1 text-white group cursor-pointer"
                        href="https://www.linkedin.com/in/eduardo-ldev"
                    >
                        <span className="p-2 bg-sky-500 rounded-full">
                            <utils.AiFillLinkedin />
                        </span>
                        <h2 className="text-lg group-hover:underline">
                            Eduardo Lima
                        </h2>
                        <span
                            className="text-black bg-white p-1 rounded-lg w-fit"
                        >
                            <utils.BiLinkExternal />
                        </span>
                    </a>
                </li>
                <li>
                    <a
                        className="rounded flex gap-2 items-center bg-primary p-1 text-white group cursor-pointer"
                        href="/cv.html"
                    >
                        <span className="p-2 bg-slate-500 rounded-full">
                            <utils.AiOutlineAudit />
                        </span>
                        <h2 className="text-lg group-hover:underline">
                            Currículo
                        </h2>
                        <span
                            className="text-black bg-white p-1 rounded-lg w-fit"
                        >
                            <utils.BiLinkExternal />
                        </span>
                    </a>
                </li>
            </ul>
            <div className="hidden md:flex h-80 w-1 bg-primary rounded-lg"></div>
            <ul className="flex flex-col gap-2 w-full">
                <li className="flex flex-col gap-2">
                    <label className="font-bold">Nome:</label>
                    <input
                        value={name}
                        type="text"
                        className="border-2 border-gray-300 rounded p-1"
                        onChange={e => setName(e.target.value)}
                    />
                </li>
                <li className="flex flex-col gap-2">
                    <label className="font-bold">Email:</label>
                    <input
                        value={email}
                        type="text"
                        className="border-2 border-gray-300 rounded p-1"
                        onChange={e => setEmail(e.target.value)}
                    />
                </li>
                <li className="flex flex-col gap-2">
                    <label className="font-bold">Mensagem:</label>
                    <textarea
                        value={msg}
                        className="border-2 border-gray-300 rounded p-1"
                        onChange={e => setMsg(e.target.value)}
                    />
                </li>
                <li>
                    <Button style="bg-primary text-white hover:underline">
                        Enviar
                    </Button>
                </li>
            </ul>
        </section>
    </div>
}

