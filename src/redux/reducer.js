import { combineReducers } from 'redux';
import * as types from './action-types';
import applicationData from '../data/dummyData';


function applications(appData = applicationData, action) {
    switch (action.type) {
        case types.GET_APPLICATION: {

            return action.payload
        }
        case types.EDIT_FORM: {
            const newApplications = applicationData.map(app => {
                if (app.id === action.payload.id) {
                    return action.payload
                }
                return app
                })
            console.log(newApplications)
            return appData = newApplications
        }
        case types.DELETE_APPLICATION: {
            const id = action.payload
            console.log(`Deleting ${id}`)
            return appData.filter(app => app.id !== id)
        }
        default: 
            return appData
    }
}

const initialForm = {
        companyName: '',
        companyPhone: '',
        companyWeb: '',
        jobTitle: '',
        dateApplied: '',
        jobDiscovery: '',
        salaryInfo: '',
        contactQues: '',
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        contactPosition: '',
        currentStatus: '',
        otherNotes: '',
}

function form(formState = initialForm,action){
    switch(action.type){
        case types.HANDLE_FORM_CHANGES: {
            const { name, value } = action.payload
            return { ...formState, [name]: value}
        }
        case types.HANDLE_FORM_SUBMIT: {
            const  newApplication  = action.payload
            return  applicationData.push(newApplication)
        }
        default: 
            return formState
    }
}

export default combineReducers({
    applications,
    form
})