
import {Text,Box,Image, Grid, Heading} from "@chakra-ui/react"
import HeadingImageSlider from "../AddOnComponents/Slider"
import dealsOfTheDay from '../J Data/dealsOfTheDay.json'
import BestOfMyntra from '../J Data/BestOfMyntra.json'
import TopPicks from '../J Data/TopPicks.json'
import CategoryToBag from '../J Data/CategoryToBag.json'
import DealsOnTopBrands from '../J Data/DealsOnTopBrands.json'
import BrandsAtSlacePrice from '../J Data/BrandAtSlacePrice.json'
import BestBuys from '../J Data/BestBuys.json'
import MyntraLux from '../J Data/MyntraLux.json'
import GiftingCards from '../J Data/GiftingCards.json'
import SpringSummer2022 from '../J Data/SpringSummer2022.json'
import stylecatHottest from '../J Data/stylecatHottest.json'
import TrendsForHer from '../J Data/TrendsForHer.json'
import TrendsForHim from '../J Data/TrendsForHim.json'
import BestForKidsWear from '../J Data/BestForKidsWear.json'
import NewInTopBrands from '../J Data/NewInTopBrands.json'
import SpringSummerRegionChecklist from '../J Data/SpringSummerRegionChecklist.json'
import NewnessForEveryOccasion   from  '../J Data/NewnessForEveryOccasion.json'
import LastestGroomingBeauty from '../J Data/LatestGroomingBeauty.json'
import unmissiableSeacson from '../J Data/unmissiableSeacson.json'
import ColorsOfTheSeason from '../J Data/ColorsOfTheSeason.json'
import TopInfluencersExclusive from '../J Data/TopInfluencersExclusive.json'
import trendyOutfitByInfluencer from '../J Data/trendyOutfitByInfuencer.json'
import Footer from "./Footer"
import Clock from "../AddOnComponents/saleStarts"
const Sliders=[
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/8/93156ec1-1d4e-417c-8e17-ba56143d4a481667927056281-PreBuzz-Desktop-Banner.jpg'},
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg'},
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/1/70a3d1a4-f16a-45ca-9bb4-64dc2315352b1659297228544-Desktop-Banners_unisex-with-kids.jpg' },
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg' },
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg' },
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg' },
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg' },
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg' },
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg' },
    {'url':'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg' },
]





function HomePage(){
    console.log('slide',BestOfMyntra)
    return (
        <Box >
           
           <Box >
           
            <HeadingImageSlider   images={Sliders}/>
            <Clock/>
            </Box>
           
            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>DEAL OF THE DAY</Heading>
            <Grid  templateColumns='repeat(9, 1fr)'>
            {dealsOfTheDay.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>
            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>BEST OF MYNTRA EXCLUSIVE BRANDS</Heading>
            <Grid  templateColumns='repeat(8, 1fr)' gap={2}>
            {BestOfMyntra.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>

            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>TOP PICKS</Heading>
            <Grid  templateColumns='repeat(7, 1fr)' gap={2}>
            {TopPicks.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>
            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>CATEGORIES TO BAG</Heading>
            <Grid  templateColumns='repeat(8, 1fr)' gap={0}>
            {CategoryToBag.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>

            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>DEALS ON TOP BRANDS</Heading>
            <Grid  templateColumns='repeat(8, 1fr)' gap={2}>
            {DealsOnTopBrands.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>

            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>BRANDS AT SLASHED PRICES</Heading>

            <Grid  templateColumns='repeat(7, 1fr)' gap={0}>
            {BrandsAtSlacePrice.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>


            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>BEST BUYS</Heading>
            <Grid  templateColumns='repeat(8, 1fr)' gap={2}>
            {BestBuys.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>

            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>MYNTRA LUXE</Heading>
            <Grid  templateColumns='repeat(8, 1fr)' gap={0}>
            {MyntraLux.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>

            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>GIFTING CARDS</Heading>
            <Grid  templateColumns='repeat(4, 1fr)' gap={0}>
            {GiftingCards.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>
            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>SPRING SUMMER 2022- FIRST ON MYNTRA</Heading>
            <Grid  templateColumns='repeat(8, 1fr)' gap={0}>
            {SpringSummer2022.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>

            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>STYLECAST HOTTEST FINDS</Heading>
            <Grid  templateColumns='repeat(7, 1fr)' gap={0}>
            {stylecatHottest.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>
            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>TRENDS FOR HER</Heading>
            <Grid  templateColumns='repeat(8, 1fr)' gap={0}>
            {TrendsForHer.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>



            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>TRENDS FOR HIM</Heading>
            <Grid  templateColumns='repeat(8, 1fr)' gap={0}>
            {TrendsForHim.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>

            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>BEST OF KIDSWEAR</Heading>
            <Grid  templateColumns='repeat(7, 1fr)' gap={0}>
            {BestForKidsWear.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>

            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>NEW IN TOP BRANDS</Heading>
            <Grid  templateColumns='repeat(8, 1fr)' gap={0}>
            {NewInTopBrands.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>

            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>SPRING SUMMER SEASON CHECKLIST</Heading>
            <Grid  templateColumns='repeat(8, 1fr)' gap={0}>
            {SpringSummerRegionChecklist.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>


            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>NEWNESS FOR EVERY OCCASION</Heading>
            <Grid  templateColumns='repeat(8, 1fr)' gap={0}>
            {NewnessForEveryOccasion.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>


            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>LATEST IN BEAUTY & GROOMING</Heading>
            <Grid  templateColumns='repeat(4, 1fr)' gap={0}>
            {LastestGroomingBeauty.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>

            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>UNMISSABLE THIS SEASON</Heading>
            <Grid  templateColumns='repeat(8, 1fr)' gap={0}>
            {unmissiableSeacson.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>


            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>COLOURS OF THE SEASON</Heading>
            <Grid  templateColumns='repeat(4, 1fr)' gap={0}>
            {ColorsOfTheSeason.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>

            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>TOP INFLUENCERS EXCLUSIVE STYLES</Heading>
            <Grid  templateColumns='repeat(6, 1fr)' gap={0}>
            {TopInfluencersExclusive.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>


            <Heading letterSpacing={5} color='blackAlpha.700' mt='50px' mb='50px' ml='50px' as='h2' size='lg'>TRENDING OUTFITS BY INFLUENCERS</Heading>
            <Grid  templateColumns='repeat(8, 1fr)' gap={0}>
            {trendyOutfitByInfluencer.map((el)=>(
                <Image src={el.image}/>
            ))}
            </Grid>


          <Footer/>
        </Box>
    )     
}
export default HomePage