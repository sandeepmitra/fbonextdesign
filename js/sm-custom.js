// Grid Drag Drop
$("#basic-grid").gridstrap();
$("#grid2").gridstrap();

// //Quick Search
$(".ui.dropdown").dropdown();
$("#quickSeachInp").focus(function () {
  $(".searchbox").addClass("increaeSearchBoxWidth");
  $(this).addClass("increaeSearchWidth");
  $(".advSearchBox").addClass("showAdvSearchBox");
  $(".collapseAdvSearchBox").show();
  $(".searchCriterias").show();
});

$("#collapseAdvSearchBox").click(function () {
  $(".searchbox").removeClass("increaeSearchBoxWidth");
  $("#quickSeachInp").removeClass("increaeSearchWidth");
  $(".advSearchBox").removeClass("showAdvSearchBox");
  $(this).hide();
  $(".searchCriterias").hide();
});

// document.addEventListener("click", function(evt) {
//     let flyoutEl = document.getElementById('flyout-example'),
//       targetEl = evt.target; // clicked element
//     do {
//       if(targetEl == flyoutEl) {
//         // This is a click inside, does nothing, just return.
//         document.getElementById("flyout-debug").textContent = "Clicked inside!";
//         return;
//       }
//       // Go up the DOM
//       targetEl = targetEl.parentNode;
//     } while (targetEl);
//     // This is a click outside.
//     document.getElementById("flyout-debug").textContent = "Clicked outside!";
//   });

$(".searchBtn").click(function () {
  window.location.href = "advance-search.html";
});

$(".ui.accordion").accordion();
