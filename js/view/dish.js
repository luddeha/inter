//ExampleView Object constructor
var Dish = function (container, model) {
	
	window.stateController.addView("dish", this);
	model.addObserver(this);
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfPeople = container.find("#numberOfPeople");
	this.confirmDinner = container.find("#confirmDinner");
	this.selectDish = container.find("#selectDish");
	this.confirmDish = container.find("#confirmDish");
	this.numberOfPeople = container.find("#numberOfGuests");
	var ingredientsRow = container.find("#ingredients");
	var img = container.find("#rowImgDish");
	var name = container.find("#rowNameDish");
	var description = container.find("#rowDescriptionDish");
	var totalPrice = container.find("#totalCost");
	var totalMenuPrice = container.find("#totalPrice");
	var sidebarMenu = container.find("#sidebarMenu");
	var dishId = 1;

	this.numberOfGuests.attr("value", model.getNumberOfGuests);
	this.numberOfPeople.html(model.getNumberOfGuests);

	this.show = function() {
		$("#dish").show();
	}

	this.hide = function() {
		$("#dish").hide();
	}

	this.setDishId = function(id) {
		console.log(id);
	}

	this.update = function(){
		var dish = model.getDish(model.getCurrentItem());

		// Remove prev ingredients
		ingredientsRow.empty();
		sidebarMenu.empty();

		this.numberOfPeople.val(model.getNumberOfGuests());

		_.each(dish["ingredients"], function(ingredient) {
			ingredientsRow.append( '<tr><td>'+ingredient["quantity"]*model.getNumberOfGuests()+ingredient["unit"]+'</td><td>'+ingredient["name"]+'</td><td>SEK</td><td>'+ingredient["price"]*model.getNumberOfGuests()+'</td></tr>' );
		})

		var items = model.getFullMenu();
		_.each(items, function(dish) {
			sidebarMenu.append( '<tr><td>'+dish["name"]+'</td><td>'+model.getTotalDishPrice(dish["id"])+'</td></tr>');
		})

		// Sets the total price in the view
		totalPrice.html(model.getTotalDishPrice(model.getCurrentItem()));
		totalMenuPrice.html(model.getTotalMenuPrice());

		// Remove previous elements
		img.empty();
		name.empty();
		description.empty();

		img.append( '<td><img class="bordered" src="images/'+dish["image"]+'""></td>' );
		name.append( '<td><b>'+dish["name"]+'</b></td>' );
		description.append( '<td>'+dish["description"]+'</td>' );
	}
}
