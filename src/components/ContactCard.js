import React from "react";
import user from "../images/user.png";

const ContactCard = (props) =>{
    const {id, name, email,age,dob} = props.contact
     return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
                 <div className="content">
                     <div className="header">Name : {name}</div>
                     <div>Email :{email}</div>
                     <div>Age :{age}</div>
                     <div>Date of Birth :{dob}</div>
                 </div>
                 
                <i className="trash alternate outline icon"
                  style ={{color: "red", marginTop:"7px"}}
                  onClick={() => props.clickHandler(id)}></i>
        </div>
     );
}
export default ContactCard;