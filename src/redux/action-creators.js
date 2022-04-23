import * as types from './action-types';
import appData from '../data/dummyData';
import axios from 'axios'


export const changeInput = ({name, value}) => {
    return{
        type: types.HANDLE_FORM_CHANGES,
        payload: { name, value },
    }
}

export const handleSubmit = (newApplication) => {
    console.log('Action Creator')

    return{
        type: types.HANDLE_FORM_SUBMIT,
        payload: newApplication,
    }
}

export const deleteApplication = (id) => {
    return{
        type: types.DELETE_APPLICATION,
        payload: id,
    }
}

export const editForm = (editedApp) => {
    return{
        type: types.EDIT_FORM,
        payload: editedApp,
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


