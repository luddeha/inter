var SelectDishController = function(view, model ) {

	
	view.confirmDinner.click(function(){
		window.stateController.showDinnerOverview();
		console.log("confirmDinner");
	});

	view.starter.click(function(){
		view.dropdownStarter();
		console.log("Starter");
	});

	view.main.click(function(){
		view.dropdownMain();
		console.log("Main");
	});

	view.desert.click(function(){
		view.dropdownDesert();
		console.log("Desert");
	});

	view.search.click(function(){
		console.log("Search");
	});
}