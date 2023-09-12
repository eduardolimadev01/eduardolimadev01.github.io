import React from 'react'
import ReactDOM from 'react-dom/client'

import "../style.css"

const Link = () => {
    return <div className="">
        link2
    </div>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Link />
    </React.StrictMode>,
)
