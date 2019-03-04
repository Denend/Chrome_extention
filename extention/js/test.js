console.log("we are ready");
console.log("we are ready");
var currLocation = window.location.href;

//document.addEventListener('DOMContentLoaded', function(){
	//checkErrNumber();
	if(currLocation.includes("tcs.jiyunhudong.com/worktable/6580176409300304392")){
		alert("some are works")
		document.getElementsByClassName("action-bar-button ivu-btn ivu-btn-primary")[0].addEventListener("click", checkErrNumber());
	}
//})





if(currLocation.includes("tcs.jiyunhudong.com")){
let mistakesNum = "";
let audioQueue = 6575057855890588173
let notes = ",6580176409300304392"
fetch("https://tcs.jiyunhudong.com/api/v2/stats/common_stats/?project_ids=6575057855890588173&username=danylo.soloviov.bd.pl@gmail.com&extra_stats=delay_stats", {"credentials":"include","headers":{"accept":"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9","x-requested-with":"XMLHttpRequest","x-ts":"1551428308072"},"referrer":"https://tcs.jiyunhudong.com/worktable?tags=&page=1&title=&type=star","referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"GET","mode":"cors"}).then(
function(res){
	res.json().then(
		function(res1){
			console.log(res1)
			mistakesNum = res1.data;
			let parsedObj = JSON.stringify(mistakesNum);
			console.log(parsedObj)
			
			let position = fourthIndex(parsedObj,":")
			console.log(position)
			let errVal = parsedObj.slice(position +1,position+2);
			console.log(errVal)
			sessionStorage.setItem('errValue', errVal);
	})})
};

function fourthIndex(text, symbol) {
    let count = 0;
    for (var i = 0; i < text.length; i++) {
      	//alert(text[i])
        if (text[i] == symbol) {
            count++;
        }
        if (count == 4) {
            return i;
        }
    }   
    
}    

function checkErrNumber(){
		alert("lol")			
}
//<button data-v-458e6193="" type="button" class="action-bar-button ivu-btn ivu-btn-primary"><!----> <!----> <span>Submit</span></button>
