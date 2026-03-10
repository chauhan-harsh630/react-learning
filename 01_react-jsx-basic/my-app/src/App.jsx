import { useState } from 'react'
import './App.css'
import ProfileCard from '../src/component/ProfileCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1>Profile card </h1>
        <ProfileCard />
      </div>
    </>
  )
}

export default App
