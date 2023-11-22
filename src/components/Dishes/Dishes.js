import React from 'react'
import "./Dishes.css"

function Dishes() {
  return (
    <div className='container'>
       <div className="dishes" id="dishes">
           <h3 className="sub-heading">Our dishes</h3>
           <h1 className="heading">Popular dishes</h1>
           <div className="box-container">
               <div className="box">
                   <a href="#" className="fas fa-heart"></a>
                   <a href="#" className="fas fa-eye"></a>
                   <img src="images/dish-1.png" alt=""/>
                   <h3>tasty food</h3>
                   <div class="stars">
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star-half-alt"></i>
                   </div>
                   <span>$15.99</span>
                   <a href="#" class="btn"> Add to Cart</a>
               </div>
               <div className="box">
                   <a href="#" className="fas fa-heart"></a>
                   <a href="#" className="fas fa-eye"></a>
                   <img src="images/dish-2.png" alt=""/>
                   <h3>tasty food</h3>
                   <div class="stars">
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star-half-alt"></i>
                   </div>
                   <span>$15.99</span>
                   <a href="#" class="btn"> Add to Cart</a>
               </div>
               <div className="box">
                   <a href="#" className="fas fa-heart"></a>
                   <a href="#" className="fas fa-eye"></a>
                   <img src="images/dish-3.png" alt=""/>
                   <h3>tasty food</h3>
                   <div class="stars">
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star-half-alt"></i>
                   </div>
                   <span>$15.99</span>
                   <a href="#" class="btn"> Add to Cart</a>
               </div>
               <div className="box">
                   <a href="#" className="fas fa-heart"></a>
                   <a href="#" className="fas fa-eye"></a>
                   <img src="images/dish-4.png" alt=""/>
                   <h3>tasty food</h3>
                   <div class="stars">
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star-half-alt"></i>
                   </div>
                   <span>$15.99</span>
                   <a href="#" class="btn"> Add to Cart</a>
               </div>
               <div className="box">
                   <a href="#" className="fas fa-heart"></a>
                   <a href="#" className="fas fa-eye"></a>
                   <img src="images/dish-5.png" alt=""/>
                   <h3>tasty food</h3>
                   <div class="stars">
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star-half-alt"></i>
                   </div>
                   <span>$15.99</span>
                   <a href="#" class="btn"> Add to Cart</a>
               </div>
               <div className="box">
                   <a href="#" className="fas fa-heart"></a>
                   <a href="#" className="fas fa-eye"></a>
                   <img src="images/dish-6.png" alt=""/>
                   <h3>tasty food</h3>
                   <div class="stars">
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star-half-alt"></i>
                   </div>
                   <span>$15.99</span>
                   <a href="#" class="btn"> Add to Cart</a>
               </div>



           </div>
       </div>

    </div>
  )
}

export default Dishes