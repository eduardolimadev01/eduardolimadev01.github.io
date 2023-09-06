import './style.css'

import {
    Header,
    Projects,
    Footer,
    Hero,
} from "./components/"

export default function App() {
    return <>
        <Header />
        <main className="main">
            <div className="mx-auto w-[1000px] sm:w-full flex container">
                <div className="flex flex-col w-full pap-2">
                    <Hero />
                    <Projects />
                </div>
            </div>
        </main>
        <Footer />
    </>
}

