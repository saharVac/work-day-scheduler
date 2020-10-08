var events;

// Fill in events from local storage
function renderEvents() {
  // check if events have been already set
  if (localStorage.getItem("events") !== null) {
    // iterate over event descriptions
    // obtain events
    events = JSON.parse(localStorage.getItem("events"));
    // iterate over textareas
    $("textarea").each(function (index, element) {
      // assign events with their descriptions
      $(this).val(events[index + 1]);
    });
  } else {
    // if events haven't been set yet, set them to empty strings
    events = {};
    // iterate over keys
    for (let i = 1; i <= 9; i++) {
      // add keys
      events[i] = "";
    }
    // log into localStorage
    localStorage.setItem("events", JSON.stringify(events));
  }
}

// color hour blocks
function renderBlockColors() {
  // obtain current hour of day
  var hour = moment().hour();
  // assign textareas with proper color according to current time
  $("textarea").each(function (index, element) {
    // Obtain time associated with block
    var time = parseInt($(this).attr("id"));
    // check if time is before, similar, or after current hour of day
    if (time < hour) {
      // assign class of past
      $(this).addClass("past");
    } else if (time === hour) {
      // assign class of present
      $(this).addClass("present");
    } else {
      // assign class of future
      $(this).addClass("future");
    }
  });
}

// when save button is clicked
$(".saveBtn").click(function () {
  // obtain event to save
  var event = $(this).prev().val();
  // obtain index
  var index = $(this).attr("id");
  // change event in global events variable
  events[index] = event;
  // update events in localStorage
  localStorage.setItem("events", JSON.stringify(events));
});

function displayDay() {
  // obtain date
  var date = Date().substring(0, 15);
  // display
  $("#currentDay").text(date);
}

$(document).ready(function () {
  displayDay();
  renderEvents();
  renderBlockColors();
});
