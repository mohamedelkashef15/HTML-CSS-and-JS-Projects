/*
  Tasks
    - onClick to header display accordion content 
    - show/hide +/- button 
*/

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const content = item.querySelector(".accordion-content");
  const header = item.querySelector(".accordion-header");
  const toggleButton = item.querySelector(".toggle-icon");

  console.log(header);
  header.addEventListener("click", () => {
    // Toggle content visibility
    content.classList.toggle("active");

    // Update button text based on content visibility
    if (content.classList.contains("active")) {
      toggleButton.textContent = "-";
    } else {
      toggleButton.textContent = "+";
    }
  });
});
