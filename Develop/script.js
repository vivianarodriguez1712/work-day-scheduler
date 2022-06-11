document.getElementById("todaysDate").textContent = moment().format('dddd, MMM Do YYYY');

function trackTime() {
    var currentTime = moment().hour();

    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1])

        if (timeBlock < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }

        else if (timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }

        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}

function saveTask(event) {
   var taskEvent = event.target.getAttribute("type")
   console.log(taskEvent)

   var key = Math.random();
   var value = 


trackTime();







