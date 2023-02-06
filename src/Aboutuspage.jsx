import React from "react";
import './App.css';
import './Demo.css';
import Aboutpage from "./Aboutpage";
import Header from "./Header";
import Menu from "./Menu";

const Aboutuspage = () =>{
    return (
 <>
 <div class="wrapper">
  <div class="box header"><Header/></div>
  <div class="box sidebar"><Menu/></div>
  <div class="box content"><Aboutpage/></div>
  
</div>




 </>
    );
 };
 export default Aboutuspage;