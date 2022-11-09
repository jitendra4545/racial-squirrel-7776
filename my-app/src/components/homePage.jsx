
import {Text,Box} from "@chakra-ui/react"
import HeadingImageSlider from "../AddOnComponents/Slider"

const headSliders=[
    {url:'https://assets.myntassets.com/f_webp,w_980,c_limit…6143d4a481667927056281-PreBuzz-Desktop-Banner.jpg'},
    {url:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg'},
    {url:'https://assets.myntassets.com/f_webp,w_980,c_limit…3-655b54550b8f1659020199598-Workwear_Desk--1-.jpg' },
    {url:'https://assets.myntassets.com/f_webp,w_980,c_limit…72-69461ad5be101659020268081-Tops---Tees_Desk.jpg' },
    {url:'https://assets.myntassets.com/f_webp,w_980,c_limit…c-54b78793981e1658752386588-Western-Wear_Desk.jpg' },
    {url:'https://assets.myntassets.com/f_webp,w_980,c_limit…-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg' },
    {url:'https://assets.myntassets.com/f_webp,w_980,c_limit…d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg' },
    {url:'https://assets.myntassets.com/f_webp,w_980,c_limit…-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg' },
    {url:'https://assets.myntassets.com/f_webp,w_980,c_limit…-86c5-14f737eceb351656325318973-Handbags_Desk.jpg' },
]





function HomePage(){
    return (
        <Box>
            <Text>HomePage</Text>
            <HeadingImageSlider   images={headSliders}/>
        </Box>
    )     
}
export default HomePage