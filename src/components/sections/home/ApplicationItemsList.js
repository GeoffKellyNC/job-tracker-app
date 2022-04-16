/* eslint-disable no-lone-blocks */
import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components'

// import './styles/ApplicationItemsList.css'

//? Import Icons using React Icons
import { DiGithubAlt } from "react-icons/di";

function ApplicationItemsList({ application, deleteApp}) {
    
    const history = useHistory();


    return (
        <StyledApplicationItemsList>
            {application.map(app => {
                let containerClass;
                let status = app.currentStatus;
                

                switch(status) {
                    case status = ('rejected'):
                        containerClass = 'app-home-items-listView rejected'
                        break;
                    case status = ('Interview Phase'):
                        containerClass = 'app-home-items-listView interview'
                        break;
                    case status = ('offer'):
                        containerClass = 'app-home-items-listView offer'
                        break;
                    case status = ('applied'):
                        containerClass = 'app-home-items-listView applied'
                        break; 
                    case status = ('contacted'):
                        containerClass = 'app-home-items-listView contacted'
                        break;
                    case status = ('other'):
                        containerClass = 'app-home-items-listView other'
                        break;
                    default:
                        containerClass = 'app-home-items-listView'
                        break;
                }
                return (
                    <div className = {containerClass}  key={app.id}>
                        <img 
                            src={app.companyWeb.length > 1 ? `https://logo.clearbit.com/${app.companyWeb}`:
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
                        <div className = 'btn-container-listView'>
                            <button className = 'info-btn' onClick = {() => {history.push(`/${app.id}`)}}>Info</button>
                            <button className = 'del-btn' onClick = {() => deleteApp(app.id)} >Delete</button>
                            <button className = 'edit-btn' onClick = {() => {history.push(`/edit/${app.id}`)}} >Edit</button>
                        </div>
                    </div>
                    )
                })
                }
        </StyledApplicationItemsList>
    )
}

export default ApplicationItemsList;


const StyledApplicationItemsList = styled.div`
    a{
        text-decoration: none;
    }

    .app-home-items-listView{
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto 2em;
        width: 80%;
        background-color: #219EBC;
        /* background-color: #f93d67; */
        padding: 0.5em;
        border-radius: 5px;
        border: 3px solid #FFB704;
        height: 7em;
        justify-content: space-between;
        align-items: center;
        transition: 0.5s;
    }

    .app-home-items-listView:hover{
    transform: scale(1.1);
    }

    .rejected{
        background-color: ${pr => pr.theme.appStatus.rejected};
    }
    .applied{
        background-color: ${pr => pr.theme.appStatus.applied};
    }
    .offer{
        background-color: ${pr => pr.theme.appStatus.offer};
    }
    .interview{
        background-color: ${pr => pr.theme.appStatus.interview};
    }
    .contacted{
        background-color: ${pr => pr.theme.appStatus.contacted};
    }
    .other{
        background-color: ${pr => pr.theme.appStatus.other};
    }

    .app-home-items-listView h3{
        color: #ffb703;
        display: flex;
        font-family: 'Poppins', sans-serif;
        font-size: 1.2em;
        font-weight: 300;
    }

    .app-home-items-listView p{
        color: white;
        margin: 0 10px;
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;

    }

    .item-icon{
        width: 1em;
        height: auto;
        margin: 0 10px;
    }

    .app-home-items-listView h4{
        color: white;
        font-family: 'Poppins', sans-serif;
        font-size: 2em;
        font-weight: 800;
        margin: 0;
    }



    .btn-container-listView button {
        font-family: 'Poppins', sans-serif;
        margin: 0.2em;
        padding: 1em;
        border: none;
        color: white;
        border-radius: 5px;
        box-shadow: 0px 0px 3px black;
        width: 6em;
        background-image: linear-gradient(to right, #FF512F 0%, #DD2476  51%, #FF512F  100%);
        transition: 0.5s;
        background-size: 200% auto;
        height: auto;
    }


    .info-btn:hover, .del-btn:hover, .edit-btn:hover{
        background-position: right center;
        color: #fff;
        text-decoration: none;
        transform: scale(1.1);
    }

    .item-icon{
        font-size: 1.5em;
    }
    




`