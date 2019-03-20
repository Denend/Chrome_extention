
document.addEventListener('DOMContentLoaded', function(){
sessionStorage.setItem('key', 'mySuperValue');
document.getElementById("myCheckBox").addEventListener("change", function(){
testFoo();
})


}, false);

const queueNameId = {
DE_Filter:"6575057855890588173",
DE_Audio:"6580176409300304392"
}

function testFoo(){
  
  let data = sessionStorage.getItem('key');
  let switcher = document.getElementById("myCheckBox");
  let pishka = document.getElementsByTagName("p")[0];
  let selectedQueue = document.getElementById("queueOption").value;

  if(switcher.checked === true){
    //alert(queueNameId[selectedQueue])
    sessionStorage.setItem('queueId', 'LOL');
    let pishka = document.getElementsByTagName("p")[0];
    pishka.innerHTML = data;
  } else {
    pishka.innerHTML = "Its off";
  }
}
