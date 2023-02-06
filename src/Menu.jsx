import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { Routes,Route, BrowserRouter } from "react-router-dom";
import Dashbord from './Components/Dashbord.jsx';
import About from './Components/About.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Orders from './Components/Orders.jsx';
import TeamMembers from './Components/TeamMembers';
import Patners from './Components/Patners';
import Productlist from './Components/Productlist';
import Awards from './Components/Awards';
import Payment from './Components/Payment';


/*import { FaBars,FaTh,FaUserAlt, FaRegChartBar,FaCommentAlt } from "react-icons/fa";*/

const Menu = () =>{
   return (
<>


<Sidebar>
<BrowserRouter>

    <Routes>
        <Route  path="/" element={<Dashbord/>}/>
        <Route  path="/dashbord" element={<Dashbord/>}/>
        <Route  path="/orders" element={<Orders/>}/>
        <Route  path="/teammembers" element={<TeamMembers/>}/>
        <Route  path="/patners" element={<Patners/>}/>
        <Route  path="/productlisting" element={<Productlist/>}/>
        <Route  path="/awardandowners" element={<Awards/>}/>
        <Route  path="/aboutus" element={<About/>}/>
        <Route  path="/paymentinfo" element={<Payment/>}/>
        <Route/>
     </Routes>
     </BrowserRouter>

    </Sidebar>
    
    </>
  );
}

export default Menu;
