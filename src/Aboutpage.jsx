import React from 'react';
import './App.css';
import './Style.css';
import './Demo.css';
import imglogo from "../src/Images/A.T-inks-logo-600-DPI-1-e1545645137933 (1).png";
import imgbreifcase from "../src/Images/breifcase.jpg";
import Edit from "../src/Images/Edit.png";
import contact from "../src/Images/contact.jpg";
import oneplus from "../src/Images/oneplus.jpg";
import plusfive from "../src/Images/plusfive.jpg";
import {BsPatchCheck,BsGlobe,BsInstagram,BsFacebook,BsTwitter} from "react-icons/bs";
import {BiMap} from "react-icons/bi";
import {SlEnvolope,SlPhone} from "react-icons/sl";
import {AiOutlineLink} from "react-icons/ai";
import {FaQuoteLeft} from "react-icons/fa";

const Aboutpage = () => {
    
    
    return(
    <>
<div className="aboutpage">
<strong>About Us</strong>
<br></br>
<br></br>
<br></br>
<table><tr><td><img  src={imglogo} alt="logoimg"  width="70px" height="50px"/></td>
<td>
  <div>
    <h1>A.T. InKs</h1>
    <p className="td1">Digital InKs</p>
  </div>
</td>
<td></td>
<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<BsPatchCheck/>&nbsp;&nbsp;
<a href="" className='anc'>Verify Company</a>
</td>
</tr></table>
<br></br>
<br></br>
<p className='p'>Lorem ipsum dolor sit amet consectetur adipiscing elit.&nbsp;Etiam eu turpis molesite,dictum est a,&nbsp;&nbsp;&nbsp;
<img  src={Edit} alt="editimg"  width="10px" height="15px"/>
<br></br>
mattis tell us.
</p>
<br></br>
<br></br>
<div>
<ul>
  <li><a href="">Info</a></li>
  <li><a href="">FAQ</a></li>
  <li><a href="">Complaints and feedback</a></li>
  <li><a href="">Privacy Policy</a></li>
  <li><a href="">Terms & Conditions</a></li>
</ul>
</div>

  <div class="column">
    <div class="card">
    <div class="container">
    <table><tr>
    
    
    <td><img  src={contact} alt="editimg"  width="20px" height="17px"/><strong>&nbsp;&nbsp; Contact</strong></td>
    
    <img  src={Edit} alt="editimg"  width="10px" height="15px"/>
    </tr>
    <tr><td><SlEnvolope/> Salesteam@br.in / &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img  src={plusfive} alt="fivemg"  width="15px" height="15px"/></td></tr>
    <tr><td>Salesteam2@br.in</td></tr>
    <tr><td><SlPhone/> +91 8511591740/8000058214</td></tr>
    </table>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <div class="container">
    <table><tr>
    <td><BiMap/>&nbsp;&nbsp;<strong>Address</strong> </td>
    <img  src={Edit} alt="editimg"  width="10px" height="15px"/>

    </tr>
    <p>C-1 / 351 / 4 , GIDC Makarpura,</p>
    <p> Vadodara – 390010, Gujarat, India.
</p>
    </table>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <div class="container">
    <table><tr>
    <td><img  src={imgbreifcase} alt="logoimg"  width="40px" height="25px"/>&nbsp;&nbsp;<strong>Hours Of Operation</strong> </td>
    <img  src={Edit} alt="editimg"  width="10px" height="15px"/>

    </tr>
    <p> Monday–Friday: 9:00AM–6:00PM
</p>
    
    </table>
      </div>
    </div>
  </div>
<div>
<div class="column">
    <div class="card">
    <div class="container">
    <table><tr>
    <td><AiOutlineLink/><strong>&nbsp;&nbsp; Socia Media & Links</strong> </td>
    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
           <img  src={Edit} alt="editimg"  width="10px" height="15px"/>

    </tr>
    <tr><td>
      <br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsGlobe/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsInstagram/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsFacebook/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsTwitter/></td></tr>
    </table>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <div class="container">
    <table><tr>
    <td><FaQuoteLeft/>&nbsp;&nbsp;<strong>Statement</strong> </td>
    <img  src={Edit} alt="editimg"  width="10px" height="15px"/>

    </tr>
    <p>You think it we ink it &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <img  src={oneplus} alt="editimg"  width="20px" height="17px"/></p>

    <p></p>
    
    </table>
      </div>
    </div>
  </div>


</div>
</div>
       </> 
    
    );
  }
  export default Aboutpage;