// OPEN USA GALLERY
document.getElementById("USA-flag").addEventListener("click", openUSA);

function openUSA() {
  document.querySelector(".gallery").classList.remove("home");
}

// OPEN GREECE GALLERY

document.getElementById("greece-flag").addEventListener("click", openGreece);

function openGreece() {
  document.querySelector(".gallery").classList.remove("home");
  document.querySelector(".gallery").classList.remove("USA-gallery");
}

// OPEN GERMANY GALLERY

document.getElementById("germany-flag").addEventListener("click", openGermany);

function openGermany() {
  document.querySelector(".gallery").classList.remove("home");
  document.querySelector(".gallery").classList.remove("USA-gallery");
  document.querySelector(".gallery").classList.remove("greece-gallery");
}

// OPEN SPAIN GALLERY

document.getElementById("spain-flag").addEventListener("click", openSpain);

function openSpain() {
  document.querySelector(".gallery").classList.remove("home");
  document.querySelector(".gallery").classList.remove("USA-gallery");
  document.querySelector(".gallery").classList.remove("greece-gallery");
  document.querySelector(".gallery").classList.remove("germany-gallery");
}

// OPEN SPAIN GALLERY

document.getElementById("france-flag").addEventListener("click", openFrance);

function openFrance() {
  document.querySelector(".gallery").classList.remove("home");
  document.querySelector(".gallery").classList.remove("USA-gallery");
  document.querySelector(".gallery").classList.remove("greece-gallery");
  document.querySelector(".gallery").classList.remove("germany-gallery");
  document.querySelector(".gallery").classList.remove("spain-gallery");
}

//CLOSE FLAG NAV

document.getElementById("USA-flag").addEventListener("click", openClosenav);

document.getElementById("greece-flag").addEventListener("click", openClosenav);

document.getElementById("germany-flag").addEventListener("click", openClosenav);

document.getElementById("spain-flag").addEventListener("click", openClosenav);

document.getElementById("france-flag").addEventListener("click", openClosenav);

function openClosenav() {
  document.querySelector(".flag-nav").classList.remove("nav-paused");
}

// CLOSE USA

document.getElementById("USApre-home").addEventListener("click", closeUSA);

function closeUSA() {
  document.querySelector(".gallery").classList.add("home");

  document.querySelector(".flag-nav").classList.add("nav-paused");
}

// NEXT USA

document.getElementById("USAnext-greece").addEventListener("click", nextUSA);

function nextUSA() {
  document.querySelector(".gallery").classList.remove("USA-gallery");
}

// // CLOSE GREECE
document.getElementById("greecepre-USA").addEventListener("click", closeGreece);

function closeGreece() {
  document.querySelector(".gallery").classList.add("USA-gallery");
}

// // NEXT GREECE

document
  .getElementById("greecenext-germany")
  .addEventListener("click", nextGreece);

function nextGreece() {
  document.querySelector(".gallery").classList.remove("greece-gallery");
}

// // CLOSE GERMANY
document
  .getElementById("germanypre-greece")
  .addEventListener("click", closeGermany);

function closeGermany() {
  document.querySelector(".gallery").classList.add("greece-gallery");
}

// // NEXT GERMANY

document
  .getElementById("germanynext-spain")
  .addEventListener("click", nextGermany);

function nextGermany() {
  document.querySelector(".gallery").classList.remove("germany-gallery");
}

// // CLOSE SPAIN
document
  .getElementById("spainpre-germany")
  .addEventListener("click", closeSpain);

function closeSpain() {
  document.querySelector(".gallery").classList.add("germany-gallery");
}

// // NEXT SPAIN

document
  .getElementById("spainnext-france")
  .addEventListener("click", nextSpain);

function nextSpain() {
  document.querySelector(".gallery").classList.remove("spain-gallery");
}

// // CLOSE FRANCE
document
  .getElementById("francepre-spain")
  .addEventListener("click", closeFrance);

function closeFrance() {
  document.querySelector(".gallery").classList.add("spain-gallery");
}

// USA
const USAmodal = document.querySelector(".USA-modal");
const USApreviews = document.querySelectorAll(".USA img");

const USAoriginal = document.querySelector(".USA-full-img");
const USAcaption = document.querySelector(".USA-caption");

