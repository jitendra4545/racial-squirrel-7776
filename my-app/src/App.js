import logo from './logo.svg';
// import './App.css';
import {Box,Input,Text} from "@chakra-ui/react"

import {Routes,Route} from "react-router-dom"
import HomePage from './components/homePage';
import MenPage from './components/menPage';
import WomenPage from './components/womenPage';
import KidsPage from './components/kidsPage';
import HomeLivingPage from './components/Home&LivingPage';
import BeautyPage from './components/BeautyPage';
import StudioPage from './components/StudioPage';
import Navbar from "./components/Navbar"
import Profile from './components/Profile';
import Wishlist from './components/Wishlist';
import Bag from './components/Bag';
import Clock from './AddOnComponents/saleStarts'
function App() {
  return (
   <Box>
 <Navbar/>
 
       <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/men" element={<MenPage/>}/>
        <Route path="/women" element={<WomenPage/>}/>
        <Route path="/kids" element={<KidsPage/>}/>
        <Route path="/home&living" element={<HomeLivingPage/>}/>
        <Route path="/beauty" element={<BeautyPage/>}/>
        <Route path="/studio" element={<StudioPage/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/bag" element={<Bag/>} />
       </Routes>
       
   </Box>
   
  );
}

export default App;
