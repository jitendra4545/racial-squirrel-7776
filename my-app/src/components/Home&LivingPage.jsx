
import {Text,Box,Heading,Grid,Image,} from "@chakra-ui/react"
import Clock from "../AddOnComponents/saleStarts"
import Footer from "./Footer"
import {Link} from 'react-router-dom'






export const offerImg = [
    {img:'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/146e1519-1e51-458e-ac86-0bcf2a960ed81646747314118-Kurtas-_-Kurta-Sets-Men.jpg'},
    {img:'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/ee94691e-c0f7-480e-8a35-8e9e4eaef5e81646747314141-Loungewear--Men.jpg'},
    {img:'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/98f1f5d8-4dea-4aa2-baa2-68776efd33cc1646747314195-Sandals.jpg'},
    {img:'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/dc3440ce-29c4-4b73-8b63-7abc2719e1911646747314329-T-Shirts--Men-.jpg'},
    {img:'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/dd45eb4a-5939-4a82-b6c5-6c8f383770591646747314042-Jeans--Men-.jpg'},
    {img:'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/3e707144-97c7-43b0-9015-185eecf8eeb91646747314294-Trackpants-Men.jpg'}
] 





function HomeLivingPage(){
    return (
        <Box>
           
            
           <Heading letterSpacing={5} color='blackAlpha.700' mt='100px' mb='50px' ml='50px' as='h2' size='lg'></Heading>
            <Grid  templateColumns='repeat(1, 1fr)' gap={0}>
           
                <Image src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/6/8/eff01060-f706-468d-b97c-95cdf43174f91528443826867-Desktop-Home-Banner.jpg'/>
            </Grid>

             
            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>NICE TO SEE YOU HERE, COME ON IN!</Heading>
            <Grid  templateColumns='repeat(2, 1fr)' gap={6}>
           
                <Image src='https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563660020-bed.jpg'/>
           <Image src='https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563782565-furnishings.jpg'/>
            </Grid>

            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>NICE TO SEE YOU HERE, COME ON IN!</Heading>
            <Grid  templateColumns='repeat(2, 1fr)' gap={6}>
           
                <Image src='https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563810789-art-n-decor.jpg'/>
           <Image src='https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563866590-lamps.jpg'/>
            </Grid>
           
            <Footer/>
        </Box>
    )     
}
export default HomeLivingPage
//https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563810789-art-n-decor.jpg