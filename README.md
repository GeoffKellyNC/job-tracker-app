# job-tracker-app
App designed to track applied for jobs

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
- [x] Added ability to toggle between default card view and a list view.




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

