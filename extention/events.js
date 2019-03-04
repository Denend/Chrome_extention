
document.addEventListener('DOMContentLoaded', function(){
sessionStorage.setItem('key', 'mySuperValue');
document.getElementById("myCheckBox").addEventListener("change", function(){
testFoo();
})


}, false);

function testFoo(){
  let data = sessionStorage.getItem('key');
  let switcher = document.getElementById("myCheckBox");
  let pishka = document.getElementsByTagName("p")[0];
  if(switcher.checked === true){
    //alert("works")
    let pishka = document.getElementsByTagName("p")[0];
    pishka.innerHTML = data;
  } else {
    pishka.innerHTML = "Its off";
  }
}
