import logo from './logo.svg';
// import './App.css';
import {Box,Input,Text} from "@chakra-ui/react"

import Navbar from "./components/Navbar"


import AllRouters  from './components/AllRouters';
function App() {
  return (
   <Box>
 <Navbar/>
 <AllRouters/>
      
   </Box>
   
  );
}

export default App;
