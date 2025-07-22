import react,{useState, useEffect} from 'react'
import jewelryData from '../jewelryData'
function App() {
  // console.log(jewelryData) JSON DATA IS WORKING Guys!!
const [jewelryList, setJewelryList]=useState([]) //calling state

useEffect(()=>  {
  fetch("http://localhost:3000/")
  .then(res => res.json())
  .then(Data => console.log(Data))
}, [])


  return (
    <>
    <h1></h1>
    </>
  )
}

export default App
