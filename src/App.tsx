import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar'
import RadioComponent from './components/RadioComponent'
import MainContent from './components/MainContent'
import CustomFooter from './components/CustomFooter'

function App() {
  return (
    <>
      <div className="bg-dark text-light">
        <CustomNavbar />
        <RadioComponent />
        <MainContent />
        <CustomFooter />
      </div>
    </>
  )
}

export default App
