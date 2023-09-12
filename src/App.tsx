import './style.css'

import {
    Header,
    Hero,
    About,
    Projects,
    Contact,
    Footer,
} from "./components/"

export default function App() {
    return <>
        <Header />
        <main className="main">
            <div className="mx-auto sm:w-[1000px] w-full flex container px-3">
                <div className="flex flex-col w-full pap-2">
                    <Hero />
                    <About />
                    <Projects />
                    <Contact />
                </div>
            </div>
        </main>
        <Footer />
    </>
}

