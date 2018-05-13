// class Nombre {
//   construtor(valeurs, virgule){
//     this.valeurs = valeurs;
//     this.virgule =  virgule;
//     this.taille = valeurs.length;
//   }
//
//   addCf(value){
//     this.valeurs[this.valeurs.length - this.virgule];
//     if(this.valeurs[this.valeurs.length - this.virgule] > 10){
//       this.valeurs[this.valeurs.length - this.virgule] -= 10;
//       this.valeurs[this.valeurs.length - this.virgule - 1] += 1;
//     }
//   }
//
//   getstring(){
//     this.valeurs
//   }
// }
//
//
// var nb = new Nombre([1,2,3,4,5,6],2);
// console.log(nb.addCf(7))



function calcul(calc){
  // milexe = lexe(calc);
  // defineTree(milexe);
  // console.log(execTree);
  // return milexe;
  return eval(calc);
  //return parseInt(calc[0]) + parseInt(calc[2]);
}

function insert2(last){
    var calc = document.getElementById("calc");
    var value = calc.value;
    var add = last;
    var res = value.slice(0,calc.selectionStart) + add + value.slice(calc.selectionEnd);
    calc.value = res;
}

function insert(last){
    var calc = document.getElementById("calc");
    var value = calc.value;
    var add = last.innerHTML;
    var res = value.slice(0,calc.selectionStart) + add + value.slice(calc.selectionEnd);
    calc.value = res;
}

function Docs(){

  var acc = document.getElementById("accordion");
  var mai = document.getElementById("main");

  // console.log(acc.style.display);
  if(acc.style.display=="none"){
    acc.style.display="block";
    main.style.width="66.6%";

  }
  else{
    acc.style.display="none";
    main.style.width="100%";
  }
}

function specialKey(e){
  if(e.key == "Enter"){
    makecalc();
  }
  if(e.key =="Shift"){
    //open auto-complete
  }
  //gestion de l'auto complétion ici
}

function makecalc(){
  var calc = document.getElementById("calc").value;
  var hist = document.getElementById("hist");
  var res = calcul(calc);
  if (calc != "" ){
  hist.innerHTML =      `   <li class="list-group-item d-flex justify-content-between align-items-center">
                ` + calc + `
                <div class="d-flex align-items-center">
                  <span class="badge badge-primary badge-pill" onclick="insert(this)">` + res +`</span>
                  <i class="material-icons" onclick="this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement)">delete</i>
                </div>
              </li>` + hist.innerHTML;
  document.getElementById("calc").value = "";
  }
}


function setup(){
  document.getElementById("b_save").onclick = function(){
    saveStrings(split(document.getElementById("hist").innerHTML,'\n'), "test.txt");
  }
  document.getElementById("b_load").onclick = function(){
    document.getElementById("hist").innerHTML = loadStrings("test(1).txt");
  }

}


Docs()
