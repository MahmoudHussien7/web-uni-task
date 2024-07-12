document.getElementById('loginBtn').addEventListener('click', function () {
    document.getElementById('loginModal').style.display = 'block';
});


document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('loginModal').style.display = 'none';
});


document.getElementById('loginSubmitBtn').addEventListener('click', function () {
    const name = document.getElementById('loginName').value;
    const email = document.getElementById('loginEmail').value;

    if (name && email) {
        localStorage.setItem('loginName', name);
        localStorage.setItem('loginEmail', email);
        document.getElementById('loginModal').style.display = 'none';
    } else {
        alert('Please fill in both fields.');
    }
});



document.getElementById('signupBtn').addEventListener('click', function () {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;

    if (name && email) {
        localStorage.setItem('signupName', name);
        localStorage.setItem('signupEmail', email);
    } else {
        alert('Please fill in both fields.');
    }
});




