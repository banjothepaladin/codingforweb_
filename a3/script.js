document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const images = document.querySelectorAll(".image");
    const button = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    const dot = document.getElementById("dot");
    // const globeContainer = document.getElementById("globeContainer"); // Select the new div element
    let backgroundPosition = "center center"; // Store the original background position

    function redirecting(){
        window.location.href = "./trial0.html";
    }
    button.addEventListener("click", redirecting); // Add an event listener to the button
    button2.addEventListener("click", redirecting);


    function aboutlink(){
      window.location.href = "./trial0.html";
  }
  dot.addEventListener("click", aboutlink); // Add an event listener to the button



    images.forEach((image) => {
        image.addEventListener("click", () => {
            // Toggle zoom effect on the container
            container.classList.toggle("enlarged");

            // Toggle image enlargement
            image.classList.toggle("enlarged");

            // Change the background image on click
            if (container.classList.contains("enlarged")) {
                container.style.backgroundImage = "url('./zooms.gif')";
                container.style.backgroundPosition = "center center"; // Reset background position
                // Set the image's position when enlarged
                image.style.top = "32vh";
                image.style.left = "23vw";
            } else {
                container.style.backgroundImage = "url('./bgbg.gif')";
                container.style.backgroundPosition = backgroundPosition; // Restore original background position
                // Set the image's original position
                image.style.top = "";
                image.style.left = "";
            }

            // Adjust the layout of other images
            if (!image.classList.contains("enlarged")) {
                images.forEach((img) => {
                    if (img !== image) {
                        img.style.transform = "scale(1)";
                    }
                });
            }
        });
    });
});


