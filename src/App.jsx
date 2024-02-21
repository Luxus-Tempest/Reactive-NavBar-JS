import { useState } from 'react'
import './App.scss'
import Header from './pages/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
    </>
  )
}

export default App
