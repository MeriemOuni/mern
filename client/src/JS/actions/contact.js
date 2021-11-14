import axios from "axios"
import {
    FAIL_CONTACTS,
    GET_CONTACTS,
    LOAD_CONTACTS,
    GET_CONTACT
} from "../actionTypes/contact"


export const getContacts = () => async (dispatch) => {
        dispatch({type: LOAD_CONTACTS})
    try {
        let result = await axios.get('/api/contacts/')
        dispatch({type: GET_CONTACTS, payload: result.data })
    } catch (error) {
        dispatch({
            type: FAIL_CONTACTS, payload: error.response
        })
    }
}

export const postContact = (newContact) => async (dispatch) => {
    try {
        await axios.post('/api/contacts/', newContact)
        dispatch(getContacts())
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response})
    }
}

export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/contacts/${id}`)
        dispatch(getContacts())
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response})
    }
}

export const editContact = (id, newContact) => async (dispatch) => {
    try {
        await axios.put(`/api/contacts/${id}`, newContact)
        dispatch(getContacts())
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response})
    }
} 

export const getOneContact = (id) => async (dispatch) => {
    try {
        let result = await axios.get(`/api/contacts/${id}`)
        dispatch({type: GET_CONTACT, payload: result.data})
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response})
    }
}