// require express
const express = require("express");

// express router
const router = express.Router()

// require model contacts
const Contact = require('../models/Contact')


////////// Routes

/**
 * @desc : testing route
 * @path : http://localhost:8000/api/contacts/test
 * @method : GET
 * @data : no data 
 * */

router.get('/test', (req, res) => {
    res.send('Hello world')
})
/**
 * @desc : add contact
 * @path : http://localhost:8000/api/contacts/
 * @method : POST
 * @data : no data 
 * */
router.post('/', async (req, res) => {
    try {
        const { name, email, phone } = req.body
        // hnadling errors : name and email required
        if (!name || !email){
            res.status(400).send({msg: 'Name & email are required !!!', error})
            return
        }
        // handling errors : email is unique
        const contact = await Contact.find({email})
        if (contact){
            res.status(400).send({msg: 'Contact already exist !!!', error})
            return
        }
        const newContact = new Contact({
            name,
            email,
            phone
        })
        await newContact.save()
        res.status(200).send({msg: "Contact added successfully ...", newContact})
    } catch (error) {
        res.status(400).send({msg: 'Can not add contact !!!', error})
    }
})

/**
 * @desc : get all contact
 * @path : http://localhost:8000/api/contacts/
 * @method : GET
 * @data : no data 
 * */
router.get('/', async (req, res) => {
    try {
        const listContacts = await Contact.find()
        res.status(200).send({msg: 'This is the list of all contacts ...', listContacts})
    } catch (error) {
        res.status(400).send({msg: 'Can not get all contacts !!!', error})
    }
})
/**
 * @desc : get contact
 * @path : http://localhost:8000/api/contacts/:id
 * @method : GET
 * @data : req.paramas.id
 * */
router.get('/:id', async (req, res) =>{
    try {
        const contactToGet = await Contact.findOne({_id: req.params.id})
        res.status(200).send({msg: 'I get the contact ..', contactToGet})
    } catch (error) {
        res.status(400).send({msg: 'Can not get contact with this id !!!', error})
    }
})

/**
 * @desc : delete contact
 * @path : http://localhost:8000/api/contacts/:_id
 * @method : DELETE
 * @data : req.paramas.id
 * */
router.delete('/:_id', async (req, res) => {
    try {
        const {_id} = req.params
        await Contact.findOneAndDelete({ _id })
        res.status(200).send({msg: 'Contact deleted ...'})
    } catch (error) {
        res.status(400).send({msg: 'Can not delete contact with this id !!!', error})
    }
})

/**
 * @desc : edit contact
 * @path : http://localhost:8000/api/contacts/:_id
 * @method : PUT
 * @data : req.paramas.id & req.body
 * */
router.put('/:_id', async (req, res) => {
    try {
        const { _id } = req.params
        const result = await Contact.updateOne({_id}, {$set : {...req.body}})
        res.status(200).send({msg: 'Contact updated ...'})
    } catch (error) {
        res.status(400).send({msg: 'Can not edit contact with this id !!!', error})
    }
})

module.exports = router 