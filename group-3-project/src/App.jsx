import react,{useState, useEffect} from 'react'
import jewelryData from '../jewelryData'





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
    <productList jewelries={jewelryList} />
    </>
  )
}

export default App
