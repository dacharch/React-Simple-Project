import React from 'react'
import  "./Hero.css"

function Hero() {
  return (
    <div className='container'>
          <section className="home" id="home">
              <div className="swiper home-slider">
                  <div className="swiper-wrapper">
                      <div className="swiper-slide slide">
                          <div className='content'>
                             <span>our special dish</span>
                             <h3>spicy noodles</h3>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                             <a href="#" className="btn">order now</a>
                          </div>
                          <div className="image">
                              <img src="./images/home-img-1.png" alt=""/>
                          </div>
                      </div>
                      <div className="swiper-slide slide">
                          <div className='content'>
                             <span>our special dish</span>
                             <h3>spicy noodles</h3>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                             <a href="#" className="btn">order now</a>
                          </div>
                          <div className="image">
                              <img src="./images/home-img-2.png" alt=""/>
                          </div>
                      </div>
                      <div className="swiper-slide slide">
                          <div className='content'>
                             <span>our special dish</span>
                             <h3>spicy noodles</h3>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                             <a href="#" className="btn">order now</a>
                          </div>
                          <div className="image">
                              <img src="./images/home-img-3.png" alt=""/>
                          </div>
                      </div>
                  </div>

              </div>

          </section>
    </div>
  )
}

export default Hero