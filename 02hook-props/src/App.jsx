

import './App.css'
import Count from './components/Count'
import Card from './components/Card'

function App() {
  

  return (
    
    <>    
     <Count/>
     <div className='flex gap-6 flex-wrap p-4 justify-center items-center'>
      <Card username="Monkey - 1" price ={125}/>
      <Card username="Monkey - 2" price ={455}/>
     </div>
      

    </>
  )
}

export default App
