// Add your JavaScript code here

document.getElementById('signupLink').addEventListener('click', function() {
    document.getElementById('signupPopup').style.display = 'block';
});

function closePopup() {
    document.getElementById('signupPopup').style.display = 'none';
}
