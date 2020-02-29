/* const { gsap } = require("gsap"); */

function revolvePart(part, circle, image, numeralDiv) {
  var v1 = new gsap.timeline();

  v1.add(part);
  // remove stroke all other circle (by class first)
  v1.to(
    ".circle-2",
    {
      strokeDashoffset: 130,
      duration: 2
    },
    part
  );
  // opacity: 0 for all (by class first)
  v1.to(
    ".swiper-slider-image",
    {
      opacity: 0,
      duration: 2
    },
    part
  );
  // reset colors of numerals to slightly transparent
  v1.to(".swiper-pagination-bullet", {
    color: "rgba(32,32,32,.25)",
    duration: 2
  });
  // fade-in my desired circle (by id)
  v1.to(
    circle,
    {
      strokeDashoffset: 0,
      duration: 3
    },
    part
  );
  v1.to(
    numeralDiv,
    {
      color: "rgba(1,1,1)",
      duration: 3
    },
    part
  );
  v1.to(
    image,
    {
      /* backgroundColor: "blue", */
      opacity: 1,
      duration: 3
    },
    part
  );

  console.log("sr2");
  return v1;
}

const master = new gsap.timeline({ repeat: -1 });
master.add(
  revolvePart(
    "part1",
    "#circle-2-1",
    "#swiper-slider-image-5",
    "#swiper-pagination-bullet-1"
  ),
  "part1"
);
master.add(
  revolvePart(
    "part2",
    "#circle-2-2",
    "#swiper-slider-image-4",
    "#swiper-pagination-bullet-2"
  ),
  "part2"
);
master.add(
  revolvePart(
    "part3",
    "#circle-2-3",
    "#swiper-slider-image-3",
    "#swiper-pagination-bullet-3"
  ),
  "part3"
);
master.add(
  revolvePart(
    "part4",
    "#circle-2-4",
    "#swiper-slider-image-2",
    "#swiper-pagination-bullet-4"
  ),
  "part4"
);
master.add(
  revolvePart(
    "part5",
    "#circle-2-5",
    "#swiper-slider-image-1",
    "#swiper-pagination-bullet-5"
  ),
  "part5"
);

const onClickBullets = part => {
  console.log("sir");
  master.seek(part);
  master.play();
  /* master.pause(); */
};

// SECTION: add user events:

const bullets = document.querySelectorAll(".swiper-pagination-bullet");
const numBullets = bullets.length;

const labels = ["part1", "part2", "part3", "part4", "part5"];

for (let i = 0; i < numBullets; i++) {
  bullets[i].addEventListener("click", function() {
    onClickBullets(labels[i]);
  });
  console.log(i);
}
