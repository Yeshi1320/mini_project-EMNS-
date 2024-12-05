// function showRoleSelection() {
//     document.getElementById('roleSelectionContainer').classList.add('active');
//     document.getElementById('getStartedButton').style.display = 'none';
//     hideAllForms();  // Hide any other forms if visible
// }

// function showLoginForm(role) {
//     hideAllForms(); // Hide previous forms
//     if (role === 'staff') {
//         document.getElementById('staffLoginForm').classList.add('active');
//     } else if (role === 'student') {
//         document.getElementById('studentLoginForm').classList.add('active');
//     }
// }

// function showRegistrationForm(role) {
//     hideAllForms(); // Hide previous forms
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

// function backToRoleSelection() {
//     hideAllForms(); // Hide previous forms
//     document.getElementById('roleSelectionContainer').classList.add('active');
// }

// function loginUser(role) {
//     alert(role + ' logged in successfully!');
// }

// function registerStudent() {
//     alert('Student registered successfully!');
// }

// function registerStaff() {
//     alert('Staff registered successfully!');
// }

// // Initialize Google Sign-In
// function initializeGoogleSignIn() {
//     google.accounts.id.initialize({
//         client_id: 'YOUR_GOOGLE_CLIENT_ID',  // Replace with your Google OAuth Client ID
//         callback: handleGoogleSignIn
//     });

//     // Render Google Sign-In buttons
//     google.accounts.id.renderButton(
//         document.getElementById("staffGoogleLogin"),
//         { theme: "outline", size: "large" }
//     );
//     google.accounts.id.renderButton(
//         document.getElementById("studentGoogleLogin"),
//         { theme: "outline", size: "large" }
//     );

//     // Apply styles to the Google buttons after rendering
//     styleGoogleButton('staffGoogleLogin');
//     styleGoogleButton('studentGoogleLogin');
// }

// // Function to apply consistent styles to Google buttons
// function styleGoogleButton(buttonId) {
//     const buttonContainer = document.getElementById(buttonId);
//     const button = buttonContainer.querySelector('button');  // Get the button element
//     if (button) {
//         button.style.width = "100%";  // Make the button take full width
//         button.style.padding = "10px";  // Add padding
//         button.style.fontSize = "16px";  // Set font size
//         button.style.backgroundColor = "#4285F4";  // Set background color
//         button.style.color = "white";  // Set text color
//         button.style.border = "none";  // Remove border
//         button.style.borderRadius = "5px";  // Rounded corners
//         button.style.cursor = "pointer";  // Pointer cursor on hover
//         button.style.transition = "background-color 0.3s";  // Transition for hover effect
//     }
// }

// // Handle the Google sign-in response
// function handleGoogleSignIn(response) {
//     const userInfo = jwt_decode(response.credential);  // Decode JWT to get user info
//     document.getElementById('userEmail').textContent = `Logged in as: ${userInfo.email}`;
//     document.getElementById('userInfo').style.display = 'block';  // Show user info section
// }

// // Load Google Sign-In when the window loads
// window.onload = function () {
//     initializeGoogleSignIn();
// }


// // Function to handle login (staff/student)
// function loginUser(role) {
//     alert(role + ' logged in successfully!');
    
//     // Hide the login page and show the welcome page with the menu bar
//     document.getElementById('loginPage').style.display = 'none';
//     document.getElementById('welcomePage').style.display = 'block';
// }

// // Function to display the login success screen
// function displayLoginSuccess(username) {
//     // Clear the existing content
//     document.body.innerHTML = '';

//     // Optional: Remove background image if needed
//     // document.body.style.backgroundImage = ''; // Uncomment if you had a previous background image to clear

//     // Create a container for the new interface
//     const container = document.createElement('div');
//     container.style.textAlign = 'center';
//     container.style.padding = '20px';
//     container.style.fontFamily = 'Arial, sans-serif'; // Change as needed
//     container.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; // Semi-transparent white background for contrast
//     container.style.borderRadius = '10px'; // Rounded corners
//     container.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)'; // Subtle shadow
//     container.style.width = '40%'; // Set a larger width (e.g., 90%)
//     container.style.height= '50%'; 
//     container.style.maxWidth = '1200px'; // Optional: Increase max-width for larger screens
//     container.style.margin = '50px auto'; // Center the container

// // Append the container to the body (example usage)
// document.body.appendChild(container);

//     // Add a welcome message
//     const welcomeMessage = document.createElement('h1');
//     welcomeMessage.textContent = `Welcome ${username}!`;
//     welcomeMessage.style.color = 'black';
//     welcomeMessage.style.fontWeight = 'bold';
//     container.appendChild(welcomeMessage);

//     // Add the image (penguin)
//     const image = document.createElement('img');
//     image.src = '/picture/Event.jpg'; // Replace with your image path
//     image.alt = 'Event';
//     image.style.width = '200px'; // Set width as needed
//     image.style.height = '200px'; // Set height to match width, or adjust as needed
//     image.style.objectFit = 'cover'; // Ensure the image covers the rectangular area
//     image.style.margin = '50px 20px'; // Margin above and below the image
//     container.appendChild(image);

//     // Add a success message
//     const successMessage = document.createElement('p');
//     successMessage.textContent = 'Login successful!';
//     successMessage.style.fontSize = '30px'; // Adjust font size
//     successMessage.style.color = 'black';
//     successMessage.style.fontWeight = 'bold';
//     successMessage.style.padding= '2px';
//     container.appendChild(successMessage);

//     // Append the container to the body
//     document.body.appendChild(container);
// }

// // Modify the loginUser function to display the success screen
// function loginUser(role) {
//     // Replace 'Gaysar' with the actual username from your login logic
//     displayLoginSuccess('Gaysar');

// }