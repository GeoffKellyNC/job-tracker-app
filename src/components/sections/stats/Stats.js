/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';





const Stats = ({ applicationData, totalApps }) => {
 //! State
    const [data, setData] = useState(applicationData);
    const [total, setTotal] = useState(totalApps);
    const [companies, setCompanies] = useState([]);
    const [numOfInterviews, setInterviews] = useState(0);

//! --End State -- //


//! -- History -- //
    const history = useHistory();
//! --End History -- //

//! -- Effects-- //


    useEffect(() => {
        const companyNames = data.map(app => app.companyName);
        const uniqueCompanies = [...new Set(companyNames)];
        setCompanies(uniqueCompanies);
    },[data]);


 

//! --End Effects-- //


  



    return (
        <StyledStats className = 'stats-container'>
            <h2>Number of Applications: {total}</h2>
            <h2>Number of Companies: {companies.length}</h2>
            <h2>Companies: {companies.join(', ')}</h2>
            <h2>Number of Interviews: {numOfInterviews}</h2>
            <button
                 onClick = {() => {history.push("/")}}
                className = 'back-btn-stats' >
                Go Back
            </button>
        </StyledStats>
    )
}

export default Stats;


const StyledStats = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding: 1em;
        width: 100%;
        height: 100vh;
        box-shadow: 0px 0px 10px black;


    .stats-container h2{
        font-family: 'Poppins', sans-serif;
        color: black;
        margin: 0;
        padding: 1em;
        font-size: 1.5em;
    }

    .back-btn-stats{
        font-family: 'Poppins', sans-serif;
        padding: 1em;
        border: none;
        border-radius: 5px;
        background-color: #FB8500;
        color: white;
        box-shadow: 0px 0px 5px white;
        margin-top: 1em;
        width: 10em;
        background-image: linear-gradient(to right, #FF512F 0%, #DD2476  51%, #FF512F  100%);
        transition: 0.5s;
        background-size: 200% auto;
    }

    .back-btn-stats:hover{
        background-position: right center;
        color: #fff;
        text-decoration: none;
        transform: scale(1.1);
    }

`