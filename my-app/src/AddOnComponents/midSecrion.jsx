
import {Text,Box} from "@chakra-ui/react"
import { Heading,Grid,Image } from "@chakra-ui/react"
function MidSection({a,b,c,d,e,f,g,h}){
   return (
    <Box>
    
    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>BIGGEST DEALS ON TOP BRANDS</Heading>
    <Grid  templateColumns='repeat(4, 1fr)' columnGap={4} ml='50px' mr='50px'>
    {a.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>CATEGORIES TO BAG</Heading>
    <Grid  templateColumns='repeat(6, 1fr)' gap={10} ml='50px' mr='50px'>
    {b.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>EXPLORE TOP BRANDS</Heading>
    <Grid  templateColumns='repeat(5, 1fr)' gap={10} ml='50px' mr='50px'>
    {c.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>


    
    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>MYNTRA LUXE</Heading>
    <Grid  templateColumns='repeat(6, 1fr)' gap={6} ml='50px' mr='50px'>
    {d.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>TRENDING IN INDIAN WEAR</Heading>
    <Grid  templateColumns='repeat(5, 1fr)' gap={10} ml='50px' mr='50px'>
    {e.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>TRENDING IN SPORTS WEAR</Heading>
    <Grid  templateColumns='repeat(5, 1fr)' gap={10} ml='50px' mr='50px'>
    {f.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>

    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>TRENDING IN FOOTWEAR</Heading>
    <Grid  templateColumns='repeat(5, 1fr)' gap={10} ml='50px' mr='50px'>
    {g.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>TRENDING IN ACCESSORIES</Heading>
    <Grid  templateColumns='repeat(5, 1fr)' gap={10} ml='50px' mr='50px'>
    {h.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>

{/* 
    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>FAVOURITE BRANDS</Heading>
    <Grid  templateColumns='repeat(8, 1fr)' gap={7} ml='50px' mr='50px'>
    {i.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>
    
    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>TOP PICKS</Heading>
    <Grid  templateColumns='repeat(11, 1fr)' gap={0} ml='50px' mr='50px'>
    {j.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>ICONIC BRANDS</Heading>
    <Grid  templateColumns='repeat(5, 1fr)' gap={0} ml='50px' mr='50px'>
    {k.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>



    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>FASHION & ESSENTIALS</Heading>
    <Grid  templateColumns='repeat(5, 1fr)' gap={7} ml='50px' mr='50px'>
    {l.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>EXPLORE MORE</Heading>
    <Grid  templateColumns='repeat(2, 1fr)' gap={0} ml='50px' mr='50px'>
    {m.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>
    


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>THE KIDS SPACE</Heading>
    <Grid  templateColumns='repeat(2, 1fr)' gap={7} ml='50px' mr='50px'>
    {n.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>BUDGET BUY</Heading>
    <Grid  templateColumns='repeat(6, 1fr)' gap={4} ml='50px' mr='50px'>
    {o.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>
    


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>SHOP MORE BRANDS</Heading>
    <Grid  templateColumns='repeat(5, 1fr)' gap={7} ml='50px' mr='50px'>
    {p.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>
     */}

    </Box>
   )

}

export default MidSection