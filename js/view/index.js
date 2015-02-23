//ExampleView Object constructor
var Index = function (container, model) {
	
	window.stateController.addView("index", this);
	model.addObserver(this)
	
	this.createDinner = container.find("#createDinner");

	this.show = function() {
		$("#index").show();	
	}

	this.hide = function() {
		$("#index").hide();	
	}

	// Hide all pages
	//hideAll();
	
}
