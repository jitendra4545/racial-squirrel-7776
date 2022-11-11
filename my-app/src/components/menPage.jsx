
import HeadingImageSlider from "../AddOnComponents/Slider"
import {Text,Box} from "@chakra-ui/react"
import MensPage from '../J Data/MensPage.json'
import { Heading,Grid,Image } from "@chakra-ui/react"
import Footer from './Footer'
import MidSection from "../AddOnComponents/midSecrion"
import Clock from "../AddOnComponents/saleStarts"
const Sliders=[
    {'url':'https://assets.myntassets.com/f_webp,w_344,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/a53b7f7e-37ab-4319-a1b4-5d9c0cca68601650180659343-Lancer_Desk.jpg'},
    {'url':'https://assets.myntassets.com/f_webp,w_344,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/e384cb32-690c-4ccf-a6cb-61df36960bb21651599573972-Workwear_Desk.jpg'},
    {'url':'https://assets.myntassets.com/f_webp,w_344,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/eb6408d8-b413-49f7-8525-317fddba53821650180659351-Casual---Sports-Shoes_Desk.jpg' },
    {'url':'https://assets.myntassets.com/f_webp,w_344,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/b54399f0-6ed5-44b3-84b0-e9d5c1657aaa1651599573991-CR7_Desk_Baner.jpg' },
    {'url':'https://assets.myntassets.com/f_webp,w_344,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/abd2b07f-954c-43ad-ba39-bfa50527d0641650180659364-Backpacks---Luggage_Desk.jpg' },
 
]




function MenPage(){
    return (
        <Box>
        <Box>
            <HeadingImageSlider   images={Sliders}/>
            <Clock/>
            </Box>
<MidSection a={MensPage.biggestdeal}  
              b={MensPage.categorybag}
              c={MensPage.exploretop}
              d={MensPage.myntraluxe}
              e={MensPage.trendingindian}
              f={MensPage.trendinginSports}
              g={MensPage.trendingfootwear}
              h={MensPage.trendingaccesory}
              
              />
       
        <Footer/>
        </Box>
    )     
}
export default MenPage