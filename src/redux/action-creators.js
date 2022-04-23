import * as types from './action-types';
import appData from '../data/dummyData';


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


