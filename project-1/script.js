var one = document.getElementById("karaoke")
var two = document.getElementById("about")
var three = document.getElementById("receipt")
var four = document.getElementById("collection")
var five = document.getElementById("typestract")
var six = document.getElementById("house")


var items = [one, two, three, four, five, six];

function addCircle() {
    for (i = 0; i < 18; i++) {                                  //run the function 10 times
        items[i].style.left = Math.random() * 80 + "vw";            //randomize left margin
        items[i].style.top = Math.random() * 80 + "vh";             //randomize right margin                                   //attach "div" to "bg"
    }
}

addCircle();