![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/geoffkellync/job-tracker-app/react?color=06b724&label=React&logo=React) ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/geoffkellync/job-tracker-app/react-router-dom?color=red&logo=react-router&logoColor=orange) ![GitHub package.json version](https://img.shields.io/github/package-json/v/geoffkellync/job-tracker-app) ![GitHub issues](https://img.shields.io/github/issues/geoffkellync/job-tracker-app?logo=github) ![Website](https://img.shields.io/website?up_message=online&url=https%3A%2F%2Fgeoffkelly.dev) 
![GitHub package.json version](https://img.shields.io/github/package-json/v/geoffkellync/job-tracker-app?color=red&label=alpha-version) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/geoffkellync/job-tracker-app?color=g&logo=github) ![GitHub deployments](https://img.shields.io/github/deployments/geoffkellync/job-tracker-app/production?label=Deployment%20State) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/geoffkellync/job-tracker-app) ![GitHub last commit](https://img.shields.io/github/last-commit/geoffkellync/job-tracker-app?logo=github)




--------------------------------------------------------------
# job-tracker-app
App designed to track applied for jobs

## Technology Used in This Project
- [React](https://reactjs.org/)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [Redux](https://redux.js.org/)
- [Yup]
- [Axios]
- [redux-thunk]

##Features: 
- [x] Create a job application
- [x] View all jobs
- [x] View all job applications
- [x] View stats Page that shows you stats about applications
- [x] Track applications and their status
- [x] # Language: JavaScript, ReactJS, HTML, CSS.
- [x] # Path: src/App.js

## New Features and Bug Fixes (Change Log)


------------------------------------------------------------
### NEW FEATURES AND CHANGES 04/23/2022
- [x] Changed out buttons on Application Card on homepage to be Icons




------------------------------------------------------------
### NEW FEATURES AND CHANGES 04/22/2022
- [x] Switched app to use redux to manage state
- [x] Added redux-thunk to allow async actions
- [x] Added redux-logger to help with debugging



------------------------------------------------------------
### NEW FEATURES AND CHANGES 04/16/2022
- [x] Fixed bug where duplicate companies would show in companies list on stats page
- [x] Fixed View list button to change to grid view when clicked.
- [x] Changed App Theme and various other styling to match the new theme.



------------------------------------------------------------
### NEW FEATURES AND CHANGES 04/02/2022
- [x] Changed styling and layout for the details page for each application



------------------------------------------------------------

### NEW FEATURES AND CHANGES 04/02/2022
- [x] Added Icons to dynamically change based on the company applied to using GET https://logo.clearbit.com/:domain API call.
- [x] Moved Dummy application to data folder rather than have it in App.js. Also refactored data into an array of objects
    `applicationData = [{
        id: uuidv4(),
        companyName: '',
        companyPhone: '',
        companyWeb: '',
        jobTitle: '',
        dateApplied: '',
        salaryInfo: '',
        contactQues: '',
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        contactPosition: '',
        currentStatus: '',
        otherNotes: '',
    }]`
- [x] Added ability to toggle between default card view and a list view on home page. 
- [x] Added various other performance and styling changes and optimizations.




------------------------------------------------------------
###  NEW FEATURES AND CHANGES 04/01/2022
    - Added styling to application's listed on home page to have        background color reflect the current status of the application.
    - Added styling to the application's listed on the home page to have a border around the application.
    - Added an about Component page and route that will display information about the application.
    -Added Labeler git task

### BUGS FIXED 04/01/2022
    - Fixed bug where the application's status was not being updated when the application was updated.


-----------------------------------------------------------
# NEW FEATURES AND CHANGES 03/31/2022
    -Added Stats Page that shows the following stats:
        -Number of jobs applied for
        -Number of jobs that were accepted
        -Number of jobs that were rejected
        -Number of jobs that resulted in an interview
        -A list of companies that have been applied to

# Bugs Fixed 03/31/2022
    -Fixed bug where the user could not add a new job
    -Fixed bug where the user could not delete a job
    - Fixed bug where the user could not edit a job

-----------------------------------------------------------

