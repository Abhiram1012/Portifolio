/*let project = document.getElementsByClassName("project");
let slideIndex = 1;

showProject(slideIndex);

function showProject(num) {
  // Go to first project, after clicking forward from last button
  if (num > project.length) {
    slideIndex = 1;
  }
  // Go to last project, when clicking backwards from first project
  if (num < 1) {
    slideIndex = project.length;
  }
  // For loop to hide all the projects
  for (let i = 0; i < project.length; i++) {
    project[i].style.display = "none";
  }
  project[slideIndex - 1].style.display = "flex";
}

function navigateProject(num) {
  // Change the slideIndex based on back or forward arrow
  showProject((slideIndex += num));
}
*/
// Get all elements with the class "certificate"
let certificate = document.getElementsByClassName("certificate");
// Initialize the slide index to show the first certificate
let slideIndex = 1;

// Display the initial certificate
showCertificate(slideIndex);

// Function to display a specific certificate based on the slide index
function showCertificate(num) {
  // Reset to first certificate if navigating forward from the last one
  if (num > certificate.length) {
    slideIndex = 1;
  }
  // Go to last certificate if navigating backward from the first one
  if (num < 1) {
    slideIndex = certificate.length;
  }
  // Hide all certificates
  for (let i = 0; i < certificate.length; i++) {
    certificate[i].style.display = "none";
  }
  // Show the selected certificate
  certificate[slideIndex - 1].style.display = "flex";
}

// Function to navigate to the next or previous certificate
function navigateCertificate(num) {
  // Update slideIndex and display the corresponding certificate
  showCertificate((slideIndex += num));
}