/*
 * Wee need 2 item with different ID-s
 * One what we want to be intreractable like a button
 * One what we need to display and hide when we interacted
 *
 * How it's work
 * - Get the iteractive element and add a click listener for it
 * - Prevent the default click behaviour
 * - Get the element what we we vant to hide
 * - Check is it displayed or not then hide or display
 * Other things:
 * - - Outside the function get the element and hide it by default.
 * - - You can repeat this as many element as you vant just use different IDs.
 */
document.getElementById("button-1").addEventListener("click", function (event) {
  event.preventDefault();
  var text = document.getElementById("text-1");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});

document.getElementById("text-1").style.display = "none";

document.getElementById("button-2").addEventListener("click", function (event) {
  event.preventDefault();
  var text = document.getElementById("text-2");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});

document.getElementById("text-2").style.display = "none";

document.getElementById("button-3").addEventListener("click", function (event) {
  event.preventDefault();
  var text = document.getElementById("text-3");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});

document.getElementById("text-3").style.display = "none";
