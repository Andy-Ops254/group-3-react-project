import react,{useState, useEffect, useDebugValue} from 'react'
import jewelryData from '../jewelryData'
import ProductList from './components/productList'
import Navbar from './components/Navbar'



function App() {
  // console.log(jewelryData) //JSON DATA IS WORKING Guys!!
const [jewelryList, setJewelryList]=useState([]) //calling state
const [cart, setCart] = useState([])
const cartCount = cart.length;

useEffect(()=>  {
  fetch("http://localhost:3000/jewelryData")
  .then(res => res.json())
  .then(Data => setJewelryList(Data)) //update the state, passdown as prop to component
}, [])


  return (
    <>
    <Navbar cartCount={cartCount} />

   <ProductList jewelries={jewelryList} />
    </>
    
  )
}

export default App
