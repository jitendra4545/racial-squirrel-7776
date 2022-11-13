import {Box,Flex,Center,Square,Text,Grid, Heading,Input, Spacer, Button} from '@chakra-ui/react'
import Product from './Products'
import {useState} from 'react'

import Footer from '../components/Footer'

function ProductItems({men}){
  

    return(
        <Box >
            <Box  >
               
                <Heading  >All Products</Heading>
             <Grid gridTemplateColumns='repeat(3,1fr)'>
             <Box>
                <Heading as='h5' size='sm' >FILTERS</Heading>
             </Box>
             <Box>
                <Flex>
             <select name="" id="">
                <option value="">Bundles</option>
             </select>
             <Spacer/>
             <select name="" id="">
                <option value="">Country of Origin</option>
             </select>
             <Spacer/>
             <select name="" id="">
                <option value="">size</option>
             </select>
             </Flex>
             </Box>
             <Box textAlign='right'>
                <select name="" id="">
                <option value="">Sort by : <b>Recommended</b></option>
                <option value="">Recommended</option>
                <option value="">Whats new</option>
                <option value="">Popularity</option>
                <option value="">Better Option</option>
                
                </select>
             </Box>
             </Grid>
            </Box>
            <hr/>
        <Flex >
            
            <Grid h='700px'  w='15%'  >
            <Heading as='h5'mt='20px' size='sm' >CATEGORIES</Heading>
            
           <Box ml='20px'>
    <input type="checkbox" /> <label htmlFor="">Tshirts</label>
    </Box>
    <Box ml='20px'>
    <input type="checkbox" /> <label htmlFor="">Shirts</label>
    </Box>
    <Box ml='20px'>
    <input type="checkbox" /> <label htmlFor="">Jeans</label>
    </Box>
    <Box ml='20px'>
    <input type="checkbox" /> <label htmlFor="">Sweatshirts</label>
    </Box>
    <Box ml='20px'>
    <input type="checkbox" /> <label htmlFor="">Trousers</label>
    </Box>
    <Box ml='20px'>
    <input type="checkbox" /> <label htmlFor="">Jackets</label>
    </Box>
    <Box ml='20px'>
    <input type="checkbox" /> <label htmlFor="">Track Pants</label>
    </Box>
    <Box ml='20px'>
    <input type="checkbox" /> <label htmlFor="">Sweaters</label>
    </Box>
    
    <hr/>
    <Heading mt='20px' as='h5' size='sm' >BRAND</Heading>
    <Box ml='20px'>
    <input type="checkbox" /> <label htmlFor="">Roadster</label>
    </Box>
    <Box ml='20px'>
    <input type="checkbox" /> <label htmlFor="">Flying Machine</label>
    </Box>
    <Box ml='20px'>
    <input type="checkbox" /> <label htmlFor="">Allen Solly</label>
    </Box>
    <Box ml='20px'>
    <input type="checkbox" /> <label htmlFor="">U S Polo Assn</label>
    </Box>
    <Box ml='20px'>
    <input type="checkbox" /> <label htmlFor="">Mast & Habour</label>
    </Box>
    <Box ml='20px'>
    <input type="checkbox" /> <label htmlFor="">SPYKAR</label>
    </Box>
    <Box ml='20px'>
    <input type="checkbox" /> <label htmlFor="">WROGN</label>
    </Box>
  </Grid>


  <Box border='1px solid ' mt='20px' ml='20px' h='1700px' width='85%' >
   <Box>
  <Grid  templateColumns='repeat(5, 1fr)'  gap={6} >
  {
    men.map((el)=>(
         <Product 
         el={el}
        
         />
    ))
  }
 </Grid>
 </Box>


  </Box> 
  </Flex>
  <Footer />
</Box>
    )
}

export default ProductItems