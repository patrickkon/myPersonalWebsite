var props = { scrollY: 0 };

// utility functions
toggleScrollVisibility = (element, y_axisVisibleThreshold) => {
  /*     const element = document.getElementById(elementID); */

  if (props.scrollY >= y_axisVisibleThreshold) {
    // changing section2 visibility
    element.style.visibility = "visible";
    element.classList.remove("animated");
    element.classList.remove("fadeOutDown");
    element.classList.remove("duration-2s");

    element.classList.add("animated");
    element.classList.add("fadeInUp");
    element.classList.add("duration-2s");
  } else {
    element.classList.remove("animated");
    element.classList.remove("fadeInUp");
    element.classList.remove("duration-2s");

    element.classList.add("animated");
    element.classList.add("fadeOutDown");
    element.classList.add("duration-2s");

    setTimeout(() => {
      if (props.scrollY < y_axisVisibleThreshold)
        element.style.visibility = "hidden";
    }, 2000);
  }
};

function myScrollFunc() {
  props.scrollY = window.scrollY;

  const section2 = document.getElementById("section2");
  for (let index = 0; index < section2.children.length; index++) {
    this.toggleScrollVisibility(section2.children[index], 300);
  }
  const section3 = document.getElementById("section3");
  for (let index = 0; index < section3.children.length; index++) {
    this.toggleScrollVisibility(section3.children[index], 900);
  }

  const imageExtension = document.querySelector(".image-extension");
  for (let index = 0; index < imageExtension.children.length; index++) {
    this.toggleScrollVisibility(imageExtension.children[index], 1300);
  }
}

window.addEventListener("scroll", myScrollFunc);
