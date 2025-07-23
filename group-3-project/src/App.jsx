import react,{useState, useEffect, useDebugValue} from 'react'
import jewelryData from '../jewelryData'
import ProductList from './components/productList'
import Navbar from './components/Navbar'
import CategoryFilter from './components/categoryFilter'



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

//logic solves the repetition of jewel categories
    let categories = ["All"]

    for (const item of jewelryList) {
        if (!categories.includes(item.category)) {
            categories.push(item.category)
        }
    }

  return (
    <>
    <Navbar cartCount={cartCount} />
  
    <ProductList jewelries={jewelryList} categories={categories} />
    </>
    
  )
}

export default App