USApreviews.forEach((preview) => {
  preview.addEventListener("click", () => {
    USAmodal.classList.add("open");
    USAoriginal.classList.add("open");
    //Dynamic Change Text and Image
    const USAoriginalSrc = preview.getAttribute("data-original");
    USAoriginal.src = USAoriginalSrc;
    const USAaltText = preview.alt;
    USAcaption.textContent = USAaltText;
  });
});

USAmodal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal"));
  {
    USAmodal.classList.remove("open");
    USAoriginal.classList.remove("open");
  }
});

// GREECE
const greecemodal = document.querySelector(".greece-modal");
const greecepreviews = document.querySelectorAll(".greece img");
const greeceoriginal = document.querySelector(".greece-full-img");
const greececaption = document.querySelector(".greece-caption");

greecepreviews.forEach((preview) => {
  preview.addEventListener("click", () => {
    greecemodal.classList.add("open");
    greeceoriginal.classList.add("open");
    //Dynamic Change Text and Image
    const greeceoriginalSrc = preview.getAttribute("data-original");
    greeceoriginal.src = greeceoriginalSrc;
    const altText = preview.alt;
    greececaption.textContent = altText;
  });
});

greecemodal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal"));
  {
    greecemodal.classList.remove("open");
    greeceoriginal.classList.remove("open");
  }
});

// GERMANY

const germanymodal = document.querySelector(".germany-modal");
const germanypreviews = document.querySelectorAll(".germany img");
const germanyoriginal = document.querySelector(".germany-full-img");
const germanycaption = document.querySelector(".germany-caption");

germanypreviews.forEach((preview) => {
  preview.addEventListener("click", () => {
    germanymodal.classList.add("open");
    germanyoriginal.classList.add("open");
    //Dynamic Change Text and Image
    const germanyoriginalSrc = preview.getAttribute("data-original");
    germanyoriginal.src = germanyoriginalSrc;
    const altText = preview.alt;
    germanycaption.textContent = altText;
  });
});

germanymodal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal"));
  {
    germanymodal.classList.remove("open");
    germanyoriginal.classList.remove("open");
  }
});

// SPAIN

const spainmodal = document.querySelector(".spain-modal");
const spainpreviews = document.querySelectorAll(".spain img");
const spainoriginal = document.querySelector(".spain-full-img");
const spaincaption = document.querySelector(".spain-caption");

spainpreviews.forEach((preview) => {
  preview.addEventListener("click", () => {
    spainmodal.classList.add("open");
    spainoriginal.classList.add("open");
    //Dynamic Change Text and Image
    const spainoriginalSrc = preview.getAttribute("data-original");
    spainoriginal.src = spainoriginalSrc;
    const altText = preview.alt;
    spaincaption.textContent = altText;
  });
});

spainmodal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal"));
  {
    spainmodal.classList.remove("open");
    spainoriginal.classList.remove("open");
  }
});

// FRANCE

const francemodal = document.querySelector(".france-modal");
const francepreviews = document.querySelectorAll(".france img");
const franceoriginal = document.querySelector(".france-full-img");
const francecaption = document.querySelector(".france-caption");

francepreviews.forEach((preview) => {
  preview.addEventListener("click", () => {
    francemodal.classList.add("open");
    franceoriginal.classList.add("open");
    //Dynamic Change Text and Image
    const franceoriginalSrc = preview.getAttribute("data-original");
    franceoriginal.src = franceoriginalSrc;
    const altText = preview.alt;
    francecaption.textContent = altText;
  });
});

francemodal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal"));
  {
    francemodal.classList.remove("open");
    franceoriginal.classList.remove("open");
  }
});

const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = -75 + offset * 0.075 + "px";
  // console.log("Offset: " + offset);
  // console.log("offset * 0.7" + offset * 0.7);
});

// var velocity = 0.5;

// function update() {
//   var pos = $(".me").scrollTop();
//   $(".me").each(function () {
//     var $element = $(".me");
//     // subtract some from the height b/c of the padding
//     var height = $element.height() - 18;
//     $(".me").css(
//       "backgroundPosition",
//       "50% " + Math.round((height - pos) * velocity) + "px"
//     );
//   });
// }

// $(window).bind("scroll", update);
