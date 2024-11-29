document.addEventListener("scroll", () => {
    const azureContent = document.querySelector(".azure_content");
    const triggerHeight = window.innerHeight / 1.3; // Adjust trigger point

    // Check if the content's top is within the viewport
    if (azureContent.getBoundingClientRect().top < triggerHeight) {
        azureContent.classList.add("visible"); // Add animation class
    } else {
        azureContent.classList.remove("visible"); // Remove class when out of view
    }
});
