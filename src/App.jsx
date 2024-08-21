import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Collection from './Pages/Collection';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Homepage from './Pages/Homepages'
import About from './Pages/About';
import Contact from './Pages/Contact';
import DetailsPage from './Pages/DetailsPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}>
      <Route path='Collection' element={<Collection></Collection>} ></Route>
      <Route path='Men' element={<Men></Men>}></Route>
      <Route path='Women' element={<Women></Women>} ></Route>
      <Route path='About' element={<About></About>}></Route>
      <Route path='Contact' element={<Contact></Contact>}></Route>
      <Route path='/product/:id'element={<DetailsPage/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
