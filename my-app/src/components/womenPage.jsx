
import {Text,Box} from "@chakra-ui/react"
import HeadingImageSlider from "../AddOnComponents/Slider"
import womensData from '../J Data/womensData.json'
import MidSection from "../AddOnComponents/midSecrion"
import Footer from "./Footer"
import Clock from '../AddOnComponents/saleStarts'
const Sliders=[
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/a20271c6-249f-480b-bcc7-1b150516e54e1651599573998-Dressberry_Desk.jpg'},
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/3f6d1e2a-5ef6-4921-be5d-443a11b11d801651599573985-Dresses_Desk.jpg'},
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/744f6742-7705-45a9-b555-892c309b36cd1650181498588-Premium-Collection_Desk.jpg' },
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/7feef02b-0072-4c1b-b83d-4e46a5d93c6b1649530621162-Sangria_Desk_Banner.jpg' },
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/c74bac2c-e09d-484f-8e25-c07747c867241649530728935-Tops---Tees_Desk.jpg' },
 
]

function WomenPage(){
    return (
        <Box>
        <Box>
            <HeadingImageSlider   images={Sliders}/>
            <Clock/>
            </Box>
<MidSection a={womensData.selection8}  
              b={womensData.selection1}
              c={womensData.selection2}
              d={womensData.selection3}
              e={womensData.selection4}
              f={womensData.selection5}
              g={womensData.selection6}
              h={womensData.selection7}
              
              />
       
        <Footer/>
        </Box>
    )     
}
export default WomenPage