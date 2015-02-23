var DinnerPreparationController = function(view, model ) {

	view.editDinner.click(function(){
		window.stateController.showselectdish();
		console.log("editDinner");
	});

}