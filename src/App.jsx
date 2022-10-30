import { Header } from './components/Header'
import { Bio } from './components/Bio'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'


import './App.css'

function App() {
  return (
    <div className="App">
      <Header content="Meus projetos favoritos" />
      <Bio />
      <Cards />
      <Footer content="Feito com ♡ por Simara. E todos os direitos são reservados." />
    </div>
  )
}

export default App
