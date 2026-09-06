import React from 'react';
import logo from '../assets/RIWAJ DULHA CORNER.png';
import {FaSearch,FaUser,FaHeart,FaShoppingBag} from "react-icons/fa";
function Home(){
    return(<>
    <div className="header">
        <div className="logo">
        <img id='logo' src={logo} alt="Riwaj Dulha Corner" />
        <div className="logo-title">
        <h1>RIWAJ</h1>
        <p>-DULHA CORNER-</p>
        </div>
        </div>
        <div className="search-box">
            <input type="text" name="search" id="search" placeholder='search for sherwani ' />
            <FaSearch/>
        </div>
        <div className="header-icons">
            <div>
            <FaUser/>
            <p>Login / Register</p>
            </div>
            <div>
                <FaHeart/>
                <p>Wishlist</p>
            </div>
            <div>
                <FaShoppingBag/>
                <p>Cart (0)</p>
            </div>
        </div>
        
        </div>
        <div className="nav">
            <a href="#">HOME</a>
            <a href="#">SHERWANI</a>
            <a href="#">INDO WESTERN</a>
            <a href="#">KURTA PAJAMA</a>
            <a href="#">ACCESSORIES</a>
            <a href="#">COLLECTIONS</a>
            <a href="#">SALE</a>
            <a href="#">CUSTOM STITCHING</a>
            <a href="#">CONTACT US</a>

        </div>
    </>)
}
export default Home;