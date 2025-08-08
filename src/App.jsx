import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Projects from "./pages/Projects"
import AllProjects from "./pages/AllProjects"
import ProjectDetails from "./pages/ProjectDetails"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop"

const App = () => {
    return (
        <div className="font-poppins">
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={
                    <>
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
                    </>
                } />
                <Route path="/projects" element={<AllProjects />} />
                <Route path="/projects/:slug" element={<ProjectDetails />} />
            </Routes>
        </div>
    );
}

export default App;
