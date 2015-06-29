'use strict';
var myDiv = document.querySelectorAll('main div'),
    counter = new Array(5);




function handler(i) {
    return function () {
        counter[i] = counter[i] + 1;
        myDiv[i].innerHTML = "clicks: " + counter[i];
    }
}

for (var i= 0; i < myDiv.length; i++) {
  counter[i]= 0;
  myDiv[i].innerHTML = "clicks: " + counter[i];
  myDiv[i].addEventListener('click', handler(i));
}


/*(for(var i = 0;i<myDiv.length; i++) {
  (function (i){
    var counter = 0;
    myDiv[i].addEventListener('click', function () {counter = counter+1; console.log(counter)});
  })(i);
}
*/