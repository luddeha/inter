var DinnerOverviewController = function(view, model ) {

	view.editDinner.click(function(){
		window.stateController.showselectdish();
		console.log("editDinner");
	});

	view.printRecipe.click(function(){
		window.stateController.showDinnerPreparation();
		console.log("printRecipe");
	});

}