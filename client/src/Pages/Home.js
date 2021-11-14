import React from 'react'
import ContactList from '../Components/ContactList'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Home = () => {
    return (
        <div>
            <Link to="/add"><Button >Add Contact</Button></Link>
            <ContactList />
        </div>
    )
}

export default Home
