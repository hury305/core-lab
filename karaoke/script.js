//This function makes a new bar
function createRegularDiv(){
	var div = document.createElement("div"); //create a new element "div"
	div.classList.add("bar"); //add the css style "rect" to the added element
	var container = document.getElementById('container'); //get the container element
	container.appendChild(div); //attach the element to the container
}

// make 40 bars
for(i = 0; i< 40; i++){
    createRegularDiv();
	console.log("the loop runs" + i + "times");
}

// window.onload=function(){ //execute on page load
//     setTimeout(func0, 0);
//     setTimeout(func1, 3000);  //sets a timer for func1
//     setTimeout(func2, 3000);
// };
// function func0(){
//     document.getElementById("two").className="hide";
// }
// function func1(){
//     document.getElementById("one").className="hide";
// }
// function func2(){
//     document.getElementById("two").className="show";
// }

// //changing text
// window.onload=function(){ //execute on page load
//     setTimeout(func1, 3000);  //sets a timer for func1
// };
// function func1(){
//     document.getElementById("one").innerHTML = "of everything that";
//     document.getElementsByClassName("focus").style.content = "'of everything that'";
// }

//changing text
window.onload=function(){ //execute on page load
    document.getElementById("one").innerHTML = " ";
    document.getElementById("lyrics").style.opacity = "0";
    setTimeout(func1, 10000);  //sets a timer for func1
    setTimeout(func2, 13000);
    setTimeout(func3, 16000);
    setTimeout(func4, 19000);
    setTimeout(func5, 22000);
    setTimeout(func6, 25000);
    setTimeout(func7, 28000);
    setTimeout(func8, 31000);
    setTimeout(func9, 34000);
    setTimeout(func10, 37000);
    setTimeout(func11, 40000);
    setTimeout(fin, 46000);
};
function func1(){
    document.getElementById("lyrics").style.opacity = "1";
    document.getElementById("one").innerHTML = "And when I think";
}
function func2(){
    document.getElementById("one").innerHTML = "of everything that we";
    document.getElementById("lyrics").classList.add("line-two");
}
function func3(){
    document.getElementById("one").innerHTML = "did together...";
    document.getElementById("lyrics").classList.add("line-three");
}
function func4(){
    document.getElementById("one").innerHTML = "Somewhere in Verona";
    document.getElementById("lyrics").classList.add("line-four");
}
function func5(){
    document.getElementById("one").innerHTML = "the sun set over our";
    document.getElementById("lyrics").classList.add("line-five");
}
function func6(){
    document.getElementById("one").innerHTML = "time together...";
    document.getElementById("lyrics").classList.add("line-six");
}
function func7(){
    document.getElementById("one").innerHTML = "Thinking it over";
    document.getElementById("lyrics").classList.add("line-seven");
}
function func8(){
    document.getElementById("one").innerHTML = "so young and senti-";
    document.getElementById("lyrics").classList.add("line-eight");
}
function func9(){
    document.getElementById("one").innerHTML = "mental, our hearts so";
    document.getElementById("lyrics").classList.add("line-nine");
}
function func10(){
    document.getElementById("one").innerHTML = "gentle, such a shame we";
    document.getElementById("lyrics").classList.add("line-ten");
}
function func11(){
    document.getElementById("one").innerHTML = "had to drift apart...";
    document.getElementById("lyrics").classList.add("line-eleven");
}
function fin(){
    document.getElementById("one").innerHTML = " ";
    document.getElementById("lyrics").classList.add("fin");
}

// var span = document.querySelector('span'),
// string = 'Yay';

// span.dataset.content = 'And when I think';

// setTimeout(() => {
//   span.setAttribute('data-content', 'Ou posso usar o .setAttribute também');
// }, 2000);