import { useState } from 'react'
import './App.scss'
import { Header } from './Components/Header/Header'
import { AppRouter } from './Components/AppRouter/AppRouter'
import { Main } from './Components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Main>
      <AppRouter></AppRouter>
    </Main>
    </>
  )
}

export default App