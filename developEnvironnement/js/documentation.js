
       	var accordeon = document.getElementById("accordion");
       	docs = ["docs1", "docs2", "docs3", "docs4"]
       	for (i in docs) {
    		accordeon.innerHTML += `	
    			<div class="card">
					<div class="card-header" id="heading` + i + `">
						<h5 class="mb-0">
							<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse` + i + `" aria-expanded="false" aria-controls="collapse` + i + `">
				Fonction ` + i + `
							</button>
						</h5>
					</div>
					<div id="collapse` + i + `" class="collapse" aria-labelledby="heading` + i + `" data-parent="#accordion">
						<div class="card-body">
							Description ` + i + `
						</div>
					</div>
			  	</div>	`;
			  
					 
		} 

       
/*



<div id="accordion">
			  <!--
			  <div class="card">
				<div class="card-header" id="headingTwo">
				  <h5 class="mb-0">
					<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
					  Fonction 2
					</button>
				  </h5>
				</div>
				<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
				  <div class="card-body">
					Description 2
				  </div>
				</div>
			  </div>
			  <div class="card">
				<div class="card-header" id="headingThree">
				  <h5 class="mb-0">
					<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
					  Fonction 3
					</button>
				  </h5>
				</div>
				<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
				  <div class="card-body">
					Description 3
				  </div>
				</div>
			  </div>
			  <div class="card">
				<div class="card-header" id="headingFour">
				  <h5 class="mb-0">
					<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
					  Fonction 4
					</button>
				  </h5>
				</div>
				<div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
				  <div class="card-body">
					Description 4
				  </div>
				</div>
			  </div>
			</div>
			 Commentaire --> 
			 <script>
			 	createDocCard();
			 </script>
      </div>
      
      */
      
      
   
      
      
      
      
      
      
      
