import React from 'react'
import { Link, useHistory } from 'react-router-dom';

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
                <button onClick = {addNewButton}>Add Application</button>
            </div>
            <ApplicationItems application = {application} deleteApp = {deleteApp} />
        </div>
    )
}

export default Home