function firstWord(s) {
  // your code here
	if(s.trim()===""){
		return s;
	}
	if(!s.trim().includes(" ")){
		return s;
	}
	else{
		let str=s.trim();
		let ans="";
		for (let i = 0; i < str.length; i++) {
			if(str.charAt(i)!==" "){
				ans+=str.charAt(i);
			}else{
				break;
			}
		}
		return ans;
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
