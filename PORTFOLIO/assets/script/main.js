//Get all elements with class name "content-wrapper"
const contentWrapper = document.getElementsByClassName('content-wrapper');

//Get the first element with class name "header-wrapper"
const headerWrapper = document.getElementsByClassName("header-wrapper")[0];

//Get the nav from the headerWrapper element
const headerNav = headerWrapper.getElementsByTagName("nav")[0];

//Get the element with id "my-skills"
const mySkills = document.getElementById("my-skills");

//Get the element with id "services"
const myServices = document.getElementById("services");

//Get the element with id "portfolio"
const portfolio = document.getElementById("portfolio");

//Get the element with id "portfolio-samples-container"
const portfolioSamplesContainer = document.getElementById("portfolio-samples-container");

//Get all samples from portfolio section
const portfolioSamples = portfolioSamplesContainer.getElementsByClassName("portfolio-sample");

//Get the navigation of the portfolio section
const portfolioNavigation = document.getElementById("portfolio-navigation");

//Get the <a> elements from the portfolio navigation
const portfolioHyperLinks = portfolioNavigation.getElementsByTagName("a");

//Get the element with id "portfolio-popup-container"
const portfolioPopupContainer = document.getElementById("portfolio-popup-container");

//Get the element with id "testimonials"
const testimonials = document.getElementById("testimonials");

//Get all clients from testimonials section
const testimonialsClients = testimonials.getElementsByClassName("client");

//Variable to check whether the headerNav is opened or not in small screens
let headerNavOpened = false;

//Function to open the navigation element in small screens
function OpenHeaderNav() {

  //Set headerNav styles
  headerNav.style.visibility = "visible";
  headerNav.style.left = "0";

  headerNavOpened = true;

  document.body.style.overflowY = 'hidden';

}

//Function to open the navigation element in small screens
function CloseHeaderNav() {

  //Set headerNav styles
  headerNav.style.left = "-100%";

  headerNavOpened = false;

  document.body.style.overflowY = 'auto';

}

//Get hyperlinks from headerNav element and set click event to close the nav
for (let i = 0; i < headerNav.getElementsByTagName("a").length; i++) {

  headerNav.getElementsByTagName("a")[i].onclick = () => {

    if (headerNavOpened) {

      CloseHeaderNav();

    }

  };

}

