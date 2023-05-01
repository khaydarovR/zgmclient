import axios from 'axios';
import React, {useState, setState} from 'react';


const baseURL = "https://localhost:7203/api/account";

function RegistrationForm() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        e.preventDefault();
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setPhone(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit = (e) => {
        fetch(baseURL, {
            method: 'POST',
            headers: {
              'Token': 'test',
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({"name": firstName,
            "lastName": lastName,
            "phone": phone,
            "password": password})
          })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch(error => console.error('Unable to add item.', error));
    }


    

    return(
        <div className="form mx-3">
            <div className="form-group">
                <div className="username">
                    <label for="firstName">Name </label>
                    <input className="form-control
                    " type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form-control
                    " onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label for="email">Phone </label>
                    <input  type="email" id="email" className="form-control
                    " value={phone} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="" for="password">Password </label>
                    <input className="form-control
                    " type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="" for="confirmPassword">Confirm Password </label>
                    <input className="form-control
                    " type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>
            <div>
                <button className='btn btn-primary my-2' onClick={()=>handleSubmit()} type="submit">Register</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm