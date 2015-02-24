var Sidebar = function (container, model) {
	
	window.stateController.addView("sidebar", this);
	model.addObserver(this);


	this.show = function() {
		$("#sidebar").show();
	}

	this.hide = function() {
		$("#sidebar").hide();
	}

	this.update = function() {
		
	}
}