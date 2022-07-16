import React from "react";
import {Link} from "react-router-dom";


class AddContact extends React.Component{
   state = {
        name: "",
        email:"",
        age:"",
        dob:""
   };

      addContact = (e) => {

          if(this.state.name ==="" || this.state.email ==="" || this.state.age ==="" || this.state.dob ==="")
          {
              alert("All the fields are required")
              return
          }
          this.props.addContactHandler(this.state);
          this.setState({name:"", email:"", age:""});          
      }
      
       onDOBChange = (ev) => {
        if(ev.target.value){
            const currentDate = (new Date()).getFullYear();
            const keyInDate = (new Date(ev.target.value)).getFullYear();
            if (keyInDate === currentDate) {
                this.setState({dob: ""})
                alert("Selected year can not be current year")
                  return
            }
            this.setState({dob: ev.target.value})
        }
       
	
	};

      render() {
          return (
              <div className="ui main">
                <h2>Add contact</h2>
                <form className='ui form' noValidate>
                      <div className="field">
                          <label>Name</label>
                          <input type="text" name="name" placeholder="Name"  value= {this.state.name} onChange={(e)=> this.setState({name: e.target.value})}/>
                      </div>
                      <div className="field">
                          <label>Email</label>
                          <input type="text" email="email" placeholder="Email" value= {this.state.email} onChange={(e)=> this.setState({email: e.target.value})} />
                      </div>
                      <div className="field">
                          <label>Age</label>
                          <input type="text" age="age" placeholder="Age" value= {this.state.age} onChange={(e)=> this.setState({age: e.target.value})} />
                      </div>
                      <div className="field">
                          <label>Date Of Birth</label>
                          <input  type="date" dob="dob" placeholder="Date of Birth"  onChange={(e)=> this.onDOBChange(e)} />
                      </div>
                     
                      <Link to="/">
                      <button className="ui button blue" onClick={this.addContact} >Add</button>
                      </Link>
                </form>
              </div>
          );
      }
}
export default AddContact;
