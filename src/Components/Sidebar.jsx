
import React , { Children, useState } from 'react';
import { FaBars,FaTh, FaUserFriends,FaDiceD6,FaHandsHelping,FaCubes} from "react-icons/fa";
import { AiTwotoneTrophy } from "react-icons/ai";
import { BsBoxSeam,BsQuestionOctagon } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import {HiCash} from "react-icons/hi";
import { MdOutlineLiveHelp } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import '../Style.css';
/*import { FC } from 'react/cjs/react.production.min';*/


const Sidebar = ({Children}) =>
{
const [isOpen,SetIsOpen]=useState(false);
const toggle = ()=>SetIsOpen(!isOpen);
const handleClick = () => {
    // implementation details
  };

 const menuItem=[
    {
        path:"/Dashbord",
        name:"dashboard",
        icon:<FaTh/>

    },
    {
        path:"/Orders",
        name:"orders",
        icon:<BsBoxSeam />

    },
    {
        path:"/TeamMembers",
        name:"teammembers",
        icon:<FaUserFriends/>

    },
    {
        path:"/Patners",
        name:"patners",
        icon:<FaHandsHelping/>
    },
{
    path:"/Productlist",
    name:"productlisting",
    icon:<FaCubes/>
    },
    {
        path:"/Awards",
        name:"awardandowners",
        icon:<AiTwotoneTrophy/>

    },
    {
        path:"/About",
        name:"aboutus",
        icon:<FcAbout/>

    },
    {
        path:"/Payment",
        name:"paymentinfo",
        icon:<HiCash/>

    }



 ] 
    return(
    <>
<div className="container">
    <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
        <div className="topsection">
            <h1 style={{display: isOpen ? "block" : "none"}} className="logo">LOGO</h1>
            <div style={{marginleft: isOpen ? "300px" : "0px"}} className="bars">
                <FaBars onClick={toggle}/>
            </div>
        </div>
        {
            menuItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className="link">
                <div className="icon">{item.icon}</div>
                <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
            </NavLink>

        ))
        }
    </div>
    <main><div>{Children}</div></main>
</div>
<div className="box1">
<div className="icon1"><BsQuestionOctagon/></div>
<strong>Need help?</strong>
<p>our support team is</p>
<p>at your disposal</p>
<button type="button" onClick={handleClick} className="button">
Get Help
</button>

</div>
    </>
    );
};
export default Sidebar;