
import {Box,Flex,Image,Text,Spacer,Grid, Heading, Button,BeatLoader} from '@chakra-ui/react'
import { useState } from 'react'
import CartAdd from './CartPage'
import { useToast } from '@chakra-ui/react'
import DataContextProvider from './productContext'

function Product ({el}){

  const [cart,setcart]=useState([])
  const [submit,setsubmit]=useState(false)
const toast=useToast()
    console.log(cart)
 
return(
   
  <Box>
        <Box>
        <Image src={el.images[0]} />
        <Heading as='h4' size='sm'>{el.title}</Heading>
        <Text>{el.subtitle}</Text>
        <Flex><Heading as='h4' size='sm'>{'Rs.'+el.discounted_price}</Heading> 
        <Spacer/>{'Rs.'+el.strike_price}<Spacer/>
        <Text color='red'>{el.discount}</Text></Flex>
        <Box textAlign='center'>
       <Button onClick={()=>  {
        setcart([...cart,el])
       toast({
          title: 'Item added successfully.',
          description: "Now you can goto you Bag for confirm your order",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
       
       }
      }
         >Add To Bag</Button>
         
         </Box>
        
        </Box>

      
        </Box>
        
)
}
export default Product   