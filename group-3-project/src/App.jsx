import react,{useState, useEffect, useDebugValue} from 'react'
import jewelryData from '../jewelryData'
import ProductList from './components/productList'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  // console.log(jewelryData) //JSON DATA IS WORKING Guys!!
const [jewelryList, setJewelryList]=useState([]) //calling state


useEffect(()=>  {
  fetch("http://localhost:3000/jewelryData")
  .then(res => res.json())
  .then(Data => setJewelryList(Data)) //update the state, passdown as prop to component
}, [])


  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<ProductList jewelries={jewelryList} />} />
    </Routes>
    </>

    
  )
}

export default App
