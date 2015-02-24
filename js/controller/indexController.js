var IndexController = function(view, model ) {
 	
	window.stateController.showIndex();

	view.createDinner.click(function(){
		window.stateController.showselectdish();
		model.setNumberOfGuests(5);
		console.log("createDinner");
	});

}