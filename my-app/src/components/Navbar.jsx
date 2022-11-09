
import {Link} from "react-router-dom"
import {Box,Button,Img,IconButton,Flex, Spacer,Input,InputGroup,InputLeftElement,Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"

function navbar(){
     return (
//         <Box  height='80px' borderRadius='lg' boxShadow= 'rgba(0, 0, 0, 0.16) 0px 1px 4px'>
//  <Box justifyContent='space-evenly'  bg='red.400' gap='20px' >

<Flex minWidth='max-content'alignItems='center' height='80px' gap='2' border='2px solid black'>
    <Spacer/>
    <Spacer/>
    <Spacer/>
    <Spacer/>
    <Spacer/>
    <Spacer/>
    <Link to="/" ><Img borderRadius='50%' width='60%' src='https://i.postimg.cc/nz7306FN/Whats-App-Image-2022-11-09-at-10-07-52-PM.jpg' /></Link>
    <Spacer />
    
   
    <Link to="/men" ><Button height='70px' colorScheme='red' variant='ghost'>MEN</Button></Link>
    <Spacer />
    <Link to="/women" > <Button height='70px' colorScheme='pink' variant='ghost'>WOMEN</Button></Link>
    <Spacer />
    <Link to="/kids" >  <Button height='70px' colorScheme='yellow' variant='ghost'>KIDS</Button> </Link>
    <Spacer />
    <Link to="/home&living" ><Button height='70px' colorScheme='green' variant='ghost'> HOME & LIVING</Button></Link>
    <Spacer />
    <Link to="/beauty" > <Button height='70px' colorScheme='teal' variant='ghost'> BEAUTY</Button></Link>
    <Spacer />
    <Link to="/studio" >  <Button height='70px' colorScheme='pink' variant='ghost'>STUDIO</Button></Link>
    <Spacer />
    <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon />}
    />
    <Input borderRadius='10px' type='tel' placeholder='Search for Products, brands and more' />
  </InputGroup>
    <Spacer />
    <Spacer/>
    
    <Link to="/profile"  >Profile</Link>
    <Spacer />
    <Link to="/wishlist"  >Wishlist</Link>
    <Spacer />
    <Link to="/bag"  >Bag</Link>
    <Spacer/>
    <Spacer/>
    </Flex>
    
//  </Box>
//  </Box>
     )
}        

export default navbar 