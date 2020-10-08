// Fill in events from local storage
function renderEvents() {
  // check if events have been already set
  if (localStorage.getItem("events") !== null) {
    // obtain object of event
    var events = JSON.parse(localStorage.getItem("events"));

    // iterate over event descriptions
    $("textarea").each(function (index, element) {
      // assign events with their descriptions
      $(this).val(events[index]);
    });
  } else {
    // if events haven't been set yet do nothing
    return;
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

$(document).ready(function () {
  renderEvents();
  renderBlockColors();
});
