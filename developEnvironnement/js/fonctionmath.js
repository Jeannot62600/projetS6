var precision = 3;

class numInf{
	constructor(valeur){
		console.log("val="+valeur);
		var tab;
		var virgule;
		var val;
		var n = valeur.indexOf(".");
		console.log("n="+n);
		if(n>0){
			val=valeur.substr(0,n);
			val+=valeur.substr(n+1,n.length);
			virgule=valeur.length - n - 1;
		}
		else{
			virgule=precision;
			val = valeur;
		}
		console.log("val="+val);
		if(virgule<precision){ //pas assez de précision
			while(virgule!=precision){
				val+=0;
				virgule++;
			}
		}
		if(virgule>precision){ //trop de précision
			var p =virgule-precision;
			val = val.substr(0,val.length-p);
			virgule=virgule-p;
		}
		this.tabVal=val.split("");
		this.virgule=virgule;	
	}
	
	toString() { 
    	return (""+ this.tabVal + "-" + this.virgule); 
  	}
}

function addition(num1, num2){
	var tabRes= new Array();
	var i = num1.tabVal.length-1;	
	var j = num2.tabVal.length-1;
	var k = 0;
	var retenu = 0;
	
	while(num1.tabVal[i]!=null || num2.tabVal[j]!=null){
			console.log(num1.tabVal[i]);
		if(num1.tabVal[i]==null){
			num1.tabVal[i]=0;
		}
		if(num2.tabVal[j]==null){
			num2.tabVal[j]=0;
		}
		tabRes[k] = Number(num1.tabVal[i]) + Number(num2.tabVal[j]) + Number(retenu);
		if(tabRes[k]>10){
			retenu = 1;
			tabRes[k] = tabRes[k] - 10;
		}
		else
			retenu=0;
		i--;
		j--;
		k++;
	}
	tabRes.reverse();
	var tmp = tabRes.join();
	tmp = 	tmp.replace(/,/g,"");
	return new numInf(tmp);
}

function soustraction(num1, num2){
	var tabRes= new Array();
	var i = num1.tabVal.length-1;	
	var j = num2.tabVal.length-1;
	var k = 0;
	var retenu = 0;
	
	while(num1.tabVal[i]!=null || num2.tabVal[j]!=null){
			//console.log(num1.tabVal[i]);
		if(num1.tabVal[i]==null){
			num1.tabVal[i]=0;
		}
		if(num2.tabVal[j]==null){
			num2.tabVal[j]=0;
		}
		tabRes[k] = Number(num1.tabVal[i]) - Number(num2.tabVal[j]) - Number(retenu);
		if(tabRes[k]<0){
			console.log(tabRes[i]);
			retenu = 1;
			tabRes[k] = tabRes[k] + 10;
		}
		else
			retenu=0;
		i--;
		j--;
		k++;
	}
	tabRes.reverse();
	var tmp = tabRes.join();
	tmp = 	tmp.replace(/,/g,"");
	return new numInf(tmp);
}



var numb1 = new numInf("728");
var numb2 = new numInf("530");
console.log(numb1.toString());
console.log(numb2.toString());

console.log(soustraction(numb1,numb2).tabVal);




//"123.5" --> [1,2,3,5]
