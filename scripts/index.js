//const applicantsList = document.querySelector('.applicants');
const jobList = document.querySelector('.jobs');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
    if (user) {
        //toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        //toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}

//setup jobs
const setupJobs = (data) => {

    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const jobs = doc.data();
            const li = `
        <li>
            <div class="collapsible-header grey lighten-4">${jobs.jobTitle}</div>
            <div class="collapsible-body white">${jobs.jobDesc}</div>
        </li>

        `;
            html += li
        });

        jobList.innerHTML = html;
    } else {
        jobList.innerHTML = '<h5 class="center-align">Add Some Positions</h5>'
    }

}

// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});