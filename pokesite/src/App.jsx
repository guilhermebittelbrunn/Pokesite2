import Nav from './components/Nav'
import Heaeder from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'

function App() {
  
  return (
    <div className='w-full m-auto flex flex-col items-center'>
      <Nav/>
      <Heaeder/>
      <Container/>
      <Footer/>
    </div>
  )
}

export default App
