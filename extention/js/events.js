// chrome.runtime.onInstalled.addListener(function() {
//     document.addEventListener('DOMContentLoaded', function(){alert("Super extention from Daniel")}, false);
//
// });
document.addEventListener('DOMContentLoaded', function(){

  //alert("Super extention from Daniel")



}, false);

function testFoo(){
  alert("lol  ")
  let switcher = document.getElementById("myCheckBox");
  let pishka = document.getElementsByTagName("p")[0];
  if(switcher.checked == true){
    pishka.innerHTML = "It works";
  };
}
function foo(){
  let pishka = document.getElementsByTagName("p")[0];
  pishka.innerHTML = "It works";
}
