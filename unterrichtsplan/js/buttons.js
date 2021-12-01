const pdfIDs = ["Schema_Notenbildung", "MatheKognitiveAktivierung"]

function showDiv(id) {
	if(id == "-1"){
		return;
	}
	if(id == "clear"){
		for (let x of pdfIDs){
			document.getElementById(x).style.display = "none";
		}
	}
	if(document.getElementById(id).style.display == "none"){
		document.getElementById(id).style.display = "block";
	}else{
		document.getElementById(id).style.display = "none";
	} 
}
