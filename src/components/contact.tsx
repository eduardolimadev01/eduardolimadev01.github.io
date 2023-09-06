import { useState } from "react"

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
            className="grid gap-2 grid-cols-1 md:grid-cols-2 mb-32"
        >
            <ul className="flex flex-col gap-2">
                <li className="rounded flex gap-2 items-center bg-primary p-1 text-white">
                    <span className="p-2 bg-green-300 rounded-full">
                        <utils.AiOutlineWhatsApp />
                    </span>
                    +55 (81) 99290-3150
                </li>
                <li className="rounded flex gap-2 items-center bg-primary p-1 text-white">
                    <span className="p-2 bg-blue-300 rounded-full">
                        <utils.AiOutlineMail />
                    </span>
                    eduardolimadesenvolvedor@gmail.com
                </li>
                <li className="rounded flex gap-2 items-center bg-primary p-1 text-white">
                    <span className="p-2 bg-sky-500 rounded-full">
                        <utils.AiFillLinkedin />
                    </span>
                    eduardo lima
                </li>
            </ul>
            <ul className="flex flex-col gap-2">
                <li className="flex flex-col gap-2">
                    <label>Nome</label>
                    <input
                        value={name}
                        type="text"
                        className="border-2 border-gray-300 rounded p-1"
                        onChange={e => setName(e.target.value)}
                    />
                </li>
                <li className="flex flex-col gap-2">
                    <label>Email</label>
                    <input
                        value={email}
                        type="text"
                        className="border-2 border-gray-300 rounded p-1"
                        onChange={e => setEmail(e.target.value)}
                    />
                </li>
                <li className="flex flex-col gap-2">
                    <label>Mensagem</label>
                    <textarea
                        value={msg}
                        className="border-2 border-gray-300 rounded p-1"
                        onChange={e => setMsg(e.target.value)}
                    />
                </li>
                <li>
                    <button type="button" className="bg-primary text-white p-3 rounded">
                        Enviar
                    </button>
                </li>
            </ul>
        </section>
    </div>
}

