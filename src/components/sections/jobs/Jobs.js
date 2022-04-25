import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../redux/action-creators'
import styled from 'styled-components'

import Job from './components/Job'
import SearchForm from './components/SearchForm'

function Jobs(props) {

    const { jobData } = props
    console.log(jobData)

    return (
        <StyledJobs>
        <SearchForm />
            {
                    jobData.map(job => {
                    return(
                      <Job key = {job.normalized_company_name} jobData = {job}/>
                    )
                })
            }
        </StyledJobs>
    )
}

const mapStateToProps = state => {
    return {
        jobData: state.returnedJobs,
    }
}

export default connect(mapStateToProps, actions)(Jobs)


const StyledJobs = styled.div`

    .loading-text-1 {
        color: black;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        margin-top: 50px;
    }
`