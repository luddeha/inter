var SelectDishController = function(view, model ) {

	
	view.confirmDinner.click(function(){
		window.stateController.showDinnerOverview();
		console.log("confirmDinner");
	});

	view.starter.click(function(){
		view.dropdownStarter();
		model.updateViews();
		console.log("Starter");
	});

	view.main.click(function(){
		view.dropdownMain();
		model.updateViews();
		console.log("Main");
	});

	view.desert.click(function(){
		view.dropdownDesert();
		model.updateViews();
		console.log("Dessert");
	});

	view.search.click(function(){
		console.log("Search");
	});
}