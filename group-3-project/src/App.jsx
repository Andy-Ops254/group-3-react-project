import react,{useState, useEffect, useDebugValue} from 'react'
import jewelryData from '../jewelryData'
import ProductList from './components/productList'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Cart from './components/Cart'
import AddProductForm from './components/AddProductForm'
import Footer from './components/footer'

function App() {
  // console.log(jewelryData) //JSON DATA IS WORKING Guys!!
const [jewelryList, setJewelryList]=useState([]) //calling state

const [cart, setCart] = useState([]); 
//first i add state to store the list of items in the cart


const cartCount = cart.length;
//then i create a variable to track and display the number of items in the cart

useEffect(()=>  {
  fetch("https://jewelerydata-json.onrender.com/api/jewelryData")
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
  
      
function handleAddToCart(item){
  setCart([...cart, item]);
}
//here i add a fuction to handle adding an item to the cart

function handleRemoveFromCart(index) {
  const updatedCart = [...cart];
  updatedCart.splice(index, 1);
  setCart(updatedCart);
}
//then i create a function to handle removing an item from the cart by index
//creates a copy of the cart,removes the specified item and updates the state
function handleAddToProduct(newProduct) {
  setJewelryList([...jewelryList, newProduct])
}

  return (
    <>
    <Navbar cartCount={cartCount} />

    <Routes>
      <Route path="/" element={<ProductList jewelries={jewelryList}  onAddToCart={handleAddToCart} categories={categories}/>}/>
      <Route path="/About" element={<About />} />
      <Route path="/Cart" element={<Cart items={cart} onRemove={handleRemoveFromCart} />} />
      <Route path='/newform' element={<AddProductForm onAddProduct={handleAddToProduct} />} />
    </Routes>
      <Footer />

    </>
    
    //then i pass the total cart count to the navbar so it can be displayed to the user
    //passed the add to cart handler down to each product component
    // then rendered the cart component and passed the cart items and remove handler as props 

  )
}

export default App
