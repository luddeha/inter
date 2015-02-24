var SelectDishController = function(view, model ) {
	
	model.addObserver(this)

	view.numberOfPeople.change(function(){
		model.setNumberOfGuests(view.numberOfPeople.val());
		console.log(view.numberOfPeople.val());
	});

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
		view.setSearch(view.searchString.val());
		model.updateViews();
		console.log("Search: "+view.searchString.val());
	});

	this.update = function(){
		$("img[clickable]").click(function(){
			model.setCurrentItem(this.id);
			window.stateController.showDish();
			console.log("DishClicked"+this.id);
		});


		$("tr[clickable]").click(function(){
			model.setCurrentItem(1);
			model.removeDishFromMenu(this.id);
			console.log("DishClickedSidebar"+this.id);
		});
	}
}