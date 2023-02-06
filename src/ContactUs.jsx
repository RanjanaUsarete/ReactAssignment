import React,{useState} from 'react';
import './App.css';
import './Style.css';
import './Demo.css';
import Aboutpage from "./Aboutpage";
import Header from "./Header";
import Menu from "./Menu";
import {SlEnvolope,SlPhone} from "react-icons/sl";


const ContactUs = () =>{
    const [user, setUser] = useState ({
      email:"",contact:""
    });
    const[record,setRecords]=useState([]);
let name,value,id;
const handleInput = (e) =>
{
  name = e.target.name;
  value = e.target.value;
  console.log(name,value);
  setUser({...user,[name]:value});
}
const handleSubmit = (e)=>
{
e.preventDefault();
const newRecord = {...user, id:new Date().getTime().toString()}
console.log(record);
setRecords([...record,newRecord]); 
setUser({email:"",contact:""});
}
    return (
<>
<form action = "" onSubmit={handleSubmit}>
 <div class="wrapper">
  <div class="box header"><Header/></div>
  <div class="box sidebar"><Menu/></div>
  <div class="box content">

  <strong>Contacts</strong>
  <p className='p1'>please provide the company's emails & contacts.</p>
<br></br>
<br></br>
<p>Email Id</p>
<br></br><br></br>
<input className="textbox1" name="email" id="email" type="text" placeholder="eg.salesteam@br.inername" value={user.email} onChange={handleInput}/>
<br></br>
<br></br>
<button  className="addbutton"> + Add More</button>  


<br></br>
<p>Contact Number</p>

<br></br><br></br>
<input className="textbox1" type="text" name="contact" id="phone" placeholder="eg.8511591740" value={user.contact} onChange={handleInput}/>
<br></br>
<br></br>
<button  className="addbutton"> + Add More</button>      
<br></br>
<br></br>
<br></br>
<br></br>
<button className='savebutton' onClick={handleSubmit}>Save</button>
<br></br>
<div>{
  record.map((curEle)=>{
       return (
        <div key={id}>
        <label className="textbox1" ><SlEnvolope/>&nbsp;&nbsp;{curEle.email}</label>
        <br></br>
        <br></br>
         <label className='textbox1'><SlPhone/>&nbsp;&nbsp;{curEle.contact}</label>
         <br></br><br></br>


      </div>

     );})}

</div>


  



  </div>
  
</div>
</form>

 </>
    );
 };
 export default ContactUs;