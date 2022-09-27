"use strict";

const grow = (id) => {
  const e = document.querySelector(".hero-imgs");

  if (id == 1) {
    e.classList.add("getting-started-anim");
  } else if (id == 2) {
    e.classList.add("middle-anim");
  } else if (id == 3) {
    e.classList.add("partners-anim");
  }
};

const shrink = (id) => {
  const e = document.querySelector(".hero-imgs");

  if (id == 1) {
    e.classList.remove("getting-started-anim");
  } else if (id == 2) {
    e.classList.remove("middle-anim");
  } else if (id == 3) {
    e.classList.remove("partners-anim");
  }
};
