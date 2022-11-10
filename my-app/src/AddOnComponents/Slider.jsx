

import {Box,Image,Flex} from '@chakra-ui/react'
import { useState,useRef,useEffect} from 'react'
import {Icon} from '@chakra-ui/icons'

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
      
        <Box mt='100px'>
          <Image src={images[count].url}/>  
         
        </Box>
        {/* <Box>
          {Array.from({length:10}).map((item,index)=>(
            <Flex>
              <Icon viewBox='0 0 200 200' color='grey.100'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>

            </Flex>
          ))}
        </Box> */}
        </Box>
    )
}
export default HeadingImageSlider