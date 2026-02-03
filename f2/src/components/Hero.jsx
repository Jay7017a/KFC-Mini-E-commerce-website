import React from "react";
import swiggy from "../image/swiggy.png";
import seee from"../image/seee.png";
import k from "../image/k.jpg";

const Hero=()=>{
  return(
   <div className="hero">
    <div className="left">
      <span className="title">TASTE THE BEST KFC.</span>
      <p>KFC is the world’s most iconic fried chicken chain, famous for its Original Recipe seasoned with a secret blend of 11 herbs and spices. Founded by Colonel Harland Sanders, the brand turned a roadside shell station into a global empire known for its signature buckets and "Finger Lickin' Good" flavor. In India, the menu is uniquely adapted to local tastes, offering a mix of classic Hot & Crispy chicken, spicy Zinger burgers, and vegetarian options like the Veg Zinger. Beyond just snacks, their Rice Bowls and Chicken Rolls provide filling meal options for those on the go. Customers can easily order via the KFC India Website or the KFC App to snag exclusive discounts and loyalty rewards. The brand is also committed to quality, ensuring every piece of chicken is hand-breaded and freshly prepared in-store. Whether you’re sharing a Big 8 bucket with friends or grabbing a quick Popcorn Chicken, KFC remains a top choice for fast-food lovers. For the quickest delivery, you can also find them on Zomato and Swiggy.</p>
      <div className="btns">
        <button className="btn1">ORDER NOW</button>
       
        <button className="btn2">KFC CHICKEN</button>

      </div>
      <div className="social">
        <span className="social-1">ALSO AVAILABLE ON</span>
        <div className="social-icons">
          <img src={swiggy} alt="swiggy"/>
          <img src={seee} alt="zomato" />

        </div>
      </div>
    </div>
    <div className="right">
    <img src={k} alt="z"/>
    </div>
   </div>


  )
}
export default Hero;