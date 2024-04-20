//your JS code here. If required.
function mapLetters(string){
	let letterMap={};
	for(let i=0; i<string.length; i++){
		let char=string[i];
		if(letterMap[char]){
			letterMap[char].push(i);
		}
		else
		{
			letterMap[char]=[i];
		}
	}
	return letterMap;
}