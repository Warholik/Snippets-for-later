/*
 * We need 2 columns
 * One coloumn for the texts with ID of: szovegek
 * One coliumn for the images with ID of: kepek
 * Have to set the same amount of image with the same amout of text!
 * And with CSS set all image display:none
 * 
 * How it's work
 * - We select the texts first
 * - select the first image and display it by default.
 * - Then iterate throught all of it
 * - add on on mousemove and an onmouse leave function
 * - - mousemove event:
 * - - - hide all images then display the pair of the text
 * - - mouse leave event:
 * - - - hide all images except the pair of the text
 */
var array = document.getElementById("szovegek").children[0].children;
document.getElementById("kepek").children[0].style.display = "block";
for (let index = 0; index < array.length; index++) {
  array[index].onmousemove = function () {
    for (let x = 0; x < array.length; x++) {
      document.getElementById("kepek").children[x].style.display = "none";
    }
    document.getElementById("kepek").children[index].style.display = "block";
  };
  array[index].onmouseleave = function () {
    for (let x = 0; x < array.length; x++) {
      if (!x == index) {
        document.getElementById("kepek").children[x].style.display = "none";
      }
    }
  };
}
