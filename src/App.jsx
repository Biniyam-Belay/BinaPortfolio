import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <section id="home">
                <Hero />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default App
