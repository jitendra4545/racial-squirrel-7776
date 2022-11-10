

import {Box, Heading,Image} from '@chakra-ui/react'
import { useState,useRef,useEffect } from 'react'

function HeadingImageSlider({images}){
   
 const [count,setcount]=useState(0)
 const Timerref = useRef(null);

  const handleStart=()=>{
   
  
    if (Timerref.current ) return;

    Timerref.current = setInterval(() => {
      setcount((time) => time + 1);
    }, 3000);
   
 
  }
  
 const handleReset=()=>{
    if(count==9){
        setcount(0)
        setInterval(() => {
            setcount((time) => time + 1);
          }, 3000);
    clearInterval(Timerref.current)
    }
  
 
 }

 useEffect(()=>{
handleStart()
handleReset()
 },)
    return (
        <Box>
      
        <Box mt='50px'>
          <Image src={images[count].url}/>  
         
        </Box>
        </Box>
    )
}
export default HeadingImageSlider