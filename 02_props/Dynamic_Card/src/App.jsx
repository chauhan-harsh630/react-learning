import './index.css'
import Myimage from './assets/image.png'
import Card from './component/Card'
function App() {
  return (
    <>
      <div className='container'>
        <Card name={30} bio="CS student Learning Web Development"
          profession="Web Developer" image={Myimage} />
      </div>
    </>
  )
}

export default App
