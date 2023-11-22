import React from 'react'
import "./Navbar.css";


function Navbar() {
  function handleClick(){
     document.querySelector('#search-form').classList.toggle('active');
  }

  function closehandle(){
     document.querySelector('#search-form').remove('active');
  }
  return (
    <>
      <header>
          <section className='flex'>
            <a href="#" className="logo"><i className="fas fa-utensils"></i> resto.</a>
            <div className='navBar'>
                <a href="#">Home</a>
                <a href="#">Dishes</a>
                <a href="#">About</a>
                <a href="#">Menu</a>
                <a href="#">Review</a>
                <a href="#">Order</a>
            </div>  
            <div className="icons">
                <i className="fas fa-bars" id="menu-bars"></i>
                <i className="fas fa-search" id="search-icon" onClick={handleClick}></i>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-shopping-cart"></a>
            </div>
          </section>  
      </header>  

      <div>
        <form action ="#" id="search-form">
            <input type="search" placeholder='Search here...' id="search-box"/>
                <label for="search-box" className="fas  fa-search" ></label>
                <i className="fas fa-times" id="close" onClick={closehandle}/>
        </form>
     </div>
    </>  
  )
}

export default Navbar