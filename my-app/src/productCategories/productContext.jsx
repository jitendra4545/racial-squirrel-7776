import { useState } from "react";
import { createContext } from "react";

import { useToast } from '@chakra-ui/react'

export const DataContext=createContext()


function DataContextProvider({children}){
   
const [cart,setcart]=useState([])
const toast=useToast()
const handleCart=(el)=>{
    setcart([...cart,el])
    toast({
       title: 'Item added successfully.',
       description: "Now you can goto you Bag for confirm your order",
       status: 'success',
       duration: 3000,
       isClosable: true,
     })
    
    
}
   
   const value={cart,handleCart}
    return (
        <DataContext.Provider value={value} >
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider