import React from 'react'
import { useHistory } from 'react-router-dom';

import ApplicationItems from './ApplicationItems'


import './styles/home.css'

function Home({ application, appCount, deleteApp }) {

    const history = useHistory();


    
    const addNewButton = () => {
        history.push('/form')
    }

    return (
        <div className = 'home-container'>
            <div className = 'top-text'>
                <h2>Current Application Count: {appCount}</h2>
                <div className = 'top-btns'>
                    <button 
                        className = 'add-app-btn' 
                        onClick = {addNewButton}>Add Application
                    </button>
                    <button 
                        className = 'stats-btn' 
                        onClick = {() => {history.push("/stats")}}>Stats
                    </button>
                </div>
            </div>
            <div className = 'app-items-container'>
                <ApplicationItems application = {application} deleteApp = {deleteApp} />
            </div>
        </div>
    )
}

export default Home