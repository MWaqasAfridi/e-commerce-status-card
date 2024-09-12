import axios from "axios"
import Category from "./components/Category"
import ProductItems from "./components/ProductItems"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import './App.css'
function App() {

const [finalCategory, setFinalCategory] = useState([])
const [finalPro, setfinalPro] = useState([])
const [catName, setCatName] = useState('')

let getCategory = ()=>{
  axios.get('https://dummyjson.com/products/category-list')
  .then((res) =>res.data)
  .then((finalRes) =>{
    // console.log(finalRes);
    setFinalCategory(finalRes); 
  })
}


let getProducts = ()=>{
  axios.get('https://dummyjson.com/products')
  .then((proRes) =>proRes.data)
  .then((finalRes) =>{
    setfinalPro(finalRes.products); 
  })

}

useEffect(()=>{
  getCategory();
  getProducts();
},[])


useEffect(()=>{
  if(catName!==""){
    axios.get(`https://dummyjson.com/products/category/${catName}`)
    .then((proRes) =>proRes.data)
    .then((finalRes) =>{
      setfinalPro(finalRes.products); 
  })
  console.log(catName)
  }
},[catName])

let proItems = finalPro.map((products,index)=>{  
  return(
    <ProductItems key={index} pdata={products} /> 

  )
})

  return (
    <>
    <div className="max-w-[1320px] mx-auto">
     <Header />
     </div>
    <div className="py-[40px]">
      <div className="max-w-[1320px] mx-auto"> 
        <h1 className="text-center text-[32px] font-bold mb-[18px] text-indigo-500">Our Products</h1>
        <div className="grid grid-cols-[30%_auto] gap-[20px]">
          <div>
            <Category finalCategory={finalCategory} setCatName={setCatName} />
          </div>
          <div>
            <div className="grid grid-cols-3 gap-4">
             {
             finalPro.length >=1 ? proItems : "No Product"
             }
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
