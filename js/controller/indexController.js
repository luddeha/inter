var IndexController = function(view, model ) {
 	
	window.stateController.showIndex();

	view.createDinner.click(function(){
		window.stateController.showselectdish();
		console.log("createDinner");
	});

}