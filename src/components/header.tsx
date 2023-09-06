export const Header = () => {
    const listMenu = [
        "home",
        "projetos",
        "contato",
    ]
    return <header
        className="mx-auto w-[1000px] sm:w-full flex container"
    >
        <div className="flex justify-between border-b-2 bg-primary text-white items-center w-full px-2">
            <h1 className="text-2xl py-3">Eduardo Lima</h1>
            <ul className="flex gap-1 items-center">
                {listMenu.map((item) => <li
                    key={item}
                >
                    <a href={`#${item}`}>
                        {item}
                    </a>
                </li>
                )}
            </ul>
        </div>
    </header>
}

