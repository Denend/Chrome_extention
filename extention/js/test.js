console.log("we are ready");
console.log("we are ready");
var currLocation = window.location.href;


  if(currLocation.includes('tcs.jiyunhudong.com/worktable/old?tags=&page=1&title=&type=star')){
	calculateErrValue('tcs.jiyunhudong.com/worktable/old?tags=&page=1&title=&type=star').then(function(res){
  		console.log(res)
  		sessionStorage.setItem('errValue', res);
  	});
  };
  document.onkeyup = function(e){
     if(e.keyCode==32){
  		setTimeout(function(){
			calculateErrValue('tcs.jiyunhudong.com/worktable/6575057855890588173').then(function(res){
				console.log(res)
				let previousVal = sessionStorage.getItem('errValue');
				if(res > previousVal){
					alert("someone did a mistake")
					showMistakeInfo().then(function(res){
						alert(res)
					});
					//sessionStorage.setItem('errValue', res);
				}			
			});
		
		},3000);

     };
  }














function calculateErrValue(url){
	if(currLocation.includes(url)){
	let mistakesNum = "";
	let audioQueue = 6575057855890588173
	let notes = ",6580176409300304392"
	return fetch("https://tcs.jiyunhudong.com/api/v2/stats/common_stats/?project_ids=6575057855890588173&username=danylo.soloviov.bd.pl@gmail.com&extra_stats=delay_stats", {"credentials":"include","headers":{"accept":"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9","x-requested-with":"XMLHttpRequest","x-ts":"1551428308072"},"referrer":"https://tcs.jiyunhudong.com/worktable?tags=&page=1&title=&type=star","referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"GET","mode":"cors"}).then(
	function(res){
		return res.json().then(
			 function(res1){
				
				let searchedStr = "to_audit"
				console.log(res1)
				mistakesNum = res1.data;
				let parsedObj = JSON.stringify(mistakesNum);
				console.log(parsedObj)
				console.log(parsedObj.indexOf("to_audit"))
				let position1 = parsedObj.indexOf("to_audit") + searchedStr.length
				//let position = fourthIndex(parsedObj,":")
				//parsedObj.indexOf(toVerifyStr)+toVerifyStr.lenght+1
				
				//console.log(position)
				//let errVal = parsedObj.slice(position +1,position+2);	
				let errVal1 = parsedObj.slice(position1+2 ,position1+3);	
				return errVal1
							
		})})
	};
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

function showMistakeInfo(){
	return fetch("https://tcs.jiyunhudong.com/api/v2/query_task/?status=5&audit_status=&should_verify_count=&page=1&call_back=&with_data=1&per_page=100&product_type=&project_ids=6575057855890588173", {"credentials":"include","headers":{"accept":"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9","x-requested-with":"XMLHttpRequest","x-ts":"1552750777628"},"referrer":"https://tcs.jiyunhudong.com/project/6575057855890588173/globaltasks?status=5&audit_status=&should_verify_count=&page=1&call_back=","referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"GET","mode":"cors"}).then(
		function(res){
			return res.json().then(function(res1){
			let lastCase = res1.data.results[res1.data.results.length-1]; 
			let moder1 = lastCase.verifiers[0]; 
			let moder2 = lastCase.verifiers[1]; 
			let moder1_data = JSON.stringify(lastCase.task_verifies[0].verify_data.mainForm); 
			let moder2_data = JSON.stringify(lastCase.task_verifies[1].verify_data.mainForm); 
			console.log(moder1 +" did "+ moder1_data[0],moder1_data[1]+" and "+ moder2+" did "+moder2_data)
	})})
}
//<button data-v-458e6193="" type="button" class="action-bar-button ivu-btn ivu-btn-primary"><!----> <!----> <span>Submit</span></button>
