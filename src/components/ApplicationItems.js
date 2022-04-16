/* eslint-disable no-lone-blocks */
import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom';

// import './styles/ApplicationItems.css'

//? Import Icons using React Icons
import { DiGithubAlt } from "react-icons/di";

function ApplicationItems({ application, deleteApp}) {
    
    const history = useHistory();


    return (
        <StyledAppItems>
            {application.map(app => {
                let containerClass;
                let status = app.currentStatus;
                

                switch(status) {
                    case status = ('rejected'):
                        containerClass = 'app-home-items rejected'
                        break;
                    case status = ('Interview Phase'):
                        containerClass = 'app-home-items interview'
                        break;
                    case status = ('offer'):
                        containerClass = 'app-home-items offer'
                        break;
                    case status = ('applied'):
                        containerClass = 'app-home-items applied'
                        break; 
                    case status = ('contacted'):
                        containerClass = 'app-home-items contacted'
                        break;
                    case status = ('other'):
                        containerClass = 'app-home-items other'
                        break;
                    default:
                        containerClass = 'app-home-items'
                        break;
                }
                return (
                        <div className = {containerClass}  key={app.id}>
                            <img 
                                src={app.companyName.length > 1 ? `https://logo.clearbit.com/${app.companyWeb}`:
                                    <DiGithubAlt 
                                        className = 'item-icon' />} 
                                alt={app.companyName} 
                                className = 'item-icon' />
                            <Link to={`/${app.id}`}>
                                <h4>{app.companyName}</h4></Link>
                            <h3>Position:
                                <p>{app.jobTitle}</p>
                            </h3>
                            <h3>Date Applied:
                                <p>{app.dateApplied}</p>
                            </h3>
                            <h3> Contacted:
                                <p>{app.contactQues}</p>
                            </h3>
                            <h3>Status:
                                <p>{app.currentStatus}</p>
                            </h3>
                            <div className = 'btn-container'>
                                <button className = 'info-btn' onClick = {() => {history.push(`/${app.id}`)}}>Info</button>
                                <button className = 'del-btn' onClick = {() => deleteApp(app.id)} >Delete</button>
                                <button className = 'edit-btn' onClick = {() => {history.push(`/edit/${app.id}`)}} >Edit</button>
                            </div>
                        </div>
                    )
                })
                }
        </StyledAppItems>
    )
}

export default ApplicationItems


//!-- Styling -->

const StyledAppItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1em;


    a{
        text-decoration: none;
    }



    .app-home-items{
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto 5em;
        width: 30em;
        background-color: #219EBC;
        padding: 0.5em;
        border-radius: 20px;
        border: none;
        height: 20em;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        transition: 0.5s;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    }

    .app-home-items:hover{
        transform: scale(1.1);
    }

    .rejected{
        background-color: #FF4D4D;
    }
    .applied{
        background-color: #219EBC;
    }
    .offer{
        background-color: #06b724;
    }
    .interview{
        background-color: #e320edb7;
    }
    .contacted{
        background-color: #7e7800;
    }
    .other{
        background-color: #061dc8;
    }

    .app-home-items h3{
        color: #ffb703;
        display: flex;
        font-family: ${pr => pr.theme.font.mainFont};
        font-size: 1.2em;
        font-weight: 300;
    }

    .app-home-items p{
        color: white;
        margin: 0 10px;
        font-family: ${pr => pr.theme.font.mainFont};
        font-size: 1rem;
    }

    .item-icon{
        width: 3em;
        height: 3em;
        border-radius: 50%;
        margin: 0 auto;
        margin-bottom: 0.2em;
    }

    .app-home-items h4{
        color: white;
        font-family: ${pr => pr.theme.font.mainFont};
        font-size: 2em;
        font-weight: 300;
        margin: 0 auto;
        margin-bottom: 0.2em;
    }

    .btn-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        width: 100%;
    }

    .btn-container button {
        background-color: ${pr => pr.theme.colors.darkBlue};
        border: none;
        border-radius: 5px;
        color: white;
        font-family: ${pr => pr.theme.font.mainFont};
        font-size: 1em;
        font-weight: 600;
        padding: 0.5em;
        width: 10em;
        margin: 0.5em;
        transition: 0.5s;
    }

    .info-btn{
        background-color: ${pr => pr.theme.colors.darkBlue};
    }



    .info-btn:hover, .del-btn:hover, .edit-btn:hover{
        background-color: ${pr => pr.theme.colors.ruby};
        color: white;
        transform: scale(1.1);
    }

    .item-icon{
        font-size: 1.5em;
    }

    

`