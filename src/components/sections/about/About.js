import React from 'react'
import { useHistory } from 'react-router-dom'


const About = () => {

    const history = useHistory();

    
    return(
        <div className = 'about-container'>
            <h2>About this Application</h2>
            <div className = 'general-app-info'>
                <p>This application is designed to help you keep track of your job applications. One the home page your are shown all your applications that you have entered information for. There you will see some general information that you provided about the position you applied for. You are able to view more information by clicking the info button or the company name, delete the application (this cannot be undone), or update/edit the application. Alone with a button to view some stats about your job hunting journey.  </p>
            </div>
        </div>
    )}

export default About;