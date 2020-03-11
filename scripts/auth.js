//listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        //get data
        db.collection('jobs').onSnapshot(snapshot => {
            setupJobs(snapshot.docs);
            setupUI(user);
        });
    } else {
        setupUI();
        setupJobs([]);  
    }
});

//create new positions
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('jobs').add({
        jobTitle: createForm['jobTitle'].value,
        jobDesc: createForm['jobDesc'].value
    }).then(() => {
        //close modal
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createForm.reset();
    })
})

//logout method
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut()
});

//login method
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //getUserInfo
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        //close the login modal and reset the form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })
});