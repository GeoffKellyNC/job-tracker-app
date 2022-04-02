/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

//! -- CSS Import -- //
import './styles/stats.css';



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
        const filteredName = companyNames.filter(name => companies.includes(name) === false);
        setCompanies(filteredName);
        
    },[data])

 

//! --End Effects-- //

  



    return (
        <div className = 'stats-container'>
            <h2>Number of Applications: {total}</h2>
            <h2>Number of Companies: {companies.length}</h2>
            <h2>Companies: {companies.join(', ')}</h2>
            <h2>Number of Interviews: {numOfInterviews}</h2>
            <button
                 onClick = {() => {history.push("/")}}
                className = 'back-btn-stats' >
                Go Back
            </button>
        </div>
    )
}

export default Stats;