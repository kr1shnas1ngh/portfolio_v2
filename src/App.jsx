import Main from "./components/main"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="bg-background flex flex-col items-center lg:min-h-screen">
      <Nav />
      <div id="home"><Main /></ div>
      <div id="skills"><Skills /></ div>
      <div id="projects"><Projects /></ div>
    <Footer />
    </div>
  )
}

export default App
