/*
  Tranforme (5+3)/2 en ['(','5','+','3',')','/','2']
*/

function lexe(exp){
  trans = []
	for (i in exp){
		letter = exp[i]
    if ("%,(+-/*)^".indexOf(letter) != -1 || "%,(+-/*)^".indexOf(trans[trans.length-1]) != -1 || trans.length == 0){
      trans.push(letter)
    }
    else{
      trans[trans.length-1] += letter
    }
	}
  return trans
}

class noeud{
  constructor(valeur, parent, fils) {
    this.valeur=valeur;
    this.parent=parent;
    this.fils= fils;
  }
}

var execTree = new noeud(undefined,undefined,[])

function defineTree(tabwords){
  // var execTree = new noeud();
  actuel = execTree;
  for(x in tabwords){
    lex=tabwords[x];
    if (Number.isInteger(Number(lex))){
      if (actuel.valeur === undefined){
        actuel.valeur = Number(lex);
      } else {
        actuel.fils.push(new noeud(Number(lex),actuel,[]));
      }
    } else if ("+-/%*^".indexOf(lex) != -1){
      switch (actuel.valeur) {
          case '+': priorityact = 1; break;
          case '-': priorityact = 1; break;
          case '/': priorityact = 2; break;
          case '%': priorityact = 2; break;
          case '*': priorityact = 2; break;
          case '^': priorityact = 3; break;
          default: priorityact = 0;
      }
      switch (lex) {
          case '+': prioritylex = 1; break;
          case '-': prioritylex = 1; break;
          case '/': prioritylex = 2; break;
          case '%': prioritylex = 2; break;
          case '*': prioritylex = 2; break;
          case '^': prioritylex = 3; break;
          default: prioritylex = 0;
      }
      if(prioritylex > priorityact){
        actuel = actuel.fils[actuel.fils.length-1];
      }
      tempnoeud = new noeud(lex)
      tempnoeud.fils = [actuel]


    }
  }
}
