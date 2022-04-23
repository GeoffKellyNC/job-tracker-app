/* eslint-disable no-lone-blocks */
import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom';

import { connect } from 'react-redux'
import * as actions from '../../../redux/action-creators'

import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { CgInfo } from 'react-icons/cg';

// import './styles/ApplicationItems.css'

//? Import Icons using React Icons
import { DiGithubAlt } from "react-icons/di";

function ApplicationItems(props) {

    const { applications, deleteApplication } = props;
    
    const history = useHistory();


    return (
        <StyledAppItems>
            {applications.map(app => {
                let containerClass;
                let status = app.currentStatus;

                console.log(app.dateApplied)
                console.log(app.companyWeb)
                

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
                                <CgInfo  
                                    onClick = {() => {history.push(`/${app.id}`)}} 
                                    className = 'info-btn btn-icon'
                                    size = {'1.5em'}
                                />
                                <FiEdit 
                                    onClick = {() => {history.push(`/edit/${app.id}`)}}
                                    className = 'edit-btn btn-icon'
                                    size = {'1.5em'}
                                />
                                <AiFillDelete
                                    onClick = {() => deleteApplication(app.id)}
                                    className = 'del-btn btn-icon'
                                    size = {'1.5em'}
                                />
                            </div>
                        </div>
                    )
                })
                }
        </StyledAppItems>
    )
}

const mapStateToProps = state => {
    return {
        deleteApplication: state.deleteApplication,
        applications: state.applications,
    }
}


export default connect(mapStateToProps, actions)(ApplicationItems)


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

    .app-home-items h3{
        color: ${pr => pr.theme.colors.black};
        display: flex;
        font-family: ${pr => pr.theme.font.mainFont};
        font-size: 1.2em;
        font-weight: 700;
    }

    .app-home-items p{
        color: ${pr => pr.theme.colors.black};
        margin: 0 10px;
        font-family: ${pr => pr.theme.font.mainFont};
        font-size: 1rem;
        font-weight: 300;

    }

    .item-icon{
        width: 3em;
        height: 3em;
        border-radius: 50%;
        margin: 0 auto;
        margin-bottom: 0.2em;
    }

    .app-home-items h4{
        color: ${pr => pr.theme.colors.black};
        font-family: ${pr => pr.theme.font.mainFont};
        font-size: 2em;
        font-weight: 300;
        margin: 0 auto;
        margin-bottom: 0.2em;
    }



    .item-icon{
        font-size: 1.5em;
    }

    .btn-container{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        margin: 0 auto;
        margin-top: 0.5em;
    }

    .btn-icon{
        cursor: pointer;
        color: ${pr => pr.theme.colors.white};
        font-size: 1.5em;
        transition: 0.5s;
        &:hover{
            color: ${pr => pr.theme.colors.burgundy};
            transform: scale(1.1);
        }
    }



    

`