// importation type
import { FAIL_CONTACTS, GET_CONTACT, GET_CONTACTS, LOAD_CONTACTS } from "../actionTypes/contact"

// initialState
const initialState = {
    listContacts:[],
    errors: null,
    load: false,
    contactToGet:{}
}

// pure function
const contactReducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case LOAD_CONTACTS: return { ...state, load: true }
        case GET_CONTACTS: return { ...state, load: false , listContacts: payload.listContacts}
        case FAIL_CONTACTS: return { ...state, load: false, errors:payload }
        case GET_CONTACT: return { ...state, contact: payload.contactToGet }
        default:
            return state;
    }
}

export default contactReducer