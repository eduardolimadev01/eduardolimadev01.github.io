import './style.css'

import {
    Header,
    Hero,
    Projects,
    Contact,
    Footer,
} from "./components/"

export default function App() {
    return <>
        <Header />
        <main className="main">
            <div className="mx-auto sm:w-[1000px] w-full flex container">
                <div className="flex flex-col w-full pap-2">
                    <Hero />
                    <Projects />
                    <Contact />
                </div>
            </div>
        </main>
        <Footer />
    </>
}

