import React,{useState} from 'react';
import './App.css';
import './Style.css';
import './Demo.css';
import Aboutpage from "./Aboutpage";
import Header from "./Header";
import Menu from "./Menu";
import {SlEnvolope,SlPhone} from "react-icons/sl";
import Edit from "../src/Images/Edit.png";
import contact from "../src/Images/contact.jpg";
import deleteimg from "../src/Images/delete.png";

const ContactDetail = () =>{
    return (
        <>
        <form>
 <div class="wrapper">
  <div class="box header"><Header/></div>
  <div class="box sidebar"><Menu/></div>
  <div class="box content">
<div className='left'>
  <strong>Contacts</strong>
  <table><tr><td><br></br></td></tr></table>
  <p className='p1'>please provide the company's emails & contacts.</p>
</div>
  <div class="column11">
    <div class="card11">
    <div class="container">
    <table><tr>
    
    
    <td><img  src={contact} alt="editimg"  width="22px" height="17px"/><strong>&nbsp;&nbsp; Sales Team</strong></td>
    
    <img  src={deleteimg} alt="delete"  width="20px" height="15px"/>&nbsp;&nbsp; <img  src={Edit} alt="editimg"  width="10px" height="15px"/>
    </tr>
    <br></br>
    
    <tr><td><SlEnvolope/>&nbsp;&nbsp;&nbsp;&nbsp;Salesteam@br.in / Salesteam2@br.in </td></tr>
    <tr><td></td></tr>
    <br></br>
    <tr><td><SlPhone/> &nbsp;&nbsp;&nbsp;&nbsp; +91 8511591740/8000058214</td></tr>
    </table>
      </div>
    </div>
  </div>

  <div class="column11">
    <div class="card11">
    <div class="container">
    <table><tr>
    
    
    <td><img  src={contact} alt="editimg"  width="22px" height="17px"/><strong>&nbsp;&nbsp;Marketing Team</strong></td>
    
    <img  src={deleteimg} alt="delete"  width="20px" height="15px"/>&nbsp;&nbsp; <img  src={Edit} alt="editimg"  width="10px" height="15px"/>
    </tr>
    <br></br>
    
    <tr><td><SlEnvolope/>&nbsp;&nbsp;&nbsp;&nbsp;Salesteam@br.in / Salesteam2@br.in </td></tr>
    <tr><td></td></tr>
    <br></br>
    <tr><td><SlPhone/> &nbsp;&nbsp;&nbsp;&nbsp; +91 8511591740/8000058214</td></tr>
    </table>
      </div>
    </div>
  </div>

  <div class="column11">
    <div class="card11">
    <div class="container">
    <table><tr>
    
    
    <td><img  src={contact} alt="editimg"  width="22px" height="17px"/><strong>&nbsp;&nbsp; Marketing Team</strong></td>
    
    <img  src={deleteimg} alt="delete"  width="20px" height="15px"/>&nbsp;&nbsp; <img  src={Edit} alt="editimg"  width="10px" height="15px"/>
    </tr>

    
    <tr><td><SlEnvolope/>&nbsp;&nbsp;&nbsp;&nbsp;Salesteam@br.in / Salesteam2@br.in </td></tr>
    <tr><td></td></tr>
    
    <tr><td><SlPhone/> &nbsp;&nbsp;&nbsp;&nbsp; +91 8511591740/8000058214</td></tr>
    </table>
      </div>
    </div>
  </div>

 

      </div>

    

</div>


  




  
</form>

 
        </>
    );


};
export default ContactDetail;