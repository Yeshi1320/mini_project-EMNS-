function openMenu() {
    document.getElementById("mySideMenu").style.width = "250px";
}

function closeMenu() {
    document.getElementById("mySideMenu").style.width = "0";
}

function showRoleSelection() {
    document.getElementById('roleSelectionContainer').classList.add('active');
    document.getElementById('getStartedButton').style.display = 'none';
    hideAllForms();
}

function showLoginForm(role) {
    hideAllForms();
    const formId = `${role}LoginForm`;
    const form = document.getElementById(formId);
    if (form) form.classList.add('active');
}

function showRegistrationForm(role) {
    hideAllForms();
    const formId = `${role}RegistrationForm`;
    const form = document.getElementById(formId);
    if (form) form.classList.add('active');
}

function hideAllForms() {
    const forms = document.querySelectorAll('.login-form, .registration-form');
    forms.forEach(form => form.classList.remove('active'));
}

function backToRoleSelection() {
    hideAllForms();
    document.getElementById('roleSelectionContainer').classList.add('active');
}

function registerUser(role) {
    alert(`${capitalize(role)} registered successfully!`);
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initialize Google Sign-In
function initializeGoogleSignIn() {
    google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with actual client ID
        callback: handleGoogleSignIn
    });

    renderGoogleButtons(['staffGoogleLogin', 'studentGoogleLogin']);
}

function renderGoogleButtons(buttonIds) {
    buttonIds.forEach(buttonId => {
        google.accounts.id.renderButton(
            document.getElementById(buttonId),
            { theme: "outline", size: "large" }
        );
        styleGoogleButton(buttonId);
    });
}

function styleGoogleButton(buttonId) {
    const button = document.getElementById(buttonId).querySelector('button');
    if (button) {
        Object.assign(button.style, {
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#4285F4",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s"
        });
    }
}

function handleGoogleSignIn(response) {
    const userInfo = jwt_decode(response.credential);
    document.getElementById('userEmail').textContent = `Logged in as: ${userInfo.email}`;
    document.getElementById('userInfo').style.display = 'block';
}

window.onload = initializeGoogleSignIn;

function displayLoginSuccess(username) {
    document.body.innerHTML = '';

    // Menu Button
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-button';
    menuButton.onclick = openMenu;
    menuButton.innerHTML = '&#9776; Menu';
    document.body.appendChild(menuButton);

    // Side Menu
    const sideMenu = document.createElement('div');
    sideMenu.id = 'mySideMenu';
    sideMenu.className = 'side-menu';
    sideMenu.innerHTML = `
        <span class="close-button" onclick="closeMenu()">&times;</span>
        <a href="#">About Us</a>
        <a href="#">Support Us</a>
        <a href="#">Logout</a>
    `;
    document.body.appendChild(sideMenu);
}

function loginUser(role) {
    const username = ''; // Replace with actual username logic if needed
    displayLoginSuccess(username);
}
