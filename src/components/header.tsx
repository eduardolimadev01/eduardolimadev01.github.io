import * as utils from "../utils"
import { useState } from "react"

export const Header = () => {
    const listMenu = [
        "home",
        "projetos",
        "sobre",
        "contato",
    ]
    const [showMenu, setShowMenu] = useState(false)
    return <header
        className="fixed z-20 w-full bg-primary shadow-md"
    >
        <div className="mx-auto sm:w-[1000px] w-full flex container">
            <div className="flex flex-col md:flex-row justify-between bg-primary text-white items-center w-full px-2">
                <div className={`flex justify-between w-full items-center px-5`}>
                    <h1 className="text-2xl py-3 font-bold">Eduardo Lima</h1>
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="md:hidden text-xl"
                    >
                        {!showMenu
                            ? <utils.AiOutlineMenu />
                            : <utils.AiOutlineClose />
                        }
                    </button>
                </div>
                <ul className={`md:flex pt-5 md:pt-0 md:items-center md:gap-2 md:pb-0 pb-12 absolute md:static bg-primary md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${showMenu ? "top-12" : "top-[-490px]"}`}>
                    {listMenu.map((item) => <li
                        className="w-full pt-5 md:pt-0"
                        key={item}
                    >
                        <a href={`#${item}`}
                            className="capitalize w-full p-2 border-2 rounded hover:underline hover:bg-white hover:text-primary cursor-pointer"
                        >
                            {item}
                        </a>
                    </li>
                    )}
                </ul>
            </div>
        </div>
    </header>
}

