import './App.css'
import Create from './components/Create'
import { Routes, Route } from 'react-router-dom'
import Read from './components/Read'
import Update from './components/Update'

function App() {


  return (
    <>
      <Routes>
        <Route exact path='/' element={<Create/>}/>
        <Route path='/read' element={<Read/>}/>
        <Route path='/update' element={<Update/>}/>
      </Routes>
    </>
  )
}

export default App
