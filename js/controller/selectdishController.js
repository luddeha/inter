var SelectDishController = function(view, model ) {
	
	model.addObserver(this)

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
			console.log("Dish"+this.id);
		});
	}
}