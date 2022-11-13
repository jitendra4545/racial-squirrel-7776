




import {Text,Box,Grid,Stack,InputGroup,InputLeftAddon, Center,Image,Flex, Heading, Input, Button} from "@chakra-ui/react"
import { useNavigate } from "react-router"
import { useToast } from '@chakra-ui/react'

function LoginPage(){
    const navigate=useNavigate()

    const toast = useToast({
        position: 'top',
        title: 'Login Succesfull',
        containerStyle: {
          width: '800px',
          maxWidth: '100%',
        },
      })

    return (
        <Grid  w='100%' mt='100px' h='100%' bg='pink.50'>
            <Box width='30%' h='550px' m='auto' >
               <Box   m='auto'>
                <Image src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/21/8fca3ae9-d245-443b-a142-8d568247794c1663700243878-offer-banner-300-600x240-code-_-MYNTRA400.jpg'/>
               </Box>
               <Box pl='30px' pr='30px' mt='20px'>
                <Heading>Login or Signup</Heading>
                
                <Stack mt='30px' spacing={4}>
  <InputGroup>
    <InputLeftAddon h='40px'  children='+91' />
    <Input h='40px'   type='tel' placeholder='phone number' />
    <Text></Text>
  </InputGroup>

</Stack>
<Box mt='20px'>
<Text>
 By Countinuing, I agree to the Terms of Use & Privacy Policy
</Text>
</Box>
<Box mt='20px' textAlign='center'>
    <Button bg='pink.400' color='white' onClick={()=>{
        navigate('/')

        toast({
            containerStyle: {
              border: '2px solid yellow',
            },
          })
  



    }}  >CONTINUE</Button>
</Box>
<Box mt='20px'>
    <Text>Have Trouble logging in ? Get help</Text>
</Box>
               </Box>
               </Box>
        </Grid>
    )     
}
export default LoginPage