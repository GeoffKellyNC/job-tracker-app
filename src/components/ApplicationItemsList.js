/* eslint-disable no-lone-blocks */
import React from 'react'
import { Link, useHistory } from 'react-router-dom';

import './styles/ApplicationItemsList.css'

//? Import Icons using React Icons
import { DiGithubAlt } from "react-icons/di";

function ApplicationItemsList({ application, deleteApp}) {
    
    const history = useHistory();


    return (
        <>
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
                        <div className = 'btn-container-listView'>
                            <button className = 'info-btn' onClick = {() => {history.push(`/${app.id}`)}}>Info</button>
                            <button className = 'del-btn' onClick = {() => deleteApp(app.id)} >Delete</button>
                            <button className = 'edit-btn' onClick = {() => {history.push(`/edit/${app.id}`)}} >Edit</button>
                        </div>
                    </div>
                    )
                })
                }
        </>
    )
}

export default ApplicationItemsList;