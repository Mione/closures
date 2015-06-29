var myDiv = document.querySelectorAll('main div');

for(var i = 0;i<myDiv.length; i++) {
  (function (i){
    var counter = 0;
    myDiv[i].addEventListener('click', function () {counter = counter+1; console.log(counter)});
  })(i);
}
