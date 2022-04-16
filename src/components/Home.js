import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';

import ApplicationItems from './ApplicationItems'
import ApplicationItemsList from './ApplicationItemsList'


// import './styles/home.css'

function Home({ application, appCount, deleteApp }) {
    const [wantList, setWantList] = useState(false);


    const history = useHistory();


    
    const addNewButton = () => {
        history.push('/form')
    }

    return (
        <StyledHome className = 'home-container'>
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
        </StyledHome> 
    )
}

export default Home

//!-- Styling --//
const StyledHome = styled.div`
    .top-text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        background: ${props => props.theme.colors.ruby};
    }
    .top-btns {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .add-app-btn {
        background-color: #f5f5f5;
        border-radius: 10px;
        border: none;
        padding: 10px;
        font-size: 1rem;
        margin-right: 10px;
        margin-left: 10px;
        color: #353531;
        font-family: ${pr => pr.theme.font.mainFont};
        &:hover {
            background-color: #e5e5e5;
        }
    }
    .stats-btn {
        background-color: #f5f5f5;
        border-radius: 10px;
        border: none;
        padding: 10px;
        font-size: 1rem;
        margin-right: 10px;
        margin-left: 10px;
        color: #353531;
        font-family: ${pr => pr.theme.font.mainFont};
        &:hover {
            background-color: #e5e5e5;
        }
    }
    .list-btn {
        background-color: #f5f5f5;
        border-radius: 10px;
        border: none;
        padding: 10px;
        font-size: 1rem;
        margin-right: 10px;
        margin-left: 10px;
        color: #353531;
        font-family: ${pr => pr.theme.font.mainFont};
        &:hover {
            background-color: #e5e5e5;
        }
    }
    .app-items-container {
        display: flex;
        ${'' /* flex-direction: column; */}
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.5em;
        margin-top: 20px;
    }


`