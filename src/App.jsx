import { useState } from 'react'   
import AboutSection from './components/AboutSection'
import AboutUs from './pages/AboutUs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
<AboutUs/>
    </div>
  )
}

export default App
