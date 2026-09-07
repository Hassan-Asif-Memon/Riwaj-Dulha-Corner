import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
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


    {/* <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}

    <Carousel>

        <Carousel.Item>

          <div className="slide">
            {/* <img src={} alt="" /> */}
            <div className="slide-content">

              <p>ROYAL LOOK FOR YOUR</p>

              <h1>SPECIAL DAY</h1>

              <span>
                EXCLUSIVE SHERWANI COLLECTION
              </span>

              <button>
                SHOP SHERWANI
              </button>

            </div>
          </div>

        </Carousel.Item>


        <Carousel.Item>

          <div className="slide slide-two">
            <div className="slide-content">

              <p>DISCOVER OUR</p>

              <h1>ROYAL STYLE</h1>

              <span>
                PREMIUM DULHA COLLECTION
              </span>

              <button>
                EXPLORE COLLECTION
              </button>

            </div>
          </div>

        </Carousel.Item>


        <Carousel.Item>

          <div className="slide slide-three">
            <div className="slide-content">

              <p>CRAFTED FOR YOUR</p>

              <h1>BIG DAY</h1>

              <span>
                PERFECT FIT & CUSTOM STITCHING
              </span>

              <button>
                VIEW COLLECTION
              </button>

            </div>
          </div>

        </Carousel.Item>

      </Carousel>
    </>)
}
export default Home;