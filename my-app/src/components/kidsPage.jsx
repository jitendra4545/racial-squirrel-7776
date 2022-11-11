
import HeadingImageSlider from "../AddOnComponents/Slider"
import {Text,Box} from "@chakra-ui/react"
import kidsData from '../J Data/kidsData.json'
import MidSection from "../AddOnComponents/midSecrion"
import Clock from "../AddOnComponents/saleStarts"
import { Heading,Grid,Image } from "@chakra-ui/react"
import Footer from "./Footer"

const Sliders=[
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/a606c305-a23f-4fe3-a630-343ced4a10261649782019470-Kids-Wear_Desk_Banner.jpg?v1'},
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/09f0df54-6f8f-4bb0-a4b9-3b374d4538561649782019495-Top-Brands-2_Desk_Banner.jpg'},
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/b97efc90-2359-48ea-bf74-9c72d552fdef1649782019503-T-Shirts-_-Shorts_Desk_Banner.jpg' },
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/7f5e46bd-da64-489b-bbab-ebf67b12f8091649782019457-Innerwear_Desk_Banner.jpg' },
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/0e977afc-87e2-4798-a0d6-bfb05ba796911649782019489-Super-Bottoms_Desk_Banner.jpg' },
 
]

function KidsPage(){
    return (
        <Box>
        <Box>
            <HeadingImageSlider   images={Sliders}/> 
            <Clock/>
        </Box>
       
        
    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>FAVOURITE BRANDS</Heading>
    <Grid  templateColumns='repeat(9, 1fr)' gap={2}>
    {kidsData.selection1.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>
    
    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>TOP PICKS</Heading>
    <Grid  templateColumns='repeat(11, 1fr)' gap={0} ml='50px' mr='50px'>
    {kidsData.selection2.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>ICONIC BRANDS</Heading>
    <Grid  templateColumns='repeat(5, 1fr)' gap={0} ml='50px' mr='50px'>
    {kidsData.selection3.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>



    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>FASHION & ESSENTIALS</Heading>
    <Grid  templateColumns='repeat(5, 1fr)' gap={7} ml='50px' mr='50px'>
    {kidsData.selection4.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>EXPLORE MORE</Heading>
    <Grid  templateColumns='repeat(2, 1fr)' gap={0} ml='50px' mr='50px'>
    {kidsData.selection5.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>
    


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>THE KIDS SPACE</Heading>
    <Grid  templateColumns='repeat(2, 1fr)' gap={7} ml='50px' mr='50px'>
    {kidsData.selection6.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>BUDGET BUY</Heading>
    <Grid  templateColumns='repeat(6, 1fr)' gap={4} ml='50px' mr='50px'>
    {kidsData.selection7.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>
    


    <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>SHOP MORE BRANDS</Heading>
    <Grid  templateColumns='repeat(5, 1fr)' gap={7} ml='50px' mr='50px'>
    {kidsData.selection8.map((el)=>(
        <Image  src={el.image}/>
    ))}
    </Grid>
    <Footer/>
        </Box>
    )     
}
export default KidsPage

