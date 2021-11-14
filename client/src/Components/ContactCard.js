import React from 'react'
import {deleteContact, getOneContact} from "../JS/actions/contact"
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import '../App.css'


const ContactCard = ({contact}) => {
    const dispatch = useDispatch()
    const handleEdit = () => {

        dispatch(getOneContact(contact._id))
    }

    return (
        <div className="container" style={{width:"40%", margin:"5%", border:'black 1px'}}>
            <Card>
            <h2>{contact.name}</h2>
            <h2>{contact.email}</h2>
            <h2>{contact.phone}</h2>
            <div style={{display:"flex", justifyContent:"space-around"}}>
            <Link to="/edit"><Button onClick={handleEdit} contact={contact}>Edit</Button></Link>
            <Button onClick={() => dispatch(deleteContact(contact._id))}>Delete</Button>
            </div>
            </Card>
        </div>
    )
}

export default ContactCard
