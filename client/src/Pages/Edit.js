import React from 'react'
import { Link } from 'react-router-dom'



const Edit = ({contact}) => {

    return (
        <div>
            <h2>Edit page</h2>
            <label>Name</label>
            <input 
            name="name"
            // value={newContact.name}
            // onChange={handleChange}
            />

            <label>Email</label>
            <input 
            // value={newContact.email}
            // onChange={handleChange}
            name="email"
            />

            <label>Phone</label>
            <input 
            // value={newContact.phone}
            // onChange={handleChange}
            name="phone"
            />
            <Link to="/"><button >Edit</button></Link>
        </div>
    )
}

export default Edit
