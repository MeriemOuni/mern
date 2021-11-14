import React, { useState } from 'react'
import {useDispatch } from 'react-redux'
import { postContact}  from '../JS/actions/contact'
import { Link } from 'react-router-dom';

const Add = () => {
    const [newContact, setNewContact] = useState({name:"", email:"", phone:""})
    const dispatch = useDispatch() 
    const handleChange = (e) => {
        setNewContact({...newContact, [e.target.name] : e.target.value})
    }

    const add = () => {
        dispatch(postContact(newContact))
    }
        
    return (
        <div>
            <label>Name</label>
            <input 
            name="name"
            value={newContact.name}
            onChange={handleChange}
            />

            <label>Email</label>
            <input 
            value={newContact.email}
            onChange={handleChange}
            name="email"
            />

            <label>Phone</label>
            <input 
            value={newContact.phone}
            onChange={handleChange}
            name="phone"
            />
            <Link to="/"><button onClick={() => add()} >Add</button></Link>
            
        </div>
    )
}

export default Add
