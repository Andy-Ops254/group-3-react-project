import react,{useState, useEffect, useDebugValue} from 'react'
import jewelryData from '../jewelryData'
import ProductList from './components/productList'
import Navbar from './components/Navbar'
import Cart from './components/Cart'

function App() {
  // console.log(jewelryData) //JSON DATA IS WORKING Guys!!
const [jewelryList, setJewelryList]=useState([]) //calling state
const [cart, setCart] = useState([]); 
//first i add state to store the list of items in the cart

const cartCount = cart.length;
//then i create a variable to track and display the number of items in the cart

useEffect(()=>  {
  fetch("http://localhost:3000/jewelryData")
  .then(res => res.json())
  .then(Data => setJewelryList(Data)) //update the state, passdown as prop to component
}, [])

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

  return (
    <>
    <Navbar cartCount={cartCount}/>
    {/*then i pass the total cart count to the navbar so it can be displayed to the user*/}

    <ProductList jewelries={jewelryList} onAddToCart={handleAddToCart} />
    {/*passed the add to cart handler down to each product component*/}\

    <Cart items={cart} onRemove={handleRemoveFromCart} />
    {/*then rendered the cart component and passed the cart items and remove handler as props */}
    </>
    
  )
}

export default App
