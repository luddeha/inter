var DishController = function(view, model ) {
	
	model.addObserver(this)

	view.numberOfPeople.change(function(){
		model.setNumberOfGuests(view.numberOfPeople.val());
		console.log(view.numberOfPeople.val());
	});

	view.confirmDinner.click(function(){
		window.stateController.showDinnerOverview();
		console.log("confirmDinner");
	});

	view.selectDish.click(function(){
		window.stateController.showselectdish();
		console.log("selectDish");
	});

	view.confirmDish.click(function(){
		console.log("confirmDish"+model.getCurrentItem());
		model.addDishToMenu(model.getCurrentItem());
		window.stateController.showselectdish();
	});

	this.update = function() {
		$("tr[clickable]").click(function(){
			model.setCurrentItem(1);
			model.removeDishFromMenu(this.id);
			console.log("DishClickedSidebar"+this.id);
		});
	}

}