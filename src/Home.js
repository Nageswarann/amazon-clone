import React from 'react'
import "./Home.css"
import Product from './Product'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import amazonPay from "./images/amazonPay.jpg"
import alexaEcho from "./images/alexaEcho.jpg"
import onePlus from "./images/onePlus.jpg"
import cooler from "./images/cooler.jpg"
import factfullness from "./images/factfullness.jpg"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Home() {
  return (<>
  <div className='home__image'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          <SwiperSlide>
            <img className="home__image" src={alexaEcho} /> 
        </SwiperSlide>
        <SwiperSlide><img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />  </SwiperSlide>
        <SwiperSlide>
            <img className="home__image" src={amazonPay} /> 
        </SwiperSlide>
        <SwiperSlide>
            <img className="home__image" src={onePlus} /> 
        </SwiperSlide>
      </Swiper>
      </div>
  
    <div className='home'>
        
        <div className='home__container'>
            <div className='home__row'>
                <Product 
                    id="12324253"
                    title="Factfulness: Ten Reasons We'Re Wrong About The World - And Why Things Are Better Than You Think"
                    price={200}
                    image={factfullness}
                    rating={5}
                 />
                <Product 
                    id="231344134"
                    title="Bajaj PX 97 Torque New 36L Personal Air Cooler with Honeycomb Pads, Turbo Fan Technology, Powerful Air Throw and 3-Speed Control, White"
                    price={2300}
                    rating={4}
                    image={cooler}
                />
            </div>

            <div className='home__row'>
                <Product
                    id="354235"
                    title="Amazon Echo (3rd gen) | Smart speaker with Alexa, Charcoal Fabric"
                    price={7500}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2s"
                    rating={5}
                />
                <Product 
                    id="1124235245"
                    title="Samsung LC49RG90SSUXEN 49' Curved Gaming Monitor"
                    price={12000}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product 
                    id="24534656"
                    title="New Apple iPad Pro (12.9-inch, WiFi, 128GB) - Silver (4th Gen)"
                    price={120000}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
            </div>

            <div className='home__row'>
                <Product 
                    id="356456456"
                    title="Samsung LC494563462326 49' Curved LED Gaming Monitor -Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={60000}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
            </div>

        </div>    
    </div>
  
  </>
  )}

export default Home