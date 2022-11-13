
import {Box,Heading,Text} from '@chakra-ui/react'
import AllClotingData from '../J Data/AllClotingData.json'
import {Link} from 'react-router-dom'
import ProductItems from './ProductItems'
import Navbar from '../components/Navbar'
import Men from '../J Data/Men.json'
import Footer from '../components/Footer'

function MensProduct(){

console.log(AllClotingData)
// if(AllClotingData.category=='Child'){
//       console.log(AllClotingData)
// }


    return (
        <Box>
        <Box>
        <Heading letterSpacing={5} color='blackAlpha.700' mt='100px' mb='50px' ml='50px' as='h2' size='lg'></Heading>
        </Box>
            
            
   
     <ProductItems   
    men={Men}
     />
     
        </Box>
    )

}
export default MensProduct