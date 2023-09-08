export const Button = ({ children, style, onClick }: {
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    style?: string
}) => {
    const onclick = () => console.log()
    return <button
        onClick={onClick || onclick}
        className={`p-2 rounded border-2 capitalize ${style || ""}`}
    >
        {children}
    </button >
}

