import * as types from './action-types';
import axios from 'axios'

const link = process.env.REACT_APP_APPLICATION_LINK;


export const changeInput = ({name, value}) => {
    return{
        type: types.HANDLE_FORM_CHANGES,
        payload: { name, value },
    }
}

export const fetchApplicationData = () => dispatch =>{
    axios.get(`${link}`)
        .then(res => {
            const allData = res.data
            dispatch({ type: types.GET_APPLICATION, payload: allData })
        })
        .catch(err => console.error(err))
}

export const handleSubmit = (newApplication) => dispatch => {
    axios.post(`${link}`, newApplication)
        .then(res => {
            const newApp = res.data
            dispatch({ type: types.HANDLE_FORM_SUBMIT, payload: newApp })
        })
        .catch(err => console.error(err))
}

export const editForm = (editedApp) => dispatch => {
    axios.put(`${link}/${editedApp.id}`, editedApp)
        .then(res => {
            const newApp = res.data
            dispatch({ type: types.EDIT_FORM, payload: newApp })
        })
        .catch(err => console.error(err))
    return{
        type: types.EDIT_FORM,
        payload: editedApp,
    }
}


export const deleteApplication = (id) => dispatch => {
    axios.delete(`${link}/${id}`)
        .then(res => {
            const deletedApp = res.data
            dispatch({ type: types.DELETE_APPLICATION, payload: deletedApp })
        }
        )
        .catch(err => console.error(err))
}


export const fetchJobDatabase = (searchTerm,city,state) => dispatch => {

    const options = {
        method: 'POST',
        url: 'https://indeed11.p.rapidapi.com/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Host': 'indeed11.p.rapidapi.com',
          'X-RapidAPI-Key': 'd111348fcamsh04dc037ab98320dp1f5fd6jsnb81ca9f78a0e'
        },
        data: '{"search_terms":"crypto","location":"Atlanta, GA","page":"1","fetch_full_text":"yes"}'
      };
      
     axios.request(options)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.error(err))
}




