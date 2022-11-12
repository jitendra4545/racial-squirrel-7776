
import {Text,Box} from "@chakra-ui/react"
import { Heading,Grid,Image } from "@chakra-ui/react"
import {Link, useNavigate} from 'react-router-dom'

function MidSection({a,b,c,d,e,f,g,h}){
    const navigate=useNavigate()

const handleClick=()=>{
   navigate('/mensproduct') 
     
}

   return (
    <Box>
    
    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>BIGGEST DEALS ON TOP BRANDS</Heading>
    <Grid  templateColumns='repeat(4, 1fr)' columnGap={4} ml='50px' mr='50px'>
    {a.map((el)=>(
      <Box onClick={handleClick}><Image  src={el.image}/></Box>  
    ))}
    </Grid>


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>CATEGORIES TO BAG</Heading>
    <Grid  templateColumns='repeat(6, 1fr)' gap={10} ml='50px' mr='50px'>
    {b.map((el)=>(
        <Box onClick={handleClick}><Image  src={el.image}/></Box> 
    ))}
    </Grid>


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>EXPLORE TOP BRANDS</Heading>
    <Grid  templateColumns='repeat(5, 1fr)' gap={10} ml='50px' mr='50px'>
    {c.map((el)=>(
        <Box onClick={handleClick}><Image  src={el.image}/></Box> 
    ))}
    </Grid>


    
    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>MYNTRA LUXE</Heading>
    <Grid  templateColumns='repeat(6, 1fr)' gap={6} ml='50px' mr='50px'>
    {d.map((el)=>(
     <Box onClick={handleClick}><Image  src={el.image}/></Box> 
    ))}
    </Grid>


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>TRENDING IN INDIAN WEAR</Heading>
    <Grid  templateColumns='repeat(5, 1fr)' gap={10} ml='50px' mr='50px'>
    {e.map((el)=>(
        <Box onClick={handleClick}><Image  src={el.image}/></Box> 
    ))}
    </Grid>


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>TRENDING IN SPORTS WEAR</Heading>
    <Grid  templateColumns='repeat(5, 1fr)' gap={10} ml='50px' mr='50px'>
    {f.map((el)=>(
         <Box onClick={handleClick}><Image  src={el.image}/></Box> 
    ))}
    </Grid>

    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>TRENDING IN FOOTWEAR</Heading>
    <Grid  templateColumns='repeat(5, 1fr)' gap={10} ml='50px' mr='50px'>
    {g.map((el)=>(
       <Box onClick={handleClick}><Image  src={el.image}/></Box> 
    ))}
    </Grid>


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>TRENDING IN ACCESSORIES</Heading>
    <Grid  templateColumns='repeat(5, 1fr)' gap={10} ml='50px' mr='50px'>
    {h.map((el)=>(
       <Box onClick={handleClick}><Image  src={el.image}/></Box> 
    ))}
    </Grid>


    </Box>
   )

}

export default MidSection