var precision = 6;

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
  	
  	parseInt(){
  		var tmp = this.tabVal.toString().replace(/[\[\],]+/g,"");
  		tmp = tmp.slice(0,tmp.length-this.virgule) + "." + tmp.slice(tmp.length-this.virgule,tmp.length);
  		return Number(tmp);
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

function division(num1, num2){
	


}

function comparaison(num1, num2){
	if(num1.tabVal<num2.tabVal){
	
	}
}

function testZero(num){
	//retourne true si égale à zéro
	var i = 0;
	var flag = true;
	while(i<num.tabVal.length && flag){
		if(num.tabVal[i]!=0){
			flag = false;
			console.log(flag);
		}
		i++;
	}
	
	return flag;	
}

function mod10(num){
	return 0;
}

function multEnt(num1, b){
	return multEntR(num1,b,0);	
}

function multEntR(num1, b, retenue){
	if (testZero(num1) || b=0){
		return retenue;
	}
	var dab = mod10(a);
}

/*
Si(TestZero(a)ou TestZero(b))Alors
	renvoyer retenue
Sinon
	dab <− ModDix ( a ) ∗ b + r e t e n u e
	renvoyer MulDixPlus ( mulEntR ( DivDix ( a ) , b , dab div10),\dab mod10)
FinSi

*/

/*
function multiplication(num1, num2){
	var a = num1.parseInt();
	var b = num2.parseInt();
	return new numInf(a*b);
}
*/


var numb1 = new numInf("0");
var numb2 = new numInf("508.55");
console.log(numb1.toString());
console.log(numb2.toString());

console.log("parseInt:"+numb2.parseInt().toString());

var numb3 = soustraction(numb1,numb2);
//console.log("axb="+ multiplication(numb1,numb2).toString());
console.log("ax2="+ multEnt(numb1, 2).toString());
console.log(numb3.toString());




//"123.5" --> [1,2,3,5]
