import { useState } from 'react'
import './App.css'
import Tic from './Components/Tic'
import { Circle , X} from 'react-feather';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='Main-container'>
      <Tic/>
    </div>
  )


}

export default App;