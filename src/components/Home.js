import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import ApplicationItems from './ApplicationItems'
import ApplicationItemsList from './ApplicationItemsList'


import './styles/home.css'

function Home({ application, appCount, deleteApp }) {
    const [wantList, setWantList] = useState(false);


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
                    <button 
                        className = 'list-btn' 
                        onClick = {() => setWantList(!wantList)}>List View
                    </button>
                </div>
            </div>
            <div className = 'app-items-container'>
                {
                    !wantList ? <ApplicationItems application = {application} deleteApp = {deleteApp} /> : 
                    <ApplicationItemsList application = {application} deleteApp = {deleteApp} />
                }
            </div>
        </div> 
    )
}

export default Home