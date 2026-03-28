import './App.css'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <h1>Welcome to React Router</h1>
        <Outlet />
      </div>
    </>
  )
}

export default App