//Create a new IntersectionObserver to trigger certain actions when an element becomes visible in the viewport
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { //The element is visible

      // Get the target element
      const target = entry.target;

      //If the target has a child with class name "description-image-container", get that child
      const portraitContainer = target.getElementsByClassName("description-image-container")[0];

      if (portraitContainer) { //If portraitContainer exists

        //Get the heading, paragraph and the buttons elements from the target
        const descriptionHeading = target.getElementsByTagName("h2")[0];
        const descriptionParagraph = target.getElementsByTagName("p")[0];
        const descriptionButton = target.getElementsByTagName("button")[0];

        //Create an array of the elements to be animated
        const arrayOfElements = [descriptionHeading, descriptionParagraph,
          descriptionButton, portraitContainer];

        // Animate each element in the array with a delay between 200ms and 500ms
        let index = 0;
        for (let i = 200; i <= 500; i += 100) {

          const finalIndex = index;

          setTimeout(() => {

            arrayOfElements[finalIndex].classList.remove("hide-translateX");

          }, i);

          index++;

        }
      }

      //If the target has a child with class name "content-image", get that child
      const contentImage = target.getElementsByClassName("content-image")[0];

      if (contentImage) { //If contentImage element exists

        //Get the contextText element
        const contentText = target.getElementsByClassName("content-text")[0];

        //Delay the execution of the following code by 500 milliseconds
        setTimeout(() => {

          //Remove the 'hide-translateY' class from contentImage and contentText
          contentImage.classList.remove("hide-translateY");
          contentText.classList.remove("hide-translateY");

        }, 500);

      }

      //If the taget has an id "my-skills"
      if (target.hasAttribute('id') && target.id == "my-skills") {

        //Get content text and content skills children
        const contentText = target.getElementsByClassName("content-text")[0];
        const contentSkills = target.getElementsByClassName("content-skills")[0];

        //Get children with class name "skill"
        const skills = target.getElementsByClassName("skill");

        //Delay the execution of the following code by 500 milliseconds
        setTimeout(() => {

          //Remove the 'hide-translateY' class from contentSkills and contentText
          contentText.classList.remove("hide-translateY");
          contentSkills.classList.remove("hide-translateY");

          //Delay the execution of the following code by 200 milliseconds
          setTimeout(() => {

            // Animate each skill element with a delay
            let interval = 200;

            for (let i = 0; i < skills.length; i++) {

              const finalIndex = i;

              setTimeout(() => {

                //Remove the 'hide-translateX' class 
                skills[finalIndex].classList.remove("hide-translateX");

              }, interval);

              interval += 100;

            }
          }, 200);

        }, 500);

      }

      //If the taget has an id "services"
      if (target.hasAttribute('id') && target.id == "services") {

        //Get sections with class name "vertical-center" and "services-grid"
        const verticalCenter = target.getElementsByClassName("vertical-center")[0];
        const servicesGrid = target.getElementsByClassName("services-grid")[0];

        //Get children with class name "services-grid-service"
        const servicesGridService = target.getElementsByClassName("services-grid-service");

        //Delay the execution of the following code by 500 milliseconds
        setTimeout(() => {

          //Remove the 'hide-translateY' class from verticalCenter and servicesGrid
          verticalCenter.classList.remove("hide-translateY");
          servicesGrid.classList.remove("hide-translateY");

          //Delay the execution of the following code by 200 milliseconds
          setTimeout(() => {

            // Animate each servicesGridService element with a delay
            let interval = 200;
            for (let i = 0; i < servicesGridService.length; i++) {

              const finalIndex = i;

              setTimeout(() => {

                //Remove the 'hide-translateY' class 
                servicesGridService[finalIndex].classList.remove("hide-translateY");

              }, interval);

              interval += 100;

            }
          }, 200);

        }, 500);

      }

      //If the taget has an id "portfolio"
      if (target.hasAttribute('id') && target.id == "portfolio") {

        //Delay the execution of the following code by 500 milliseconds
        setTimeout(() => {

          //Remove the 'hide-translateY' class from portfolioNavigation and portfolioSamplesContainer
          portfolioNavigation.classList.remove("hide-translateY");
          portfolioSamplesContainer.classList.remove("hide-translateY");

          //After the window is loaded, show all samples in the grid
          var interval = 600;

          for (let i = 0; i < arrayOfSamples.length; i++) {

            //Getting sample by index from the array
            const sample = arrayOfSamples[i];

            //Adding the sample to the grid
            portfolioSamplesContainer.appendChild(sample);

            //Showing the sample after a delay
            setTimeout(() => {

              sample.classList.add('show');

            }, interval);

            interval += 100;

          }
        }, 500);

      }

      //If the taget has an id "testimonials"
      if (target.hasAttribute('id') && target.id == "testimonials") {

        //Delay the execution of the following code by 500 milliseconds
        setTimeout(() => {

          // Animate each skill element with a delay
          let interval = 200;

          for (let i = 0; i < testimonialsClients.length; i++) {
            const finalIndex = i;

            setTimeout(() => {

              //Remove the 'hide-translateX' class 
              testimonialsClients[finalIndex].classList.remove("hide-translateY");

            }, interval);

            interval += 100;

          }

        }, 500);

      }

      observer.unobserve(target); // stop observing the element
    }
  });
}, { once: true });

// When the window is loaded
window.onload = function () {

  // Observe each content wrapper element
  for (let i = 0; i < contentWrapper.length; i++) {

    observer.observe(contentWrapper[i]);

  }

  //Observe header wrapper element
  observer.observe(headerWrapper);

  //Observe my skills element
  observer.observe(mySkills);

  //Observe services element
  observer.observe(myServices);

  //Observe portfolio element
  observer.observe(portfolio);

  //Observe testimonials element
  observer.observe(testimonials);
};

//Declaring a temporary variable
var imageTmp;

//Declaring an array of samples
const arrayOfSamples = [];

