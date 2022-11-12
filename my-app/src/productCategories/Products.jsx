
import {Box,Flex,Image,Text,Spacer,Grid} from '@chakra-ui/react'

function Product ({image,discount,discountprice,strike_price,subtitle,title}){
return(
    <Grid gridTemplateColumns='repeat(5,1fr)'>
   <Box>
        <Image src={image} />
         <Text  >title</Text>
        <Text>extra thing</Text>
        <Flex>price <Spacer/> tag<Spacer/>discount</Flex>
</Box>
{/* <Box>
        <Image src={image} />
         <Text  >title</Text>
        <Text>extra thing</Text>
        <Flex>price <Spacer/> tag<Spacer/>discount</Flex>
</Box>
<Box>
        <Image src={image} />
         <Text  >title</Text>
        <Text>extra thing</Text>
        <Flex>price <Spacer/> tag<Spacer/>discount</Flex>
</Box>
<Box>
        <Image src={image} />
         <Text  >title</Text>
        <Text>extra thing</Text>
        <Flex>price <Spacer/> tag<Spacer/>discount</Flex>
</Box>
<Box>
        <Image src={image} />
         <Text  >title</Text>
        <Text>extra thing</Text>
        <Flex>price <Spacer/> tag<Spacer/>discount</Flex>
</Box> */}
</Grid>
)
}
export default Product