import Predictions from './components/Predictions/Predictions'
import Navbar from './components/Navbar/Navbar'
import './style.scss'
import Input from './components/Input/Input'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Input />
      <Predictions />
    </div>
  )
}

export default App
