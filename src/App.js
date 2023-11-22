import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero" ;
import Dishes from "./components/Dishes/Dishes" ;
import About from "./components/About/About" ;
import Review from "./components/Review/Review" ;
import Order from "./components/OrderForm/Order" ;
import Footer from "./components/Footer/Footer" ;
import "./App.css"
import Menu from "./components/Menu/Menu";


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Dishes/>
      <About/>
      <Menu/>
      <Review/>
      <Order/>
      <Footer/>
    </>
  );
}

export default App;
