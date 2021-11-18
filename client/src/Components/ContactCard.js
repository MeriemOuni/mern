import React from 'react'
import {deleteContact} from "../JS/actions/contact"
import {useDispatch} from 'react-redux'
import { Button, Card } from 'react-bootstrap'
import '../App.css'


const ContactCard = ({contact}) => {
    const dispatch = useDispatch()

    return (
        <div className="container" style={{width:"20%", margin:"5%", border:'black 1px'}}>
            <Card border="info" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUqkRN4QaEzCW4brgWElc7lv8HdwP8RyxJ89WdDWAoIO-rEUIACXkEXG4n2mDGMLuz4Q&usqp=CAU" alt ="avatar"/>
                <Card.Title>{contact.name}</Card.Title>
                <Card.Text>{contact.email}</Card.Text>
                <Card.Text>{contact.phone}</Card.Text>
                <Button onClick={() => dispatch(deleteContact(contact._id))}>Delete</Button>
            </Card>
        </div>
    )
}

export default ContactCard
