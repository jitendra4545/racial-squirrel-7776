
import {Routes,Route} from 'react-router-dom'
import HomePage from './homePage'
import MenPage from './menPage'
import WomenPage from './womenPage'
import KidsPage from './kidsPage'
import HomeLivingPage from './Home&LivingPage'
import BeautyPage from './BeautyPage'
import StudioPage from './StudioPage'
import Profile from './Profile'
import Wishlist from './Wishlist'
import Bag from './Bag'
import MensProduct from '../productCategories/mensProduct'
import CartAdd from '../productCategories/CartPage'


function AllRouters(){
return (
   
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
        <Route path='/mensproduct' element={<MensProduct/>} />
        <Route path='/mensproduct/:title' element={<CartAdd />} />
 </Routes>
 
)
}

export default AllRouters


