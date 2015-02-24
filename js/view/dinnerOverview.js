//ExampleView Object constructor
var DinnerOverview = function (container, model) {
	
	window.stateController.addView("dinnerOverview", this);
	model.addObserver(this)
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.editDinner = container.find("#editDinner");
	this.printRecipe = container.find("#printRecipe");
	var img = container.find("#rowImgOver");
	var name = container.find("#rowNameOver");
	var cost = container.find("#rowCostOver");
	var totalCost = container.find("#totalMenuCost");

	this.show = function() {
		$("#dinnerOverview").show();
	}

	this.hide = function() {
		$("#dinnerOverview").hide();
	}

	this.update = function() {
		// Remove prev elements
		img.empty();
		name.empty();
		cost.empty();

		this.numberOfGuests.html(model.getNumberOfGuests());

		var items = model.getFullMenu();
		console.log(items);
		_.each(items, function(dish) {
			img.append( '<td><img class="bordered" src="images/'+dish["image"]+'""></td>' );
			name.append( '<td><b>'+dish["name"]+'</b></td>' );
			cost.append( '<td>'+model.getTotalDishPrice(dish["id"])+'</td>' );
		})

		totalCost.html(model.getTotalMenuPrice());
	}

}