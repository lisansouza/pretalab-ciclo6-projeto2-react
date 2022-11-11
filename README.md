# 💎 Dados

```
Crie uma pasta chamada `data`, nessa pasta crie um arquivo `conteudos.js` e dentro dele popule um array de objetos com as informações dos seus conteudos favoritos.
```

# 🥷 Componentes do nosso projeto

- Header (ps: copie os simbolos u.u)
  ```
    ≂≂≂≂≂≂≂≂≂≂
      Titulo
    ≃≃≃≃≃≃≃≃≃≃
  ```
- Bio (Nome, apelido, foto e descrição)
- Card (Titulo, descrição e foto)
- Cards (Esse componente irá chamar o componente `card` repetindo ele pelo numero de projetos inseridos no array de projetos).
- Footer

# 💜 Estrutura do App

```
import { Header } from './components/Header'
import { Bio } from './components/Bio'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header title="Meus conteúdos favoritos" />
      <Bio />
      <Cards />
      <Footer message="Feito com ♡ por `seu nome`. E todos os direitos são reservados." />
    </div>
  )
}

export default App
```

# 🥸 Vale relembrar

- Como gerar o projeto em React com o vite ➟ ` npm create vite@latest nome-do-app -- --template react`

- `❗ Bebam água minha gente <3 :) ❗`
