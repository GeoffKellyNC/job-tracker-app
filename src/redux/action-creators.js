import * as types from './action-types';
// import appData from '../data/dummyDatas';
import axios from 'axios'


export const changeInput = ({name, value}) => {
    return{
        type: types.HANDLE_FORM_CHANGES,
        payload: { name, value },
    }
}

export const deleteApplication = (id) => {
    return{
        type: types.DELETE_APPLICATION,
        payload: id,
    }
}



export const fetchApplicationData = () => dispatch =>{
    axios.get('https://6264452aa55d5055be47154f.mockapi.io/api/applicaitons/applications')
        .then(res => {
            const allData = res.data
            dispatch({ type: types.GET_APPLICATION, payload: allData })
        })
        .catch(err => console.error(err))
}

export const handleSubmit = (newApplication) => dispatch => {
    axios.post('https://6264452aa55d5055be47154f.mockapi.io/api/applicaitons/applications', newApplication)
        .then(res => {
            const newApp = res.data
            dispatch({ type: types.HANDLE_FORM_SUBMIT, payload: newApp })
        })
        .catch(err => console.error(err))
}

export const editForm = (editedApp) => dispatch => {
    axios.put(`https://6264452aa55d5055be47154f.mockapi.io/api/applicaitons/applications/${editedApp.id}`, editedApp)
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

