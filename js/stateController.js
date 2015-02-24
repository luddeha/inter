var StateController = function() {

	var views = [];

	this.addView = function(name, view) {
		views[name] = view;
	}

	var hideAll = function() {
		views["index"].hide();
		views["dinnerOverview"].hide();
		views["dinnerPreparation"].hide();
		views["dish"].hide();
		views["selectdish"].hide();
		views["sidebar"].hide();
	}

	this.showDinnerOverview = function() {
		hideAll();
		views["dinnerOverview"].show();
	}

	this.showDinnerPreparation = function() {
		hideAll();
		views["dinnerPreparation"].show();
	}

	this.showDish = function(id) {
		hideAll();
		views["dish"].show();
	}

	this.showIndex = function() {
		hideAll();
		views["index"].show();
	}

	this.showselectdish = function() {
		hideAll();
		views["selectdish"].show();
	}

}