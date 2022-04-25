import React from 'react'
import styled from 'styled-components'

function Job({ jobData }) {
  return (
    <StyledJob>
        <h1 className = 'company-name'>{jobData.company_name}</h1>
    </StyledJob>
  )
}

export default Job



const StyledJob = styled.div`

  .company-name{
    color: black;
  }



`