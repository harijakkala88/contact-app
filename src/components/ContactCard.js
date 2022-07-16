import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) =>{
    const {id, name, email,age,dob} = props.contact;
    console.log(props);
     return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
                 <div className="content">
                     <Link to={{ pathname: `/contact/${id}`, state:{ contact: props.contact}}}>
                     <div className="header">Name : {name}</div>
                     <div className="email">Email :{email}</div>
                     <div className="age">Age :{age}</div>
                     <div className="DOB">Date of Birth :{dob}</div>
                     </Link>
                 </div>
                 
                <i className="trash alternate outline icon"
                  style ={{color: "red", marginTop:"7px"}}
                  onClick={() => props.clickHandler(id)}></i>
        </div>
     );
}
export default ContactCard;