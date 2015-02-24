//ExampleView Object constructor
var DinnerPreparation = function (container, model) {
	
	window.stateController.addView("dinnerPreparation", this);
	model.addObserver(this)
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.editDinner = container.find("#editDinner");
	var prepTable = container.find("#prepTable");
	
	this.numberOfGuests.html(model.getNumberOfGuests);

	this.show = function() {
		$("#dinnerPreparation").show();
	}

	this.hide = function() {
		$("#dinnerPreparation").hide();
	}

	this.update = function() {
		prepTable.empty();

		console.log("ingredients: "+ingredients);
		var items = model.getFullMenu();
		console.log(items);

		this.numberOfGuests.html(model.getNumberOfGuests());

		_.each(items, function(dish) {
			var ingredients = "";

			// get String of ingredients
			_.each(dish["ingredients"], function(ingredient) {
				ingredients = ingredients+ingredient["quantity"]*model.getNumberOfGuests()+ingredient["unit"]+" "+ingredient["name"]+"<br>";
			})

			prepTable.append('<tr><td><img class="bordered" src="images/'+dish["image"]+'"></td><td><h3>'+dish["name"]+'</h3><p>'+ingredients+'</p></td><td><h3>Preparation</h3><p>'+dish["description"]+'</p></td></tr>');
		})
	}

	// Hide all pages
	//hideAll();
	//$("#dinnerPreparation").show();
	
}
