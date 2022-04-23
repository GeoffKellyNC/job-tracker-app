import * as types from './action-types';
import axios from 'axios'


export const changeInput = ({name, value}) => {
    return{
        type: types.HANDLE_FORM_CHANGES,
        payload: { name, value },
    }
}





export const fetchApplicationData = () => dispatch =>{
    axios.get(`https://${process.env.REACT_APP_API_ENDPOINT}.mockapi.io/api/applicaitons/applications`)
        .then(res => {
            const allData = res.data
            dispatch({ type: types.GET_APPLICATION, payload: allData })
        })
        .catch(err => console.error(err))
}

export const handleSubmit = (newApplication) => dispatch => {
    axios.post(process.env.REACT_APP_API_ENDPOINT, newApplication)
        .then(res => {
            const newApp = res.data
            dispatch({ type: types.HANDLE_FORM_SUBMIT, payload: newApp })
        })
        .catch(err => console.error(err))
}

export const editForm = (editedApp) => dispatch => {
    axios.put(`${process.env.REACT_APP_API_ENDPOINT}/${editedApp.id}`, editedApp)
        .then(res => {
            const newApp = res.data
            dispatch({ type: types.EDIT_FORM, payload: newApp })
        }
        )
        .catch(err => console.error(err))
    return{
        type: types.EDIT_FORM,
        payload: editedApp,
    }
}


export const deleteApplication = (id) => dispatch => {
    axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/${id}`)
        .then(res => {
            const deletedApp = res.data
            dispatch({ type: types.DELETE_APPLICATION, payload: deletedApp })
        }
        )
        .catch(err => console.error(err))
}


