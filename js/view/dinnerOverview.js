//ExampleView Object constructor
var DinnerOverview = function (container, model) {
	
	window.stateController.addView("dinnerOverview", this);
	model.addObserver(this)
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.editDinner = container.find("#editDinner");
	this.printRecipe = container.find("#printRecipe");
	
	this.numberOfGuests.html(model.getNumberOfGuests);

	this.show = function() {
		$("#dinnerOverview").show();
	}

	this.hide = function() {
		$("#dinnerOverview").hide();
	}

	var items = model.getFullMenu();
	_.each(items, function(dish) {
		$( "#rowImgOver" ).append( '<td><img class="bordered" src="images/'+dish["image"]+'""></td>' );
		$( "#rowNameOver" ).append( '<td><b>'+dish["name"]+'</b></td>' );
		$( "#rowCostOver" ).append( '<td>'+dish["cost"]+'</td>' );
	})

}