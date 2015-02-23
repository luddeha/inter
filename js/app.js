$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views

	window.stateController = new StateController();
	var dinnerOverview = new DinnerOverview($("#dinnerOverview"), model);
	var dinnerOverviewController = new DinnerOverviewController(dinnerOverview,model);
	var dinnerPreparation = new DinnerPreparation($("#dinnerPreparation"), model);
	var dinnerPreparationController = new DinnerPreparationController(dinnerPreparation,model);
	var selectDish = new SelectDish($("#selectdish"), model);
	var selectDishController = new SelectDishController(selectDish,model);
	var dish = new Dish($("#dish"), model);
	var dishController = new DishController(dish,model);
	var index = new Index($("#index"), model);
	var indexController = new IndexController(index,model);

});