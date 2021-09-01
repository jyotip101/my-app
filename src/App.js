import Footer from './componentes/FooterPage'
import Header from './componentes/Header'
import HomePage from './componentes/HomePage'
import Projects from './componentes/Projects'
import Work from './componentes/Work'

import './css/App.css'

function App() {
  return (
    <div className="App">  
      <Header/>
      <HomePage/> 
      <Projects/>
      <Work/>
     <Footer />
    </div>
  )
}

export default App
