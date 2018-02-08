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
  return calc;
  //return parseInt(calc[0]) + parseInt(calc[2]);
}

function insert(last){
    var calc = document.getElementById("calc");
    var value = calc.value;
    var add = last.innerHTML;
    var res = value.slice(0,calc.selectionStart) + add + value.slice(calc.selectionEnd);
    calc.value = res;
}

function Docs(){
  document.getElementById("grid").innerHTML = `
  <div class="col-1-1">
    <div class="card">
    show docs
    </div>

  </div>
  ` + document.getElementById("grid").innerHTML
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
