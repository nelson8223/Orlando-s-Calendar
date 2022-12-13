// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$('.saveBtn').on( "click", function() {
  
  var textValue = $(this).siblings('.description').val() 
  $( ".text-center" ).hasClass( "currentHours" )
  console.log(textValue)

})

$(".time-block").click(function(){
  if ("past"==="present")addClass("future") 
  else;
  $("future").removeClass("past");
  }
  
 
);



$('#currentToday').text(dayjs().format('dddd, MMMM D, YYYY'));



$(function () {


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // calendarStarter.addEventListener("click", function() {
  
  //   if (mode === "green") {
  //     mode = "red";
  //     container.setAttribute("late", "red");
  //   }
  
  
  // var count = localStorage.getItem("count");
  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var time = dayjs().format('hh:mm:ss');
   $('#3a').text(time);

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // userInput();

  // function userInput(){
  //  var day = localStorage.getItem("days");
  //  var time = localStorage.getItem("time");
  // }
  // //
  // TODO: Add code to display the current date in the header of the page.
});
