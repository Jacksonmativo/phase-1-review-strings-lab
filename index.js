// Define the current user
const currentUser = 'Grace Hopper';

// Create a welcome message using string interpolation
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Create an excited version of the welcome message
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Create a short greeting using the first initial of the current user
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