for (let i = 0; i < portfolioSamples.length; i++) {

  const sample = portfolioSamples[i];

  //Setting click event to each sample
  sample.onclick = () => {

    //Getting the image from the sample
    const img = sample.getElementsByTagName("img")[0];

    //Calling a function to show a large image
    EnlargeImage(img);

    //Show a semi-transparent layer only if the screen's width is greater than or equals to 600
    if (window.innerWidth < 576) return;

    portfolioPopupContainer.classList.remove("hide");

  };
  arrayOfSamples.push(sample);
}

//Function to create a larger image and display it on screen
function EnlargeImage(img) {

  //Do not create the image if the screen's width is not larger than or equals to 600
  if (window.innerWidth < 576) return;

  // Create a new image element for the enlarged image
  const enlargedImg = document.createElement('img');

  //Assign the value of enlargedImg to imageTmp variable
  imageTmp = enlargedImg;

  // Set the source of the enlarged image to be the same as the clicked image
  enlargedImg.setAttribute('src', img.getAttribute('src'));

  // Add a class to the enlarged image for styling
  enlargedImg.classList.add('enlarged-img');

  // Append the enlarged image to the body
  document.body.appendChild(enlargedImg);

  // Wait for the next frame before modifying styles for animation purposes
  requestAnimationFrame(() => {

    // Set the styles for the enlarged image
    enlargedImg.style.height = window.innerHeight / 1.3 + "px";
    enlargedImg.style.opacity = 1;
    enlargedImg.style.transform = `translate(-50%, -50%) scale(1)`;

  });

  // Add a click event listener to the enlarged image to close it
  enlargedImg.addEventListener('click', () => {

    HideEnlargedImg(enlargedImg);

  });


}

//Function to hide the enlarged image
function HideEnlargedImg(enlargedImg) {

  // Set the styles for the enlarged image to animate the fade-out effect
  enlargedImg.style.opacity = 0;
  enlargedImg.style.transition = 'opacity 0.3s ease';

  //Hide the semi-transparent layer
  portfolioPopupContainer.classList.add("hide");

  // Wait for the transition to complete before removing the image
  setTimeout(() => {

    // Remove the enlarged image from the DOM
    enlargedImg.remove();

  }, 300);
}

//Set click event to the semi-transparent layer to hide the enlarged image and the layer
portfolioPopupContainer.onclick = () => {

  HideEnlargedImg(imageTmp);

  portfolioPopupContainer.classList.add("hide");

};

/* When clicking on a hyperlink, we get it's innerHTML and then loop through all samples to check
   whether the sample's classList contains that hyperlink's innerHTML to show the sample in the grid,
   If the innerHTML is 'All' then we show every sample */
for (let i = 0; i < portfolioHyperLinks.length; i++) {

  const hyperLink = portfolioHyperLinks[i];

  ShowSamples(hyperLink)

}

//Function to set click event on hyperlink, and show samples according to the clicked hyperlink
function ShowSamples(element) {

  //Getting the innerHTML from the hyperlink
  const text = element.innerHTML;

  //Setting click event to the hyperlink
  element.onclick = () => {

    var interval = 200;

    //Clearing the grid before re-filling it according to the clicked hyperlink
    portfolioSamplesContainer.innerHTML = "";

    for (let i = 0; i < arrayOfSamples.length; i++) {

      //Getting sample by index from the array
      const sample = arrayOfSamples[i];

      //Removing the class "show" from the sample to hide it temporarily
      sample.classList.remove('show');

      //Show all samples if the text is "All"
      if (text.toLowerCase().trim() == "all") {

        //Adding the sample to the grid
        portfolioSamplesContainer.appendChild(sample);

        //Showing to sample after a delay
        setTimeout(() => {

          sample.classList.add('show');

        }, interval);

        interval += 100;

      }
      else {

        //Show only samples that their classLists contains the clicked hyperlink's innerHTML
        if (sample.classList.contains(text.toLowerCase().trim().replaceAll(" ", "-"))) {

          //Adding the sample to the grid
          portfolioSamplesContainer.appendChild(sample);

          //Showing to sample after a delay
          setTimeout(() => {

            sample.classList.add('show');

          }, interval);

          interval += 100;

        }
      }

    }
  };
}