import { ThemeProvider } from './context/ThemeContext';
import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

const App = () => {
    return (
        <ThemeProvider>
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
                <section id="footer">
                    <Footer />
                </section>
            </div>
        </ThemeProvider>
    )
}

export default App
