import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../../../redux/action-creators'

function SearchForm(props) {

    const {
        values,
        applications,
        handleSearchChange,
        fetchJobDatabase
    } = props

    const history = useHistory()


    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        handleSearchChange({name: name, value: value})
        
    }

    const onSubmit = (e) => {
        e.preventDefault();
        fetchJobDatabase(values.search)
        history.push('/jobs')
    }





    return (
    <div>
        <form onSubmit={onSubmit}>
            <label>Job Search</label>
            <input 
                type="text" 
                placeholder="Enter Job" 
                name="search"
                onChange={onChange}
                value = {values.search}
                />
            <button type="submit">Search</button>
        </form>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        values: state.jobSearchForm
    }
}

export default connect(mapStateToProps, actions)(SearchForm)