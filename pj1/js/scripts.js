
function minwid(colcount , col){
	
	document.getElementById("mn"+col).style.minWidth = (130*colcount)+"px";
	document.getElementById("mn"+col).style.marginLeft = "-"+( (40*colcount)+((colcount*45)-45) + extracalc(col)  )+"%";
	
	
}
function extracalc(col){
		
	 switch(col){
			 
		 case 6:return 70;break;
		 case 7:return -65;break;
		 case 8:return 50;break;
		 case 9:return 100;break;
		 case 10:return 110;break;
		 default: return 0;
	 }
	
}

function teste(){
	
	alert("dd");
}

function gatobox(){
	document.getElementById("gatob").style.zIndex=0;
	document.getElementById('srchtop').placeholder='Faça a Busca do seu produto';
	document.getElementById("catb").style.zIndex=3;
	
}
function ratobox(){
	document.getElementById("catb").style.zIndex=0;
	document.getElementById('srchtop').placeholder='Busque';
	document.getElementById("gatob").style.zIndex=3;
	
}

function opacitycg(pos){
	document.getElementById("ovl"+pos).style.backgroundColor ="rgba(0, 0, 0, 0.705)";
	
	
}