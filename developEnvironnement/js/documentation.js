
var json = `

{ "documentation":[

		{
			"nomFonction":"Puissance",
			"miniNom":"PUI",
			"descriptionFonction":"Donne la puissance",
			"préconditions":"a,b",
			"postconditions":"a^b",
			"exemple":"PUI(2,3)",
			"résultExemple":"8" 
		},

		{
			"nomFonction":"Intégral",
			"miniNom":"INT",
			"descriptionFonction":"Calcul une intégrale",
			"préconditions":"",
			"postconditions":"",
			"exemple":"INT(...)",
			"résultExemple":"..." 
		}, 
		
		{
			"nomFonction":"Matrice",
			"miniNom":"MAT",
			"descriptionFonction":"Créer une matrice",
			"préconditions":"",
			"postconditions":"",
			"exemple":"MAT(1,2,3;4,5,6;7,8,9)",
			"résultExemple":"La matrice" 
		}
	]
}

`

function recupJSON(){
	obj = JSON.parse(json);
	//document.getElementById("card-body1").innerHTML = obj.documentation[0].nomFonction

}

		recupJSON();
 		

       	var accordeon = document.getElementById("accordion");
       	for (doc in obj.documentation) {
       		var i = obj.documentation[doc];
    		accordeon.innerHTML += `	
    			<div class="card">
					<div class="card-header" id="heading` + i.nomFonction + `">
						<h5 class="mb-0">
							<i class="material-icons" 
								onclick="insert2('` + i.miniNom + `()')">reply
							</i>
							<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse` + i.nomFonction + `" aria-expanded="false" aria-controls="collapse` + i.nomFonction + `">
				
				<span id="nomFonction">` + i.nomFonction + `</span> 
				<span id="miniNom">` + i.miniNom + `</span> 
							</button>
						</h5>
					</div>
					<div id="collapse` + i.nomFonction + `" class="collapse" aria-labelledby="heading` + i.nomFonction + `" data-parent="#accordion">
						<div class="card-body" id="card-body` + i.nomFonction + `">
							<div id="desc">
								Description : ` + i.descriptionFonction + `
							</div>
							<div id="precond">
								Préconditions : ` + i.préconditions + `
							</div>
							<div id="postcond">
								Postconditions : ` + i.postconditions + `
							</div>
							<div id="exemple">
								Exemple : ` + i.exemple + `
							</div>
							<div id="result">
								= ` + i.résultExemple + `
							</div>
						</div>
					</div>
			  	</div>	`;
			  
					 
		}
		
		recupJSON(); 

       
      
      
   
      
      
      
      
      
      
      
