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

// function showLoginForm(role) {
//     hideAllForms();
//     if (role === 'staff') {
//         document.getElementById('staffLoginForm').classList.add('active');
//     } else if (role === 'student') {
//         document.getElementById('studentLoginForm').classList.add('active');
//     }
// }

// function showRegistrationForm(role) {
//     hideAllForms();
//     if (role === 'staff') {
//         document.getElementById('staffRegistrationForm').classList.add('active');
//     } else if (role === 'student') {
//         document.getElementById('studentRegistrationForm').classList.add('active');
//     }
// }

// function hideAllForms() {
//     const forms = document.querySelectorAll('.login-form');
//     forms.forEach((form) => {
//         form.classList.remove('active');
//     });
// }
function showLoginForm(role) {
    hideAllForms();
    if (role === 'staff') {
        document.getElementById('staffLoginForm').classList.add('active');
    } else if (role === 'student') {
        document.getElementById('studentLoginForm').classList.add('active');
    } else if (role === 'admin') {
        document.getElementById('adminLoginForm').classList.add('active');
    } else if (role === 'councilor') {
        document.getElementById('councilorLoginForm').classList.add('active');
    } else if (role === 'club secretary') {
        document.getElementById('clubSecretaryLoginForm').classList.add('active');
    }
}

function showRegistrationForm(role) {
    hideAllForms();
    if (role === 'staff') {
        document.getElementById('staffRegistrationForm').classList.add('active');
    } else if (role === 'student') {
        document.getElementById('studentRegistrationForm').classList.add('active');
    } else if (role === 'admin') {
        document.getElementById('adminRegistrationForm').classList.add('active');
    } else if (role === 'councilor') {
        document.getElementById('councilorRegistrationForm').classList.add('active');
    } else if (role === 'club secretary') {
        document.getElementById('clubSecretaryRegistrationForm').classList.add('active');
    }
}

function hideAllForms() {
    const forms = document.querySelectorAll('.login-form, .registration-form');
    forms.forEach(form => form.classList.remove('active'));
}

function backToRoleSelection() {
    hideAllForms();
    document.getElementById('roleSelectionContainer').classList.add('active');
}

function registerAdmin() {
    alert('Admin registered successfully!');
}

function registerCouncilor() {
    alert('Councilor registered successfully!');
}
function registerClubSecretary() {
    alert('ClubScretary registered successfully!');
}
function registerStaff() {
    alert('Staff registered successfully!');
}
function registerStudent() {
    alert('Student registered successfully!');
}

// Initialize Google Sign-In
function initializeGoogleSignIn() {
    google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',  // Replace with your Google OAuth Client ID
        callback: handleGoogleSignIn
    });

    // Render Google Sign-In buttons
    google.accounts.id.renderButton(
        document.getElementById("staffGoogleLogin"),
        { theme: "outline", size: "large" }
    );
    google.accounts.id.renderButton(
        document.getElementById("studentGoogleLogin"),
        { theme: "outline", size: "large" }
    );

    styleGoogleButton('staffGoogleLogin');
    styleGoogleButton('studentGoogleLogin');
}

function styleGoogleButton(buttonId) {
    const buttonContainer = document.getElementById(buttonId);
    const button = buttonContainer.querySelector('button');
    if (button) {
        button.style.width = "100%";
        button.style.padding = "10px";
        button.style.fontSize = "16px";
        button.style.backgroundColor = "#4285F4";
        button.style.color = "white";
        button.style.border = "none";
        button.style.borderRadius = "5px";
        button.style.cursor = "pointer";
        button.style.transition = "background-color 0.3s";
    }
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

function displayLoginSuccess(username) {
    document.body.innerHTML = '';
// Menu Button
const menuButton = document.createElement('button');
menuButton.className = 'menu-button';
menuButton.onclick = openMenu;
menuButton.innerHTML = '&#9776; Menu';
document.body.appendChild(menuButton);

// Side menu (recreate for the welcome interface)
const sideMenu = document.createElement('div');
sideMenu.id = 'mySideMenu';
sideMenu.className = 'side-menu';
sideMenu.innerHTML = `
    <span class="close-button" onclick="closeMenu()">&times;</span>
    <a href="#">about us</a>
    <a href="#">support us</a>
    <a href="#">logout</a>
`;
}

function loginUser(role) {
    displayLoginSuccess(''); // Replace 'Gaysar' with the actual username as needed
}
