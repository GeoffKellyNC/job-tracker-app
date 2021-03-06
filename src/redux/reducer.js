import { combineReducers } from 'redux';
import * as types from './action-types';


const initialApps = []
function applications(appData = initialApps, action) {
    switch (action.type) {
        case types.GET_APPLICATION: {
            return action.payload
        }
        case types.EDIT_FORM: {
            const newApplications = appData.map(app => {
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
        case types.HANDLE_FORM_SUBMIT: {
            return  [...appData, action.payload]
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

        default: 
            return formState
    }
}

const initialSearchForm = {
    search: '',
}

function jobSearchForm(searchFormState = initialSearchForm ,action){
    switch(action.type)
    {
        case types.HANDLE_SEARCH_CHANGES: {
            const { name, value } = action.payload
            return { ...searchFormState, [name]: value}
        }
        case types.GET_JOB_DATABASE: {
            return initialSearchForm
        }
        default:
            return searchFormState
    }
}

function returnedJobs(returnedJobsState = [], action){
    switch(action.type){
        case types.GET_JOB_DATABASE: {
            return action.payload
        }
        default:
            return returnedJobsState
    }
}






export default combineReducers({
    applications,
    form,
    jobSearchForm,
    returnedJobs,
    
})