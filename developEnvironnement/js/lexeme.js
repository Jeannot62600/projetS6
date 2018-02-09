/*
  Tranforme (5+3)/2 en ['(','5','+','3',')','/','2']
*/

function lexe(exp){
  trans = []
	for (i in exp){
		letter = exp[i]
    if ("%,(+-/*)".indexOf(letter) != -1 || "%,(+-/*)".indexOf(trans[trans.length-1]) != -1 || trans.length == 0){
      trans.push(letter)
    }
    else{
      trans[trans.length-1] += letter
    }
	}
  return trans
}
