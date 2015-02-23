var DishController = function(view, model ) {

	view.confirmDinner.click(function(){
		window.stateController.showDinnerOverview();
		console.log("confirmDinner");
	});

	view.selectDish.click(function(){
		window.stateController.showselectdish();
		console.log("selectDish");
	});

	view.confirmDish.click(function(){
		window.stateController.showselectdish();
		console.log("confirmDish");
	});


}