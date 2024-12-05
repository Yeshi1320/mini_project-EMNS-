function hideAllForms() {
    const forms = document.querySelectorAll('.login-form, .role-selection-container');
    forms.forEach((form) => {
        form.style.display = 'none'; // Hide all forms
    });
    document.getElementById('getStartedButton').style.display = 'none'; // Hide 'Get Started' button
}

function showRoleSelection() {
    hideAllForms(); // Hide everything
    document.getElementById('roleSelectionContainer').style.display = 'flex'; // Show role selection
}

function showLoginForm(role) {
    hideAllForms(); // Hide all forms
    const loginForm = document.getElementById(role + 'LoginForm'); // Construct ID based on role
    if (loginForm) {
        loginForm.style.display = 'block'; // Show the corresponding login form
    }
}

function showRegistrationForm(role) {
    hideAllForms(); // Hide all forms
    const registrationForm = document.getElementById(role + 'RegistrationForm'); // Construct ID based on role
    if (registrationForm) {
        registrationForm.style.display = 'block'; // Show the corresponding registration form
    }
}

function backToRoleSelection() {
    hideAllForms(); // Hide all forms
    document.getElementById('roleSelectionContainer').style.display = 'flex'; // Show role selection
}

function registerAdmin() {
    alert('Admin registered successfully!');
    showLoginForm('admin'); // Redirect to the Admin login form
}

function registerCouncilor() {
    alert('Councilor registered successfully!');
    showLoginForm('councilor'); // Redirect to the Councilor login form
}

function registerClubSecretary() {
    alert('Club Secretary registered successfully!');
    showLoginForm('clubSecretary'); // Redirect to the Club Secretary login form
}

function registerStaff() {
    alert('Staff registered successfully!');
    showLoginForm('staff'); // Redirect to the Staff login form
}

function registerStudent() {
    alert('Student registered successfully!');
    showLoginForm('student'); // Redirect to the Student login form
}

// Initialize Google Sign-In
function initializeGoogleSignIn() {
    google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google OAuth Client ID
        callback: handleGoogleSignIn
    });

    // Render Google Sign-In buttons for each role
    google.accounts.id.renderButton(
        document.getElementById("staffGoogleLogin"),
        { theme: "outline", size: "large" }
    );
    google.accounts.id.renderButton(
        document.getElementById("studentGoogleLogin"),
        { theme: "outline", size: "large" }
    );
    google.accounts.id.renderButton(
        document.getElementById("adminGoogleLogin"),
        { theme: "outline", size: "large" }
    );
    google.accounts.id.renderButton(
        document.getElementById("councilorGoogleLogin"),
        { theme: "outline", size: "large" }
    );
    google.accounts.id.renderButton(
        document.getElementById("clubSecretaryGoogleLogin"),
        { theme: "outline", size: "large" }
    );
}

// Handle Google sign-in response
function handleGoogleSignIn(response) {
    const userInfo = jwt_decode(response.credential);
    document.getElementById('userEmail').textContent = 'Logged in as: ${userInfo.email}';
    document.getElementById('userInfo').style.display = 'block';
}

// Load Google Sign-In when the window loads
window.onload = function () {
    initializeGoogleSignIn();
}

function loginUser(role) {
    displayLoginSuccess(); // Call this function to handle successful login
}

function displayLoginSuccess() {
    document.body.innerHTML = ''; // Clear the body
    // Menu Button
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-button';
    menuButton.onclick = openMenu;
    menuButton.innerHTML = '☰ Menu';
    document.body.appendChild(menuButton);

    // Side menu (recreate for the welcome interface)
    const sideMenu = document.createElement('div');
    sideMenu.id = 'mySideMenu';
    sideMenu.className = 'side-menu';
    sideMenu.innerHTML = `
        <span class="close-button" onclick="closeMenu()">×</span>
        <a href="#">about us</a>
        <a href="#">support us</a>
        <a href="#">logout</a>
    `;
    document.body.appendChild(sideMenu);
}

function openMenu() {
    document.getElementById("mySideMenu").style.width = "250px";
}

function closeMenu() {
    document.getElementById("mySideMenu").style.width = "0";
}