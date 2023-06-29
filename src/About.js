import React from "react";
import Logo from "./strike_logo.png";
import Burgir from "./burgir.png"
import Chingri from "./chingri.png"
import Melon from "./melon.png"
import "./About.css"
const About = () => {
  return (
    <>
    <div className="logo">
      <img src={Logo} alt="" />
    </div>
      <h4>About us</h4>
    <div className="title ">
      <h2 className="blue">Say GoodBye to Hidden Fees:</h2>
      <h2>Cravio Brings Transperancy to Online Food Ordering.</h2>
    </div>
    <div className="big-box Maincontainer">
      <div className="container">
        <div className="box">
        <p>
          In hindsight, every great company was built to solve the problem faced
          by themselves. After moving to Bangalore, fencing with our day jobs -
          We found ourselves ordering online food from Swiggy and Zomato.
          Burning a hole through our pockets given their 30% Commision on each
          order, delivery charge, surcharges, packaging charge, platform fee
          etc.
        </p>
        </div>
        <div className="image">
        <img src={Melon} alt="" />
        </div>
      </div>
      <div className="container reverse">
        <div className="box">

        <p>
          We firmly believe that, paying premium for a basic necessity like food
          should not be so common that it becomes the newnormal. Infact, We at
          Cravio are highly mindful of the fact that there is a fair price for
          eveything, and consistently overpaying for that would lead to the
          increasing economical gap of our society. We can already see the
          aftermath of the uber and rapido - No autowala quotes a fair price now
          a days. We want to bring the new normal back, an old-school trick
          designed to solve the problem.
        </p>
        </div>
        <div className="image">
        <img src={Burgir} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="box">
        <p>
        Cravio is designed to bring back the normal to food ordering space, in a
        new revolutionary way. We all deserve a restaurant like food in terms of
        its pricing, quantity and quality when ordered through online.
        We arevery excited to present Cravio, a non-cluttered, ad-free, 0% comission
        food ordering platform build for users.
        </p>
        </div>
        <div className="image1">

        <img src={Chingri} alt="" />
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
