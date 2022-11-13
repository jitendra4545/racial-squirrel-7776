
import {Link} from "react-router-dom"
import {Image,Box,Button,Img,IconButton,Flex, Spacer,Input,InputGroup,InputLeftElement,Tabs, TabList, TabPanels, Tab, TabPanel, ControlBox} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"

function Navbar(){
     return (
//         <Box  height='80px' borderRadius='lg' boxShadow= 'rgba(0, 0, 0, 0.16) 0px 1px 4px'>
//  <Box justifyContent='space-evenly'  bg='red.400' gap='20px' >

<Flex bg='white'  borderBottom='2px solid pink' position='fixed' mt='-100px' width='100%'alignItems='center' height='80px' gap='2' >
    <Spacer/>
    <Spacer/>
    <Spacer/>
    <Spacer/>
    <Spacer/>
    <Spacer/>
    <Link to="/" ><Img borderRadius='50%' width='60%' src='https://i.postimg.cc/nz7306FN/Whats-App-Image-2022-11-09-at-10-07-52-PM.jpg' /></Link>
    <Spacer />
    
   
    <Link to="/men" ><Button  height='70px' colorScheme='red' variant='ghost'>MEN</Button></Link>
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
    <Box>
      <Image w='70%' m='auto' src='data:image/png;base64,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' />
    <Link to="/profile"  >Profile</Link>
    </Box>
    <Spacer />
   
    <Spacer />
    <Box>
    <Image  w='60%' m='auto' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwUDgAfAzGR_l5AlffMtzYiyoQdG6UFCFb2n3kJFOMA&s' />
    <Link to="/cartpage"  >Bag</Link>
    </Box>
    <Spacer/>
    <Spacer/>
    </Flex>
    
//  </Box>
//  </Box>
     )
}        

export default Navbar 
//https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ei-heart.svg/2048px-Ei-heart.svg.png
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQPPpHTfuoVod6-za4DVcvCJ1JdUpVEgEEsMxDbaOqzhJKyL3CIEWJyK8xps9yxLl4aA&usqp=CAU
//data:image/png;base64,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