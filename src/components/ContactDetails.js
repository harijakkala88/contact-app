import React from "react";
import { Link } from "react-router-dom"
import user from "../images/user.jpg";
import {
    useParams
  } from "react-router-dom";

const ContactDetails = (props) =>{
     const{contacts} = props;

     const { id } = useParams();
    const contact = contacts.find(c => c.id === id)
     return (
        <div className="main">
            <div className="ui card center">
                <div className="image"> 
                    <img src={user} alt="user"/>
                </div>
             <div className="content">
             <div className="name">Name: {contact.name}</div>
             <div className="email">Email :{contact.email}</div>
             <div className="age">Age :{contact.age}</div>
             <div className="dob">DOB : {contact.dob}</div>
             </div>
            </div>
           <Link to="/">
           <button className="ui button blue center">
               Back to Contact List
           </button>
           </Link>

        </div>
     );
}
export default ContactDetails;