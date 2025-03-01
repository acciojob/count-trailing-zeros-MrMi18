function trailingZeros(n) {
  //your JS code here. If required.
	let fact =1 
	while(n>0){
		fact*=n;
		n--;
   }
	fact = fact.toString();
	let len = fact.length-1;
	let count = 0;
    for(let i  = len ; i>=0 ; i--){
		if(fact[i]!=0) return count;
		else count++;
    }
	return count;
}

const input = prompt("Enter a number");

alert(trailingZeros(input));