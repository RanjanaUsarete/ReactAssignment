import React from 'react';
import '../src/Style.css';
import './App.css';
import {FaSistrix,FaPoll} from "react-icons/fa";
import {BsCart3} from "react-icons/bs";

import imglogo from "../src/Images/A.T-inks-logo-600-DPI-1-e1545645137933 (1).png";
import userimg from "../src/Images/user1.jpg";

const Header = () => {
    const [value, setValue] = React.useState('UserAdmin');

    const handleChange = (event) => {
   
      setValue(event.target.value);
   
    };

    return(
    <>
    <table>
    <tr>
    <td>
        <div className="header">
        <div className="header_left">
        <div><img  src={imglogo} alt="logoimg"  width="70px" height="50px"/>
        <div>
        Powred by <FaPoll/><strong className='red1'>&nbsp;Red</strong></div></div>
                
             </div>
             
        
        
</div>

</td>
<td><div className="hearder_content" ><input type="text" placeholder="search" className="search"/><div className='Sicone'><FaSistrix/></div></div></td>
<td><div className="checkout"><div className='checkicon'><BsCart3 />  checkout(200)</div></div></td>
<td></td><td></td>
<td>   <div><img  src={userimg} alt="user" height="40px" width="40px" margin="50px"/>
</div></td>
<td>
<div className="list1">
<select  value={value} onChange={handleChange}>
<option value="admin">User Admin</option>
<option value="user">User</option>
</select>
</div></td>
</tr>
</table>
    </> 
    
    );
  }
  export default Header;