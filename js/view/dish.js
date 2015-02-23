//ExampleView Object constructor
var Dish = function (container, model) {
	
	window.stateController.addView("dish", this);
	model.addObserver(this)
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfPeople = container.find("#numberOfPeople");
	this.confirmDinner = container.find("#confirmDinner");
	this.selectDish = container.find("#selectDish");
	this.confirmDish = container.find("#confirmDish");
	var ingredientsRow = container.find("#ingredients");
	var img = container.find("#rowImgDish");
	var name = container.find("#rowNameDish");
	var description = container.find("#rowDescriptionDish");

	this.numberOfGuests.attr("value", model.getNumberOfGuests);
	this.numberOfPeople.html(model.getNumberOfGuests);

	this.show = function() {
		$("#dish").show();
	}

	this.hide = function() {
		$("#dish").hide();
	}

	this.update = function(){
		var dish = model.getDish(1);

		// Remove prev ingredients
		ingredientsRow.empty();


		_.each(dish["ingredients"], function(ingredient) {
			ingredientsRow.append( '<tr><td>'+ingredient["quantity"]+ingredient["unit"]+'</td><td>'+ingredient["name"]+'</td><td>SEK</td><td>'+ingredient["price"]+'</td></tr>' );
		})

		// Remove previous elements
		img.empty();
		name.empty();
		description.empty();


		var dish = model.getDish(1);
			img.append( '<td><img class="bordered" src="images/'+dish["image"]+'""></td>' );
			name.append( '<td><b>'+dish["name"]+'</b></td>' );
			description.append( '<td>'+dish["description"]+'</td>' );
	}
}
