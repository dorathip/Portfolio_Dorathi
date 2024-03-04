// Add an event listener to execute the code when the DOM content is loaded
window.addEventListener("DOMContentLoaded", () => {
  
  // Get the element with the ID "animation"
  const animationElement = document.getElementById("animation");
  
  // Get the element with the ID "pdf-viewer"
  const pdfViewer = document.getElementById("pdf-viewer");
  
  // Specify the URL of the PDF file to be displayed
  const pdfUrl = "pdf/DORATHI_PARANJOTHI_RESUME.pdf";

  // Add the "slide-in" class to the animation element
  // This class triggers the animation
  animationElement.classList.add("slide-in");

  // Create a new 'embed' element
  const embedElement = document.createElement('embed');
  
  // Set the source URL of the embed element to the PDF file
  embedElement.src = pdfUrl;
  
  // Set the type of the embed element as a PDF
  embedElement.type = "application/pdf";
  
  // Set the width and height of the embed element to 100% of its container
  embedElement.width = "100%";
  embedElement.height = "100%";

  // Append the embed element to the PDF viewer container
  pdfViewer.appendChild(embedElement);

});

  