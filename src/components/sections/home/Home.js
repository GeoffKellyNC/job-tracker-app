import React, { useState } from 'react'

import styled from 'styled-components'


import { useHistory } from 'react-router-dom';

import ApplicationItems from './ApplicationItems'
import ApplicationItemsList from './ApplicationItemsList'



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
                    {
                        !wantList ? <button className = 'list-btn'  onClick = {() => setWantList(!wantList)}>List View </button> : <button className = 'list-btn'  onClick = {() => setWantList(!wantList)}>Grid View </button>
                    }
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
    background-color: ${pr => pr.theme.colors.black};


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
        background-color: ${pr => pr.theme.colors.burgundy};
        border-radius: 10px;
        border: none;
        padding: 10px;
        font-size: 1rem;
        margin-right: 10px;
        margin-left: 10px;
        color: ${pr => pr.theme.colors.white};
        font-family: ${pr => pr.theme.font.mainFont};
        transition: all 0.5s ease-in-out;

        &:hover {
            transform: scale(1.2);
        }
    }
    .stats-btn {
        background-color: ${pr => pr.theme.colors.burgundy};
        border-radius: 10px;
        border: none;
        padding: 10px;
        font-size: 1rem;
        margin-right: 10px;
        margin-left: 10px;
        color: ${pr => pr.theme.colors.white};
        font-family: ${pr => pr.theme.font.mainFont};
        transition: all 0.5s ease-in-out;
        &:hover {
            transform: scale(1.2);

        }
    }
    .list-btn {
        background-color: ${pr => pr.theme.colors.burgundy};
        border-radius: 10px;
        border: none;
        padding: 10px;
        font-size: 1rem;
        margin-right: 10px;
        margin-left: 10px;
        color: ${pr => pr.theme.colors.white};
        font-family: ${pr => pr.theme.font.mainFont};
        transition: all 0.5s ease-in-out;
        &:hover {
            transform: scale(1.2);

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