
import {Box, Flex,Center, Heading,Grid} from '@chakra-ui/react'
import { useEffect, useState } from 'react'


function Clock(){
    const [days,setday]=useState()
    const [hour,sethour]=useState()
    const [min,setmin]=useState()
    const [sec,setsec]=useState()



   let id;


   const startTimer=()=>{
    const countdownDate=new Date('Nov 15 2022').getTime()


    id=setInterval(()=>{
const now=new Date().getTime()

 const distance=countdownDate-now;

 const day=Math.floor(distance/(24*60*60*1000));

 const hours=Math.floor ((distance % (24*60*60*1000))/(1000*60*60))


 const minutes=Math.floor((distance % (60*60*1000))/(1000*60))

 const seconds=Math.floor((distance % (60*1000))/(1000))


 if(distance<0){
    clearInterval(id.current)
 }else{
    setday(day)
    sethour(hours)
    setmin(minutes)
    setsec(seconds)
 }

    })

   }

   useEffect(()=>{
startTimer()
   },[])

    return (
        
        <Center bg='blue.50' h='40px' color='grey' mt='20px'>
            <Heading as='h5' size='sm'> Sale Starts In :-  {'0'+days} D  {hour} H {min} M {sec} S</Heading>
      </Center>
     
    )

}
export default Clock
//Sale Starts In
