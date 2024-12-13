import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import CustomNavbar from './components/CustomNavbar'
import RadioComponent from './components/RadioComponent'

function App() {
  
  return (
    <>
    <div className='app bg-dark text-light'>
      <CustomNavbar />
      <RadioComponent />
    </div>
     
    </>
  )
}

export default App
