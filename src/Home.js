import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />  
            <div className='home__row'>
                <Product 
                    id="12324253"
                    title="The lean Startup:How Constant Innovation Creates Radically Successfull Businersses"
                    price={200}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                 />
                <Product 
                    id="231344134"
                    title="Kenwood kMix Stand Mixer for Baking, Styling Kitchen Mixer with K-beater, Dough Hook and Whisk, 5Liter Glass Bowl"
                    price={2300}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
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
  )
}

export default Home