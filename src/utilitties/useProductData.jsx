import { useEffect, useState } from 'react'
import { PRODUCTS_API } from './constant'

const useProductData = () => {
    const [products, setProducts]= useState([])

    useEffect(()=>{
        fetchData()
      }, [])

    const fetchData =async ()=>{
        try{
          const res =await fetch(PRODUCTS_API)
    
          if(!res.ok){
            throw new Error(`HTTP Error! Status : ${res.status} `)
          }
          const data = await res.json()
          setProducts(data.products)
        }catch(error){
          console.log("Failed to fetch Data :", error)
        }
      }  
  return products;
}

export default useProductData;