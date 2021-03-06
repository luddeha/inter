//ExampleView Object constructor
var DinnerPreparation = function (container, model) {
	
	window.stateController.addView("dinnerPreparation", this);
	model.addObserver(this)
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.editDinner = container.find("#editDinner");
	
	this.numberOfGuests.html(model.getNumberOfGuests);

	this.show = function() {
		$("#dinnerPreparation").show();
	}

	this.hide = function() {
		$("#dinnerPreparation").hide();
	}

	this.update = function() {
		
	}

	// Hide all pages
	//hideAll();
	//$("#dinnerPreparation").show();
	
}
