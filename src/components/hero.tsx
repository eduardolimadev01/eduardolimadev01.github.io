import * as utils from "../utils"

export const Hero = () => {
    const listSocialLinks = [
        {
            title: "Github",
            href: "https://github.com/eduardolimadev01",
            icon: <utils.AiFillGithub />,
        },
        {
            title: "Linkedin",
            href: "https://www.linkedin.com/in/eduardo-ldev",
            icon: <utils.AiFillLinkedin />,
        },
    ]

    return <section
        className="flex flex-col justify-center items-center h-80 w-full px-2"
        id="home"
    >
        <h2 className="text-4xl">Desenvolvedor Web Front-End</h2>
        <ul className="flex gap-1 text-white text-2xl">
            {listSocialLinks.map((link) => <li key={link.title}>
                <a
                    target="_blank"
                    className="flex rounded-lg border-2 border-gray-300 p-1 bg-primary hover:opacity-75"
                    rel="noreferrer"
                    href={link.href}
                >
                    {link.icon}
                </a>
            </li>)}
            <li>
                <a
                    className="flex rounded-lg border-2 border-gray-300 p-1 bg-primary hover:opacity-75"
                    href="/cv.html">
                    <utils.AiOutlineAudit />
                </a>
            </li>
        </ul>
    </section >
}

