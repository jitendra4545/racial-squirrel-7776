import {Box,Grid, Heading,Spacer,Text,Image} from '@chakra-ui/react'


function Footer(){
       return (
     <Box bg='gray.300'>
        <Grid  width='75%'  m='auto' templateColumns='repeat(4, 1fr)' gap={6}>
        <Box w='190px' h='390' bg='gray.300' mt='100px' >
            <Box mb='15px'>
        <Text as='b' fontSize='sm' >ONLINE SHOPPING</Text>
        </Box>
        <Text>Men</Text>
        <Text>Women</Text>
        <Text>Kids</Text>
        <Text>Home & Living</Text>
        <Text>Beauty</Text>
        <Text>Gift Cards</Text>
        <Text>Myntra Insider</Text>
        <Box mb='15px' mt='15px'>
        <Text as='b' fontSize='sm'>USEFUL LINKS</Text>
        </Box>
        <Text>Blog</Text>
        <Text>Carrers</Text>
        <Text>Site Map</Text>
        <Text>Corporate Information</Text>
        <Text>Whitehat</Text>
        </Box>
        <Box w='190px' h='390'  bg='gray.300'  mt='100px'>
        <Box mb='15px'>
        <Text as='b' fontSize='sm'>CUSTOMER POLICIES</Text>
        </Box>
        <Text>Contact Us</Text>
        <Text>FAQ</Text>
        <Text>T&C</Text>
        <Text>terms Of Use</Text>
        <Text>Track Orders</Text>
        <Text>Shipping</Text>
        <Text>Cancellation</Text>
        <Text>Returns</Text>
        <Text>Privacy policy</Text>
        <Text>Grievance Officer</Text>
       
        </Box>
        <Box w='340px' h='390' bg='gray.300'  mt='100px'>
            <Box mb='15px' >
        <Text as='b' fontSize='sm'>EXPERIENCE MYNTRA APP ON MOBILE</Text>

        </Box>
         <Grid templateColumns='repeat(2,1fr)'>
          <Box>
                <Image w='100%' src='https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png'  />
          </Box>
          <Box>
                <Image w='90%' src='https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png'  />
          </Box>
         </Grid>
         <Box mb='20px' mt='15px'>
        <Text as='b' fontSize='sm'>KEEP IN TOUCH</Text>
        </Box>
        <Grid width='50%'  templateColumns='repeat(4,1fr)'>
            <Box>
                <Image w='50%' src='https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png' />
            </Box>
            <Box>
                <Image w='50%' src='https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png' />
            </Box>
            <Box>
                <Image w='50%' src='https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png' />
            </Box>
            <Box>
                <Image w='40%' src='https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png' />
            </Box>
        </Grid>
        </Box>
        <Box w='340px' h='390' bg='gray.300'  mt='100px'>
            <Grid templateColumns='repeat(2,1fr)'>
                <Box width='80px'>
                     <Image w='100%' src='https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png' />
                </Box>
                <Box width='270px'>
                        <Text>100% ORIGINAL guarantee for all products at myntra.com </Text>
                       
                </Box>
                <Box width='80px'>
                         <Image  w='100%' src='https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png' />
                </Box>
                <Box w='275px'>
                        <Text>return within 30days of receiving your order</Text>
                       
                </Box>

            </Grid>
        </Box>
      </Grid>
      </Box>
       )
}

export default Footer


